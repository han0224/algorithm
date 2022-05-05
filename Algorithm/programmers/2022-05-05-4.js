const DFS = (n, visited, computers) => {
  visited[n] = 1;
  for (let i = 0; i < computers[n].length; i++) {
    if (computers[n][i] && !visited[i]) {
      DFS(i, visited, computers);
    }
  }
};
function solution(n, computers) {
  var answer = 0;
  const visited = new Array(n).fill(0);
  while (visited.indexOf(0) > -1) {
    answer++;
    DFS(visited.indexOf(0), visited, computers);
  }
  return answer;
}
