let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a,b] = input[0].split(' ')

console.log(a-b);