import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

const triangleFaceTexture = textureLoader.load("textures/triangle_tex.png");
const cubeFaceTexture = textureLoader.load("textures/quad_tex.png");
const pentagonFaceTexture = textureLoader.load("textures/penta_tex.png");

export const dieTextures = {
    4: triangleFaceTexture,
    6: cubeFaceTexture,
    8: triangleFaceTexture,
    10: triangleFaceTexture,
    12: pentagonFaceTexture,
    20: triangleFaceTexture
};