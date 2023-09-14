let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = new Array(43).fill(0);
let res = 0;

for (let i = 0; i<10; i++){
    let data = Number(input[i]);
    res = data%42;
    arr[res] = 1;
}

let newArray = arr.filter((item, index) => item>=1)
console.log(newArray.length);