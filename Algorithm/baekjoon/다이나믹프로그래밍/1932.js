const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs
//   .readFileSync("baekjoon/예제.txt")
//   .toString()
//   .trim()
//   .split("\r\n");

const answer = [];
const [N, cards, M, search] = [
  input[0],
  input[1].split(" ").map((v) => +v),
  input[2],
  input[3].split(" ").map((v) => +v),
];
const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(start + end / 2);
  while (end - start >= 0) {
    if (target === arr[mid]) {
      return 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return 0;
};

cards.sort((a, b) => a - b);

search.forEach((v) => {
  answer.push(binarySearch(cards, v));
});

console.log(answer.join(" "));
