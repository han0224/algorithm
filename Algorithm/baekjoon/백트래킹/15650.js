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
  const num = tmp[tmp.length - 1] !== undefined ? tmp[tmp.length - 1] : 0;
  for (let i = num; i < n; i++) {
    if (!tmp.includes(i + 1)) {
      dfs([...tmp, i + 1]);
    }
  }
};

dfs([]);
console.log(answer.join("\n"));
