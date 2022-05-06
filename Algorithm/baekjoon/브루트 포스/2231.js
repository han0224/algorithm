const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
// const input = fs.readFileSync("baekjoon/예제.txt").toString();

let flag = false;
for (let i = 1; i < input * 2; i++) {
  const sum = i
    .toString()
    .split("")
    .reduce((acc, cur) => +acc + +cur, 0);
  const num = +i + +sum;
  if (num == input) {
    console.log(i);
    flag = true;
    break;
  }
}
if (!flag) console.log(0);
