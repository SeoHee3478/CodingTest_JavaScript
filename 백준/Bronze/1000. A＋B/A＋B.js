let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); //여러줄에 걸쳐서 입력을 받는 경우가 많기 때문에 한 줄 씩 받기 위함

//["1", "2"]
let line = input[0].split(' '); // 한 줄에 받은 것을 공백 기준으로 한 요소씩 넣기

let a = parseInt(line[0]); // 1 parseInt 대신에 number을 사용 가능
let b = parseInt(line[1]); // 2

console.log(a + b);