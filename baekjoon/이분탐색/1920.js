const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.split(" ").map((v) => +v));
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" ").map((v) => +v));

const [N, arr, M, search] = input;
arr.sort((a, b) => a - b);
const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (end - start >= 0) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return 0;
};
const answer = [];
for (let i = 0; i < M; i++) {
  answer.push(binarySearch(arr, search[i]));
}

console.log(answer.join("\n"));
