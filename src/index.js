import { animationFunctions, camera, renderer, scene, world } from "./globals";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Vec3 } from "cannon-es";
import { diceRollOnSpace } from "./interaction";
import Die from "./dice";

camera.position.z = 0;
camera.position.y = 10;
camera.position.x = 0;
camera.rotateX(Math.PI / 2);

const die = new Die(6, new Vec3(0, 2, 0));
die.add(die);




const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;

animationFunctions.push((delta, elapsed) => {

});