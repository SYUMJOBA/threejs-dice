
export const clickEventFunctions = [];

window.addEventListener("click", e => {
    clickEventFunctions.forEach(e => e());
});

export const keydownEventFunctions = [];

window.addEventListener("keydown", key => {
    keydownEventFunctions.forEach(e => e(key));
});