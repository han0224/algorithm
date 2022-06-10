const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\r\n");

const searchNewomer = (n, arr) => {
  arr.sort((a, b) => a[0] - b[0]);
  let tmp = n + 1;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i][1] < tmp) {
      tmp = arr[i][1];
      ans++;
    }
  }
  return ans;
};

const T = input[0];
const answer = [];
for (let i = 0; i < T; i++) {
  const n = input.splice(1, 1);
  const arr = input.splice(1, n).map((v) => v.split(" ").map((v) => +v));
  answer.push(searchNewomer(+n, arr));
}

console.log(answer.join("\n"));
