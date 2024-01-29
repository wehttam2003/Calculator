
function add(a, b){
    return a + b;

}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function operate(a,operator,b){
    switch(operator){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }

}

const calcDisplay = document.querySelector(".display");
const calcNumberButtons = document.querySelectorAll("button");
const calcEqualButton = document.querySelector(".equal");
const calcClearButton = document.querySelector(".clear")

function populateDisplay(e){
    let cName = e.target.className
    let buttonValue = e.target.firstChild.data
    if (cName == "number" | cName == "operator"){
        calcDisplay.textContent += buttonValue
    }
}

Array.from(calcNumberButtons).forEach( (button)=> button.addEventListener( "click", populateDisplay));

calcClearButton.addEventListener("click", () => calcDisplay.textContent = "")
