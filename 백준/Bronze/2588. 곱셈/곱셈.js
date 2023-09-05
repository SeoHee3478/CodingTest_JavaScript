let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num1 = input[0]
let num2 = input[1].split('');

let num3 = num1 * num2[2];
let num4 = num1 * num2[1];
let num5 = num1 * num2[0];
let num6 = num3 + 10 * num4 + 100 * num5

console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
