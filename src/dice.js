import { Body, Box, Vec3 } from "cannon-es";
import { BoxGeometry, Mesh, MeshMatcapMaterial } from "three";
import { animationFunctions, isDebugEnabled, scene } from "./globals";
import { world } from "./world";
import * as CANNON from "cannon-es";
import * as THREE from "three";
import { srcGeometries, extractNumMatrixAsList, extractVecArrayAsList as extractVec3ArrayAsList, applyUVsToGeometry } from "./geometries";
import { dieTextures } from "./texture";

const dieGraphicalGeometries = {
    4 : new THREE.PolyhedronGeometry(
        extractVec3ArrayAsList(srcGeometries[4].points),
        extractNumMatrixAsList(srcGeometries[4].faces),
        1,
        0
    ),
    6: new THREE.PolyhedronGeometry(
        extractVec3ArrayAsList(srcGeometries[6].points),
        extractNumMatrixAsList(srcGeometries[6].faces)
    ),
    8: new THREE.PolyhedronGeometry(
        extractVec3ArrayAsList(srcGeometries[8].points),
        extractNumMatrixAsList(srcGeometries[8].faces),
        1,
        0
    ),
    10: new THREE.PolyhedronGeometry(
        extractVec3ArrayAsList(srcGeometries[10].points),
        extractNumMatrixAsList(srcGeometries[10].faces),
        1,
        0
    ),
    12: new THREE.PolyhedronGeometry(
        extractVec3ArrayAsList(srcGeometries[12].points),
        extractNumMatrixAsList(srcGeometries[12].faces),
        1,
        0
    ),
    20: new THREE.PolyhedronGeometry(
        extractVec3ArrayAsList(srcGeometries[20].points),
        extractNumMatrixAsList(srcGeometries[20].faces),
        1,
        0
    )
}

export function prepareDiceGeometriesUVs() {
    applyUVsToGeometry(srcGeometries[4].uvs, dieGraphicalGeometries[4]);
    applyUVsToGeometry(srcGeometries[6].uvs, dieGraphicalGeometries[6]);
    applyUVsToGeometry(srcGeometries[8].uvs, dieGraphicalGeometries[8]);
    applyUVsToGeometry(srcGeometries[10].uvs, dieGraphicalGeometries[10]);
    applyUVsToGeometry(srcGeometries[12].uvs, dieGraphicalGeometries[12]);
    applyUVsToGeometry(srcGeometries[20].uvs, dieGraphicalGeometries[20]);
}
prepareDiceGeometriesUVs();

const diePhysicalGeometries = {
    4: new CANNON.ConvexPolyhedron({
        vertices: srcGeometries[4].points,
        faces: srcGeometries[4].faces
    }),
    6: new CANNON.Box(new Vec3(1, 1, 1)),
    8: new CANNON.ConvexPolyhedron({
        vertices: srcGeometries[8].points,
        faces: srcGeometries[8].faces
    }),
    10: new CANNON.ConvexPolyhedron({
        vertices: srcGeometries[10].points,
        faces: srcGeometries[10].faces
    }),
    12: new CANNON.ConvexPolyhedron({
        vertices: srcGeometries[12].points,
        faces: srcGeometries[12].faces
    }),
    20: new CANNON.ConvexPolyhedron({
        vertices: srcGeometries[20].points,
        faces: srcGeometries[20].faces
    })
}


const dieMass = 5;

const dieMaterials = {
    4: new MeshMatcapMaterial({color: 0xffffff, map: dieTextures[4]}),
    6: new MeshMatcapMaterial({color: 0xffffff, map: dieTextures[6]}),
    8: new MeshMatcapMaterial({color: 0xffffff, map: dieTextures[8]}),
    10: new MeshMatcapMaterial({color: 0xffffff, map: dieTextures[10]}),
    12: new MeshMatcapMaterial({color: 0xffffff, map: dieTextures[12]}),
    20: new MeshMatcapMaterial({color: 0xffffff, map: dieTextures[20]})
};

class Die {
    graphicalObject = new Mesh();
    physicalObject = new Body();
    faceCount = new Number(0);

    constructor(faces, position = undefined) {
        if (isDebugEnabled) {
            console.log("Die constructor called, faces: ", faces);
        }
        switch (faces) {
            case 4:
                this.graphicalObject = new Mesh(dieGraphicalGeometries[4], dieMaterials[4]);
                this.physicalObject = new Body({mass: dieMass, shape: diePhysicalGeometries[4], position: position ? position : new Vec3(0, 0, 0)})
                break;
                
            case 6:
                this.graphicalObject = new Mesh(dieGraphicalGeometries[6], dieMaterials[6]);
                this.physicalObject = new Body({mass: dieMass, shape: diePhysicalGeometries[6], position: position ? position : new Vec3(0, 0, 0)});
                break;
            
            case 8:
                this.graphicalObject = new Mesh(dieGraphicalGeometries[8], dieMaterials[8]);
                this.physicalObject = new Body({mass: dieMass, shape:diePhysicalGeometries[8], position: position ? position : new Vec3(0, 0, 0)});
                break;
            
            case 10:
                this.graphicalObject = new Mesh(dieGraphicalGeometries[10], dieMaterials[10]);
                this.physicalObject = new Body({mass: dieMass, shape: diePhysicalGeometries[10], position: position ? position : new Vec3(0, 0, 0)});
                break;
            
            case 12:
                this.graphicalObject = new Mesh(dieGraphicalGeometries[12], dieMaterials[12]);
                this.physicalObject = new Body({mass: dieMass, shape: diePhysicalGeometries[12], position: position ? position: new Vec3(0, 0, 0)});
                break;
            
            case 20:
                this.graphicalObject = new Mesh(dieGraphicalGeometries[20], dieMaterials[20]);
                this.physicalObject = new Body({mass: dieMass, shape: diePhysicalGeometries[20], position: position ? position: new Vec3(0, 0, 0)});
                break;
            
                default:
                    this.faceCount = 0;
                    return;
                }
        this.faceCount = faces;
    }

    add() {
        scene.add(this.graphicalObject);
        world.addBody(this.physicalObject);

        dieRegister.push(this);
    }

    update() {
        this.graphicalObject.position.copy(this.physicalObject.position);
        this.graphicalObject.quaternion.copy(this.physicalObject.quaternion);
    }

    destroy() {
        const index = dieRegister.indexOf(this);
        if (index != -1) dieRegister.splice(index, 1);
        scene.remove(this.graphicalObject);
        world.removeBody(this.physicalObject);
    }
}

export const dieRegister = [];

animationFunctions.push((delta, elapsed) => {
    dieRegister.forEach(e => e.update());
});


export default Die;