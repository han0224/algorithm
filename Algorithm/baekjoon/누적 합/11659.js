const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.split(" "));
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" "));

// reduce 써서 매번 계산하면 메모리 초과
// 따라서 미리 해당 인덱스까지의 합을 구함
const arr = input[1].map((v) => +v);
const section = input.slice(2);
const sum = [0];
for (let i = 1; i <= arr.length; i++) {
  sum.push(arr[i - 1] + sum[i - 1]);
}
const answer = [];
section.forEach((v) => {
  const [i, j] = [v[0] - 1, v[1]];
  answer.push(sum[j] - sum[i]);
});

console.log(answer.join("\n"));
