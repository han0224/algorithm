const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\r\n");

const M = +input[0];
const N = +input[1];

const table = new Array(N + 1).fill().map((v, i) => i);
const result = [];
for (let i = 2; i < N + 1; i++) {
  if (table[i] === 0) continue;
  result.push(i);
  for (let j = 2; j * i < N + 1; j++) {
    table[i * j] = 0;
  }
}
const filter = result.filter((v) => v >= M);
console.log(result);
console.log(filter);
if (filter.length === 0) {
  console.log(-1);
} else {
  console.log(filter.reduce((acc, cur) => acc + cur, 0));
  console.log(filter[0]);
}
