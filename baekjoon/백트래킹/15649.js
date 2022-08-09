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
  for (let i = 0; i < n; i++) {
    if (!tmp.includes(i + 1)) {
      dfs([...tmp, i + 1]);
    }
  }
};

dfs([]);
console.log(answer.join("\n"));
