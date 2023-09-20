let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input[0].trim().split(' ');

if(arr == ""){
    console.log(0);
}
else{
    console.log(arr.length);
}