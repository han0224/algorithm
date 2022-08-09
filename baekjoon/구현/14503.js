const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.split(" ").map((e) => +e));

const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" ").map((e) => +e));

let [y, x, d] = input[1];
const arr = input.slice(2);
let answer = 0;
let flag = 0;
const dfs = (xx, yy, dd) => {
  //   console.log(xx, yy, dd, flag, answer);
  if (flag) return;
  if (arr[yy][xx] === 0) answer++;
  arr[yy][xx] = 2;
  //   console.log("[ dfs ]");
  for (let i = 0; i < 4; i++) {
    if (flag) return;
    // console.log(`i: ${i} (${xx},${yy}) dd : ${dd}`);
    if (dd === 0 && arr[yy][xx - 1] === 0) {
      dfs(xx - 1, yy, 3);
    } else if (dd === 3 && arr[yy + 1][xx] === 0) {
      dfs(xx, yy + 1, 2);
    } else if (dd === 2 && arr[yy][xx + 1] === 0) {
      dfs(xx + 1, yy, 1);
    } else if (dd === 1 && arr[yy - 1][xx] === 0) {
      dfs(xx, yy - 1, 0);
    }
    dd = dd === 0 ? 3 : dd - 1;
  }
  if (dd === 0) {
    if (arr[yy + 1][xx] === 1) flag = 1;
    dfs(xx, yy + 1, 0);
  } else if (dd === 1) {
    if (arr[yy][xx - 1] === 1) flag = 1;
    dfs(xx - 1, yy, 1);
  } else if (dd === 2) {
    if (arr[yy - 1][xx] === 1) flag = 1;
    dfs(xx, yy - 1, 2);
  } else if (dd === 3) {
    if (arr[yy][xx + 1] === 1) flag = 1;
    dfs(xx + 1, yy, 3);
  }
};

dfs(x, y, d);
console.log(arr);
console.log(answer);
