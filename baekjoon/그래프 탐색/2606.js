const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\r\n");

const [N, M] = [+input[0], input[1]];
const arr = input.slice(2).map((v) => v.split(" "));

const list = {};
for (let i = 1; i <= N; i++) {
  list[i] = [];
}
arr.forEach((v) => {
  list[v[0]].push(v[1]);
  list[v[1]].push(v[0]);
});
let answer = 0;
const visited = new Array(N).fill(0);
const dfs = (node) => {
  if (visited[node - 1] === 1) {
    return;
  }
  visited[node - 1] = 1;
  answer++;
  for (let i of list[node]) {
    dfs(i);
  }
};

dfs(1);
console.log(answer - 1);
