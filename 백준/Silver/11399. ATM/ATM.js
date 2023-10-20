 let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0])
let arr = input[1].split(' ').map(Number);

arr.sort((a,b)=> a-b);

let answer = 0;
let summary = 0;
for(let i = 0; i<number; i++){
    summary += arr[i];
    answer += summary;
}

console.log(answer);