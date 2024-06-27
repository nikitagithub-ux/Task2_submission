let num1 = prompt("Give a number");
let result = 0;
while(num1>0){
    let integer = num1 % 10;
    result = result * 10 + integer;
    num1 = num1 / 10;
    num1 = parseInt(num1);
}
alert("Reverse of number is: " + result);