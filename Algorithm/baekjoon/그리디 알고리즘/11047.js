const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();.split("\n")
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\r\n");

const n = input[0].split(" ")[0];
const m = input[0].split(" ")[1];
const arr = input.slice(1).map((v) => Number(v));
let answer = 0;
let k = m;
for (let i = n - 1; i >= 0; i--) {
  if (k >= arr[i]) {
    const tmp = Math.floor(k / arr[i]);
    k -= tmp * arr[i];
    answer += tmp;
  }
}

console.log(+answer);
