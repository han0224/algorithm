const solution = (input) => {
  const answer = [];
  input = input.split("\n");
  const n = Number(input[0]);
  const arr = input.slice(1).map((v) => v.split(""));
  const visited = new Array(n).fill(0).map((v) => new Array(n).fill(0));

  const bfs = (queue) => {
    const dy = [0, 1, 0, -1];
    const dx = [-1, 0, 1, 0];
    let answer = 0;
    while (queue.length) {
      const [x, y] = queue.shift();
      answer += 1;
      for (let i = 0; i < 4; i++) {
        const xx = dx[i] + x;
        const yy = dy[i] + y;
        if (xx >= arr.length || xx < 0 || yy >= arr.length || yy < 0) continue;
        if (arr[xx][yy] === "0" || visited[xx][yy]) continue;
        queue.push([xx, yy]);
        visited[xx][yy] = 1;
      }
    }
    return answer;
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === "1" && visited[i][j] === 0) {
        const queue = [[i, j]];
        visited[i][j] = 1;
        answer.push(bfs(queue));
      }
    }
  }

  return [answer.length, ...answer.sort((a, b) => a - b)].join("\n");
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim();

console.log(solution(input));
