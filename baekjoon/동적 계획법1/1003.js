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

const N = input[0];
const testCase = input.slice(1);
const table = [
  [1, 0],
  [0, 1],
];

for (let i = 2; i <= 40; i++) {
  table.push([
    table[i - 1][0] + table[i - 2][0],
    table[i - 1][1] + table[i - 2][1],
  ]);
}
const result = [];
for (i of testCase) {
  result.push(table[i].join(" "));
}

console.log(result.join("\n"));
