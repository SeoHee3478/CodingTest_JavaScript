function solution(n, computers) {
  let visited = new Array(n).fill(false);
  let count = 0;

  function dfs(start) {
    visited[start] = true;
    for (let i = 0; i < n; i++) {
      if (computers[start][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
}
