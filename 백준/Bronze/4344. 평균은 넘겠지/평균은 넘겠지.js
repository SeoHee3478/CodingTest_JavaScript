let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//테스트 케이스의 개수
let caseNumber = Number(input[0]);

//전체 테스트 케이스 반복문
for (let i = 1 ; i <= caseNumber; i++){
    let data = input[i].split(' ').map(Number); // 실제 테스트케이스 한 줄에 해당하는 예시 데이터 배열로 넣기
    let sum = 0; //평균값 구하기 위한 변수
    for(let j = 1 ; j <= data[0] ;j++){ // 테스트케이스 한 줄에 해당하는 데이터 하나하나 보기
        sum += data[j]
    }
    let avg = sum/data[0];
    let count = 0;
    for(let j = 1; j<=data[0];j++){
        if(avg < data[j]) count++ ;
    }
    let pro = count/data[0]*100;
    console.log(pro + "%");
}