const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs
//   .readFileSync("baekjoon/예제.txt")
//   .toString()
//   .trim()
//   .split("\n");

const N = Number(input[0]);
const dp = new Array(N).fill(0);
let answer = 0;
const table = [];
for (let i = 1; i <= N; i++) {
  const [t, p] = input[i].split(" ").map(Number);
  table.push({ time: t, pay: p });
}
for (let i = 0; i < N; i++) {
  const { time, pay } = table[i];
  if (i + time > N) continue;
  dp[i] += pay;
  for (let j = i + time; j < N; j++) {
    dp[j] = Math.max(dp[i], dp[j]);
  }
}
console.log(Math.max(...dp));
