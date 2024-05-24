import { PerspectiveCamera, WebGLRenderer, Scene, Clock } from "three";
import { world } from "./world";
import CannonDebugger from "cannon-es-debugger";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//graphics
export const camera = new PerspectiveCamera(90, window.innerWidth/window.innerHeight, .1, 100);
export const renderer = new WebGLRenderer();
export const scene = new Scene();



document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.width = window.innerWidth;
renderer.domElement.height = window.innerHeight;

export const animationFunctions = [];

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.width = window.innerWidth;
    renderer.domElement.height = window.innerHeight;
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
});


export const clock = new Clock();

export const isDebugEnabled = false;
const cannonDebugger = new CannonDebugger(scene, world);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enabled = isDebugEnabled;

function animate() {
    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();
    world.fixedStep();
    if (isDebugEnabled) {
        cannonDebugger.update();
        controls.update();
    }
    animationFunctions.forEach(e => e(delta, elapsed));
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();