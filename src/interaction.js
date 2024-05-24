import { Vec3 } from "cannon-es";
import Die, { dieRegister } from "./dice";
import { clickEventFunctions, keydownEventFunctions } from "./input";

const optionButton = document.getElementById("cube_facecount");
function getCurrentSelectedFacecount() {
    return Number(optionButton.options[optionButton.selectedIndex].value);
}

function addCube(facecount) {
    const newDie = new Die(facecount, new Vec3(Math.random()*4-2, Math.random()*2+1, Math.random()*4-2));
    
    newDie.add();
}

function removeCube(facecount) {
    const indexMatch = dieRegister.findIndex(e => e.faceCount === facecount);
    if (indexMatch != -1) {
        dieRegister[indexMatch].destroy();
    }
}

function rollDice() {
    dieRegister.forEach(die => {
            die.physicalObject.applyTorque(new Vec3(
                (Math.random()*4000)-2000,
                (Math.random()*4000)-2000,
                (Math.random()*4000)-2000
            ));
            die.physicalObject.applyImpulse(new Vec3(
                Math.random()*10 -5,
                40,
                Math.random()*10 -5
            ));
    });
}


export const diceRollOnSpace = keydownEventFunctions.push(key => {
    if (key.key == " ") rollDice();
});


export const addCubeOnA = keydownEventFunctions.push(key => {
    if (key.key == "a") {
        addCube(getCurrentSelectedFacecount());
    }
});

export const removeCubeOnR = keydownEventFunctions.push(key => {
    if (key.key == "r") {
        if (dieRegister.length > 0) {
            dieRegister[dieRegister.length-1].destroy();
        }
    }
});

export const spawnCubeOnButtonClick = document.getElementById("cube_spawn_button").addEventListener("click", event => {
    event.preventDefault();
    addCube(getCurrentSelectedFacecount());
});

export const removeCubeOnButtonClick = document.getElementById("cube_remove_button").addEventListener("click", event => {
    event.preventDefault();
    removeCube(getCurrentSelectedFacecount());
});

export const preventDefaultFormBehaviour = document.getElementById("diceManagerMenu").addEventListener("submit", event => event.preventDefault());

export const rollDiceOnButtonClick = document.getElementById("rollButton").addEventListener("click", event => {
    event.preventDefault();
    rollDice();
});