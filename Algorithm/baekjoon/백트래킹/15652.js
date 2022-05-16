const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("baekjoon/예제.txt").toString().trim().split(" ");

const n = +input[0];
const m = +input[1];
const answer = [];

const dfs = (tmp) => {
  if (tmp.length === m) {
    answer.push(tmp.join(" "));
    return;
  }
  const num = tmp[tmp.length - 1] || 1;
  for (let i = num; i < n + 1; i++) {
    dfs([...tmp, i]);
  }
};

dfs([]);
console.log(answer.join("\n"));
