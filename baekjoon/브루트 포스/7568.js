const fs = require("fs");
// const [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...input] = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\r\n");
const result = [];
let rank = 1;
const arr = input.map((v) => v.split(" "));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i != j && +arr[i][0] < +arr[j][0] && +arr[i][1] < +arr[j][1]) {
      rank++;
    }
  }
  result.push(rank);
  rank = 1;
}
console.log(result.join(" "));
