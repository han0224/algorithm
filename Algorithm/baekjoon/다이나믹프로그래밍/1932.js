const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs
//   .readFileSync("baekjoon/예제.txt")
//   .toString()
//   .trim()
//   .split("\r\n");

const N = input[0];
const arr = input.slice(1).map((v) => v.split(" ").map((v) => +v));

for (let i = 1; i < N; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    const pre = arr[i - 1][j - 1] || 0;
    const next = arr[i - 1][j] || 0;
    arr[i][j] += Math.max(pre, next);
  }
}

console.log(Math.max(...arr[N - 1]));
