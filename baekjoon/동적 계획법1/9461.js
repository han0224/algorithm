const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
// const input = fs
//   .readFileSync("baekjoon/예제.txt")
//   .toString()
//   .trim()
//   .split("\r\n")
//   .map((v) => +v);

const N = input[0];
const arr = input.slice(1);
const max = Math.max(...arr);
const p = [1, 1, 1];
for (let i = 3; i < max; i++) {
  p.push(p[i - 3] + p[i - 2]);
}
const answer = arr.map((v) => p[v - 1]);
console.log(answer.join("\n"));
