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
const result = [];
arr.forEach((v) => {
  if (v === 0) {
    result.pop();
  } else {
    result.push(v);
  }
});
console.log(result.reduce((acc, cur) => acc + cur, 0));
