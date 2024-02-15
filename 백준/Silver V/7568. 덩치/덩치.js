let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let people = input.slice(1).map(line => line.split(' ').map(Number));

let rank = new Array(n).fill(1);

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(people[i][0] > people[j][0] && people[i][1] > people[j][1]){
            rank[j]++;
        }
    }
}

console.log(rank.join(' '));
