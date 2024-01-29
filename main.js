
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
const calcButtons = document.querySelectorAll("button");

function populateDisplay(e){
    let cName = e.target.className
    let buttonValue = e.target.firstChild.data
    if (cName == "number" | cName == "operator"){
        calcDisplay.textContent += buttonValue
    }
}
Array.from(calcButtons).forEach( (button)=> button.addEventListener( "click", populateDisplay));

//STORE WHAT IS IN THE DISPLAY IN A VARIABLE