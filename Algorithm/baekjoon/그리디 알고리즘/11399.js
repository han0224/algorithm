const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs
//   .readFileSync("baekjoon/예제.txt")
//   .toString()
//   .trim()
//   .split("\r\n");

const n = +input[0];
const arr = input[1].split(" ").map((v) => +v);
arr.sort((a, b) => a - b);
let answer = arr[0];

for (let i = 1; i < n; i++) {
  arr[i] += arr[i - 1];
  answer += arr[i];
}

console.log(answer);
