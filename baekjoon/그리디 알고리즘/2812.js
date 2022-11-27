const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split("").map(Number);
const stack = [];
let count = k;
for (let i = 0; i < n; i++) {
  const current = arr[i];

  while (stack.length && stack[stack.length - 1] < current && count) {
    stack.pop();
    count -= 1;
  }
  stack.push(current);
}

for (let i = 0; i < count; i++) {
  stack.pop();
}

console.log(stack.join(""));
