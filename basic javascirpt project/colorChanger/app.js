//select DOM objects
let button = document.querySelector("#button");
let canvas = document.querySelector("#canvas");

//add "click" event listner on button
button.addEventListener("click", colorChanger);

//function to change the color of canvas
function colorChanger() {
    // 1.used random function to generate random number 
    // 2. used toString(16) to convert the number to hexa decimal number
    let randomHex = Math.floor(Math.random() * 16000000).toString(16);
    canvas.style.backgroundColor = `#${randomHex}`
}