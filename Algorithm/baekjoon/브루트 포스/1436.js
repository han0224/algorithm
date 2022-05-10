const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
// const input = fs.readFileSync("baekjoon/예제.txt").toString();

let n = +input;
let answer = 665;
while (n > 0) {
  answer++;
  if (answer.toString().includes("666")) {
    n--;
  }
}

console.log(answer);
