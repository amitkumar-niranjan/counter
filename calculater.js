//1 - Variables
//Implement your own calculator.

function add(n1,n2){
    return n1+n2;
}
function sub(num1, num2){
    return num1 - num2;
}
function mul(num1, num2){
    return num1*num2;
}
function div(num1, num2){
    return num1/num2;
}
function calculator(num1, num2, str){
    console.log(num1, num2, str)
    if( str ==="+") return add(num1, num2);
    if( str === "-") return sub(num1,num2);
    if( str ==="*") return mul(num1, num2);
    if( str === "/") return div(num1, num2)
}

console.log(calculator(10, 20, "+"));
console.log(calculator(20, 5, "-"));
console.log(calculator(10, 5, "*"));
console.log(calculator(20, 2, "/"));
