let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

let result = 0;
let cnt = 0;
/*
let i = 1;
while(result<=n){
    result += i;
    i++;
    cnt++;
}
*/

for(let i = 1; result<=n;i++){
    result += i;
    cnt++;
}

console.log(cnt-1);