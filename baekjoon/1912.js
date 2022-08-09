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

const [n, arr] = input;

const table = [arr[0]];
for (let i = 1; i < n[0]; i++) {
  const now = table[table.length - 1];
  if (arr[i] < 0) {
    if (now < arr[i]) {
      table.push(arr[i]);
    } else {
      table.push(now + arr[i]);
    }
  } else {
    if (now + arr[i] < arr[i]) {
      table.push(arr[i]);
    } else {
      table[table.length - 1] += arr[i];
    }
  }
}
console.log(table);
console.log(Math.max(...table));
