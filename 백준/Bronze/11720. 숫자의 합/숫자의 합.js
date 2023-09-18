let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0]);

let arr = input[1].split('').map(Number);
let sum = 0;
for(i=0;i<number;i++){
    sum += arr[i];
}

console.log(sum);