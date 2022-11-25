const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\n");

const table = input.slice(1).map((v) => v.split("").map(Number));
for (let i = 0; i < table.length - 1; i++) {
  for (let j = 0; j < table[0].length - 1; j++) {
    if (
      table[i][j] > 0 &&
      table[i][j + 1] > 0 &&
      table[i + 1][j] > 0 &&
      table[i + 1][j + 1] > 0
    ) {
      table[i + 1][j + 1] =
        Math.min(table[i + 1][j], table[i][j + 1], table[i][j]) + 1;
    }
  }
}

let answer = 0;
for (let i = 0; i < table.length; i++) {
  for (let j = 0; j < table[0].length; j++) {
    if (answer < table[i][j]) answer = table[i][j];
  }
}
console.log(answer ** 2);
