let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let newArray = [...new Set(arr)];
newArray.sort(function compare(a,b){
    return a-b;
})

let myMap = new Map();
for(let i = 0; i<newArray.length; i++){
    myMap.set(newArray[i], i);
}

answer ="";
for(x of arr) answer += myMap.get(x) + " ";
console.log(answer);
