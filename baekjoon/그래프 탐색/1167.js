const solution = (input) => {
  const N = Number(input.shift()[0]);
  const arr = input;
  const tree = {};
  for (let i = 1; i <= N; i++) {
    tree[i] = [];
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length - 1; j += 2) {
      tree[arr[i][0]].push([arr[i][j], arr[i][j + 1]]);
    }
  }
  let answer = 0;
  let node = 0;
  const dfs = (start, visited, total) => {
    visited[start] = true;
    if (answer < total) {
      answer = total;
      node = start;
    }
    tree[start].forEach((v) => {
      if (!visited[v[0]]) dfs(v[0], visited, total + v[1]);
    });
  };
  const visited = new Array(N + 1).fill(false);
  dfs(1, visited, 0);
  visited.fill(false);
  dfs(node, visited, 0);
  return answer;
};

const path = process.platform === "linux" ? "/dev/stdin" : "baekjoon/예제.txt";

const fs = require("fs");
const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(solution(input));
