const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => +v);
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => +v);
const num = input.reduce((acc, cur) => acc + cur, 0) - 100;
let dwarf = [];
let flag = false;
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (i === j) continue;
    if (input[i] + input[j] === num) {
      dwarf = input.filter((v) => v !== input[i] && v !== input[j]);
      flag = true;
      break;
    }
  }
  if (flag) break;
}
console.log(dwarf.sort((a, b) => a - b).join("\n"));
