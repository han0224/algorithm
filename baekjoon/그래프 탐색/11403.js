const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs
//   .readFileSync("baekjoon/예제.txt")
//   .toString()
//   .trim()
//   .split("\r\n");

const n = +input[0];
const arr = input.slice(1).map((v) => v.split(" "));
const answer = [...arr];
const dfs = (visited, v, v_) => {
  for (let i = 0; i < n; i++) {
    if (+arr[v][i] === 1 && !visited[i]) {
      answer[v_][i] = 1;
      visited[i] = true;

      dfs(visited, i, v_);
    }
  }
};

for (let i = 0; i < n; i++) {
  const visited = new Array(n).fill(false);
  dfs(visited, i, i);
}

console.log(answer.map((v) => v.join(" ")).join("\n"));
