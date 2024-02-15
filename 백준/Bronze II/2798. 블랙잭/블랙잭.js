let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 입력값 처리를 위한 함수
function processInput(input) {
  // 입력값 추출
  const [N, M] = input[0].split(' ').map(Number);
  const cards = input[1].split(' ').map(Number);

  // 최대 합 초기화
  let maxSum = 0;

  // 3장의 카드를 선택하기 위한 3중 반복문
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        const sum = cards[i] + cards[j] + cards[k];

        // 현재까지의 합이 M을 넘지 않고, 최대 합보다 크다면 최대 합 갱신
        if (sum <= M && sum > maxSum) {
          maxSum = sum;
        }
      }
    }
  }

  // 결과 반환
  return maxSum;
}

// 입력값 처리
const result = processInput(input);

// 결과 출력
console.log(result);
