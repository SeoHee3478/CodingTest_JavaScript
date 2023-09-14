let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let maxValue = 0;
let index = 0;

for(let i = 0; i < 9; i++){
    let data = Number(input[i]);
    if(maxValue < data){
        maxValue = data
        index = i;
    } ;    
}

console.log(maxValue);
console.log(index+1);
