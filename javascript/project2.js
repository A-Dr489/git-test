let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function() {  //document.addEventListener("DOMContentLoaded" will wait the html and css file to load first in the website
    createBoard(16); //default size

    document.querySelector("body").addEventListener("click", function(e) {
        if(e.target.tagName != "BUTTON") {
            click = !click;
            let draw = document.querySelector("#draw");
            if(click) {
                draw.innerHTML = "On";
            } else {
                draw.innerHTML = "Off";
            }
        }
    })

    let selectbtn = document.querySelector("#selectbtn");
    selectbtn.addEventListener("click", function() {
        let size = getSize();
        createBoard(size);
    });
})

function createBoard(size) {
    let sketch = document.querySelector(".sketch");
    sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketch.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDiv = size * size;
    for(let i = 0; i < numDiv; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        sketch.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    let input = prompt("Choose a size between 1 - 100");
    let msg = document.querySelector("#msg");
    if(input == "") {
        msg.innerHTML = "Please enter a number";
    } else if(input < 1) {
        msg.innerHTML = "Please enter a number between 1 - 100";
    } else if(input > 100) {
        msg.innerHTML = "Please enter a number between 1 - 100";
    } else {
        msg.innerHTML = "Now you can play!";
        return input;
    }
}

function colorDiv() {
    if(click) {
        if(color == "idk") {
             this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
         } else if(color == "white") {
            this.style.backgroundColor = "white";
         } else {
            this.style.backgroundColor = "black";
         }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetSketch() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}