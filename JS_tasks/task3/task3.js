let num1 = document.getElementById("number1")
let num2 = document.getElementById("number2")
let element = document.getElementById("result")
function multiply(){
    const value1 = num1.value;
    const value2 = num2.value;
    let result = value1*value2;
    element.innerText = "Result is: " + result;
}
function divide(){
    const value1 = num1.value;
    const value2 = num2.value;
    if(value2==0){
        element.innerText("Cannot divide by zero");
    }
    else{
    let result = value1/value2;
    element.innerText = "Result is: " + result;
    }
}