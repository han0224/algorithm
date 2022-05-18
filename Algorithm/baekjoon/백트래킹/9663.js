const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();
// const input = +fs.readFileSync("baekjoon/예제.txt").toString().trim();

const arr = new Array(input).fill(0);
let answer = 0;

const check = (row) => {
  for (let i = 0; i < row; i++) {
    if (arr[row] === arr[i] || row - i === Math.abs(arr[row] - arr[i])) {
      return false;
    }
  }
  return true;
};

const dfs = (row) => {
  if (row === input) {
    answer++;
    return;
  }
  for (let col = 0; col < input; col++) {
    if (arr[row]) continue;
    arr[row] = col;
    if (check(row)) dfs(row + 1);
    arr[row] = 0;
  }
};

dfs(0);
console.log(answer);
