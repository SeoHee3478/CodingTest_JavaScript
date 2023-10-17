let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0]);
let arr = [];
for(let i = 1; i<=number; i++){
    let age = Number(input[i].split(' ')[0]);
    let name = input[i].split(' ')[1];
    arr.push([age, name, i]);
}

function compare(a,b){
    if (a[0] != b[0]) return a[0]-b[0];
    else return a[2]-b[2];
}

arr.sort(compare);

let answer = "";
for(let x of arr){
    answer += x[0] + " " + x[1] + "\n";
}
console.log(answer);