const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\r\n");

const opers = input[2].split(" ").map((v) => +v);
const nums = input[1].split(" ").map((v) => +v);
let min = Infinity;
let max = -Infinity;
const dfs = (depth, result, plus, minus, multi, div) => {
  if (depth === nums.length) {
    min = Math.min(min, result);
    max = Math.max(max, result);
    return;
  }
  if (plus > 0) {
    dfs(depth + 1, result + nums[depth], plus - 1, minus, multi, div);
  }
  if (minus > 0) {
    dfs(depth + 1, result - nums[depth], plus, minus - 1, multi, div);
  }
  if (multi > 0) {
    dfs(depth + 1, result * nums[depth], plus, minus, multi - 1, div);
  }
  if (div > 0) {
    const newResult = result / nums[depth];
    dfs(
      depth + 1,
      newResult > 0 ? Math.floor(newResult) : Math.ceil(newResult),
      plus,
      minus,
      multi,
      div - 1
    );
  }
};
dfs(1, nums[0], opers[0], opers[1], opers[2], opers[3]);
console.log(max === 0 ? 0 : max);
console.log(min === 0 ? 0 : min);
