const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((v) => +v);

// const input = fs
//   .readFileSync("baekjoon/예제.txt")
//   .toString()
//   .trim()
//   .split("")
//   .map((v) => +v);
const arr = new Array(10).fill(0);
input.forEach((v) => {
  arr[v]++;
});
arr[6] = Math.ceil((arr[6] + arr[9]) / 2);
arr[9] = 0;
console.log(Math.max(...arr));
