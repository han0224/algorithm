const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split("\n")
//   .map((v) => v.split(" ").map((v) => +v));
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .split("\r\n")
  .map((v) => v.split(" ").map((v) => +v));

const N = input[0][0];
const K = input[0][1];
const arr = input.slice(1);
const result = new Array(N + 1).fill(0).map((v) => new Array(K + 1).fill(0));
// arr.sort((a, b) => a[0] - b[0]);
// 정렬이 문제였음
for (let i = 1; i <= N; i++) {
  const weight = arr[i - 1][0];
  const value = arr[i - 1][1];
  for (let j = 1; j <= K; j++) {
    if (weight <= j) {
      result[i][j] = Math.max(
        value + result[i - 1][j - weight],
        result[i - 1][j]
      );
    } else {
      result[i][j] = result[i - 1][j];
    }
  }
}
console.log(result[N][K]);
