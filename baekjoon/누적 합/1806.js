const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const table = new Array(n).fill(0);
table[0] = arr[0];
const MAX = 100000000;
let answer = MAX;
for (let i = 1; i < n; i++) {
  table[i] = table[i - 1] + arr[i];
  if (arr[i - 1] === m) {
    answer = 1;
    break;
  }
  if (table[i] < m) continue;
  if (table[i] === m) answer = Math.min(answer, i + 1);
  for (let j = i - 1; j >= 0; j--) {
    if (table[i] - table[j] < m) continue;
    answer = Math.min(answer, i - j);
    break;
  }
}
console.log(answer === MAX ? 0 : answer);
