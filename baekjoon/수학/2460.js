const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));
// const input = fs
//   .readFileSync("baekjoon/예제.txt")
//   .toString()
//   .trim()
//   .split("\r\n")
//   .map((v) => v.split(" ").map((v) => +v));
let result = 0;
let tmp = 0;
input.forEach((v) => {
  tmp -= v[0];
  tmp += v[1];
  result = result < tmp ? tmp : result;
});

console.log(result);
