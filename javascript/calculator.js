let pre = "";
let cur = "";
let operator = "";


document.addEventListener("DOMContentLoaded", function() {
   let clear = document.querySelector("#clear");
   let divide = document.querySelector(".divide");
   let multiply = document.querySelector(".multiply");
   let subtract = document.querySelector(".subtract");
   let dot = document.querySelector(".dot");
   let equal = document.querySelector(".equal");
   let add = document.querySelector(".add");
   let number = document.querySelectorAll(".number");
   let previous = document.querySelector(".previous");
   let current = document.querySelector(".current");

   number.forEach((element) => { 
        element.addEventListener("click", function(e) {
        handlenumber(e.target.textContent);
        current.textContent = cur;
   })
    
   });

   divide.addEventListener("click", function(d) {
        handleOp(d.target.textContent);
        previous.textContent = pre + " " + operator;
        current.textContent = cur;
   })

   multiply.addEventListener("click", function(d) {
    handleOp(d.target.textContent);
    previous.textContent = pre + " " + operator;
    current.textContent = cur;
})

    subtract.addEventListener("click", function(d) {
    handleOp(d.target.textContent);
    previous.textContent = pre + " " + operator;
    current.textContent = cur;
})

    add.addEventListener("click", function(d) {
    handleOp(d.target.textContent);
    previous.textContent = pre + " " + operator;
    current.textContent = cur;

})

clear.addEventListener("click", function() {
    pre = "";
    cur = "";
    operator = "";
    previous.textContent = cur;
    current.textContent = cur;
})

equal.addEventListener("click", function() {
    calculate();

    previous.textContent = "";
    current.textContent = pre;
})

dot.addEventListener("click", function() {
    addDot();
})
})

function handlenumber(num) {
    if(cur.length <= 7){
    cur = cur + num;
    }
}

function handleOp(op) {
    operator = operator + op;
    pre = cur;
    cur = "";
}

function calculate() {
    pre = Number(pre);
    cur = Number(cur);

    if(operator === "+") {
        pre = pre + cur;
    } else if(operator === "-") {
        pre = pre - cur;
    } else if(operator === "*") {
        pre = pre * cur;
    } else if(operator === "/") {
        pre = pre / cur;
    }

    pre = pre.toString();
    cur = cur.toString();
}

function addDot() {
    if(!cur.includes(".")) {
        cur = cur + ".";
    }
}