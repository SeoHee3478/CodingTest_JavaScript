function solution(numbers, target) {
  let count = 0;

  function dfs(index, sum) {
    if (index === numbers.length) { // 모든 숫자를 사용한 경우
      if (sum === target) {
        count++; // 목표값과 일치하면 경우의 수 증가
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]); // 현재 숫자를 더하는 경우
    dfs(index + 1, sum - numbers[index]); // 현재 숫자를 빼는 경우
  }

  dfs(0, 0); // 초기값으로 시작
  return count;
}