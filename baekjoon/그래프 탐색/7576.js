const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const arr = input.slice(1).map((v) => v.split(" ").map(Number));
  const visited = new Array(M).fill(false).map((v) => new Array(N).fill(false));
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const queue = [];
  let answer = N * M;
  let result = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 0) continue;
      answer -= 1;
      if (arr[i][j] === 1) queue.push([i, j, 0]);
    }
  }
  let index = 0;
  while (queue.length !== index) {
    const [x, y, cnt] = queue[index];
    index += 1;
    result = cnt;
    for (let i = 0; i < 4; i++) {
      const xx = dx[i] + x;
      const yy = dy[i] + y;
      if (xx < 0 || yy < 0 || xx >= M || yy >= N) continue;
      if (visited[xx][yy] || arr[xx][yy] !== 0) continue;
      visited[xx][yy] = true;
      answer -= 1;
      queue.push([xx, yy, cnt + 1]);
    }
  }
  return answer ? -1 : result;
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim().split("\n");

console.log(solution(input));
