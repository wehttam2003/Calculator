
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
const calcNumberButtons = document.querySelectorAll(".numbers");
const calcOperatorButtons = document.querySelectorAll(".operators")
const calcEqualButton = document.querySelector(".equal");
const calcClearButton = document.querySelector(".clear")

function populateDisplay(e){
    let cName = e.target.className
    let buttonValue = e.target.firstChild.data
    if (cName == "number"){
        calcDisplay.textContent += buttonValue
    }
    if (cName == "operator"){
        calcDisplay.textContent += ` ${buttonValue} `
    }
}

function evaluate(){
    const expression = calcDisplay.textContent.split(" ")
    if (expression[expression.length-1]==""){
        expression.splice(expression.length-2);
    }
    if (expression[0]==""){
        expression.splice(0,2);
    }
    let newNums = expression.map( function(num){
        
        let newNum = parseInt(num);
        if (isNaN(newNum)){
            return num
        }else{
            return newNum;
        }

    });

    //evaluate the expression
    let firstExpression = newNums.slice(0,3)
    let total = operate(firstExpression[0],firstExpression[1],firstExpression[2])
    newNums.splice(0,3)


    function evaluate(arr){
        if (arr.length==0){
            return total
        }else{
            total = operate(total,arr[0],arr[1])
            return evaluate(arr.splice(2))
        }
    }
    
    calcDisplay.textContent = evaluate(newNums)
}

Array.from(calcNumberButtons).forEach( (button)=> button.addEventListener( "click", populateDisplay));
Array.from(calcOperatorButtons).forEach( (button)=> button.addEventListener( "click", populateDisplay));

calcClearButton.addEventListener("click", () => calcDisplay.textContent = "")

calcEqualButton.addEventListener("click", evaluate)
