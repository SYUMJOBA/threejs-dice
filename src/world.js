import { World, Body, Vec3 } from "cannon-es";
import * as CANNON from "cannon-es";

//physics
export const world = new World({
    gravity: new Vec3(0, -9.82, 0)
});
export const ground = new Body({
    type: CANNON.Body.STATIC,
    shape: new CANNON.Plane()
});
ground.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
world.addBody(ground);
export const capGround = new Body({
    type: CANNON.Body.STATIC,
    shape: new CANNON.Plane()
});
capGround.quaternion.setFromEuler(Math.PI / 2, 0, 0);
capGround.position.y = 8;
world.addBody(capGround);

export const topGround = new Body({
    type: CANNON.Body.STATIC,
    shape: new CANNON.Plane()
});
topGround.position.z = -5;  
world.addBody(topGround);

export const bottomGround = new Body({
    type: CANNON.Body.STATIC,
    shape: new CANNON.Plane()
});
bottomGround.position.z = 5;
bottomGround.quaternion.setFromEuler(Math.PI, 0, 0);
world.addBody(bottomGround);

export const leftGround = new Body({
    type: CANNON.Body.STATIC,
    shape: new CANNON.Plane()
});
leftGround.quaternion.setFromEuler(0, -Math.PI/2, 0);
leftGround.position.x = 5;
world.addBody(leftGround);

export const rightGround = new Body({
    type: CANNON.Body.STATIC,
    shape: new CANNON.Plane()
});
rightGround.quaternion.setFromEuler(0, Math.PI/2, 0);
rightGround.position.x = -5;
world.addBody(rightGround);