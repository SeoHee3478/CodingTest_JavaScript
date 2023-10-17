let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0]);
let arr= [];
    
for(let i = 1; i<=number; i++){
    arr.push(input[i]);
}

arr = [...new Set(arr)];

function compare (a,b) {
    if (a.length != b.length) return a.length-b.length; 
    else {
        if(a<b) return -1;
        else if(a>b) return 1;
        else return 0;
    }
}
arr.sort(compare); 

let answer = "";
for(let x of arr){
    console.log(x)
}
