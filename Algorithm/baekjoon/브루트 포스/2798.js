const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\r\n");
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\n");
const a = input[0].split(" ");
const b = input[1].split(" ").map((v) => Number(v));
// console.log(a[1], b);
const fun = () => {
  let big = 0;
  for (let i = 0; i < a[0]; i++) {
    for (let j = i + 1; j < a[0]; j++) {
      for (let k = j + 1; k < a[0]; k++) {
        if (b[i] + b[j] + b[k] == a[1]) return a[1];
        if (b[i] + b[j] + b[k] < a[1]) {
          big = big < b[i] + b[j] + b[k] ? b[i] + b[j] + b[k] : big;
        }
      }
    }
  }
  return big;
};
console.log(fun());
