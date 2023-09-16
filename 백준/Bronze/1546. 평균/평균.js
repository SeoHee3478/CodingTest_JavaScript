let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0]); // 과목 수 구하기
let score = input[1].split(' ').map(Number); // 모든 과목의 점수 배열
let sum = 0; // 과목 총점
let max = Math.max(...score); //과목 점수 중에서 최댓값 구하기

for(let i = 0; i<number; i++){
    sum +=score[i];
}

console.log(`${((sum * 100)/max)/number}`)
