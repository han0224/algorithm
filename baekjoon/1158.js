const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("baekjoon/예제.txt").toString().trim().split(" ");

const N = +input[0];
const K = +input[1];

const arr = new Array(N).fill().map((v, i) => i + 1);
let index = 0;
const result = [];
while (arr.length > 0) {
  index = (index + K - 1) % arr.length;
  result.push(arr[index]);
  arr.splice(index, 1);
}

console.log(`<${result.join(", ")}>`);
