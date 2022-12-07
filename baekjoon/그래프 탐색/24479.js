const solution = (input) => {
  input = input.split("\n");
  const [n, _, r] = input[0].split(" ").map(Number);
  const arr = input.slice(1).map((v) => v.split(" ").map(Number));
  const visited = new Array(n + 1).fill(false);
  const list = new Map();
  const answer = new Array(n).fill(0);
  let time = 1;
  arr.forEach((v) => {
    if (list.get(v[0])) list.get(v[0]).push(v[1]);
    else list.set(v[0], [v[1]]);
    if (list.get(v[1])) list.get(v[1]).push(v[0]);
    else list.set(v[1], [v[0]]);
  });
  for (let [v, arr] of list) {
    list.set(
      v,
      arr.sort((a, b) => a - b)
    );
  }
  const dfs = (r) => {
    visited[r] = true;
    time += 1;
    if (!list.has(r)) return;
    for (let i of list.get(r)) {
      if (visited[i]) continue;
      answer[i - 1] = time;
      dfs(i);
    }
  };
  answer[r - 1] = time;
  dfs(r);
  return answer.join("\n");
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim();

console.log(solution(input));
