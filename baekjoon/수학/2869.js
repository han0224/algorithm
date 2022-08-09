const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
// const input = fs
//   .readFileSync("baekjoon/예제.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map((v) => +v);

console.log(Math.ceil((input[2] - input[1]) / (input[0] - input[1])));
