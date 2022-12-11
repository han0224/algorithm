const solution = (input) => {
  const [n, m] = input[0].split(" ").map(Number);
  const num = input[1].split(" ").map(Number);
  const arr = input.slice(2).map((v) => v.split(" ").map(Number));
  const cost = new Array(n + 1).fill(0);
  const g = new Array(n + 1).fill(0).map((v) => []);

  for (let i = 1; i < n; i++) {
    g[num[i]].push(i + 1);
  }
  for (let i = 0; i < m; i++) {
    cost[arr[i][0]] += arr[i][1];
  }
  const dfs = (v) => {
    for (let i of g[v]) {
      cost[i] += cost[v];
      dfs(i);
    }
  };
  dfs(1);
  return cost.slice(1).join(" ");
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim().split("\n");

console.log(solution(input));
