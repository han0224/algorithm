const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("");
const input = fs.readFileSync("baekjoon/예제.txt").toString().trim().split("");

let tmp = "";
let flag = false; //true: -, false: +
let answer = 0;

for (let i = 0; i <= input.length; i++) {
  if (isNaN(input[i])) {
    // + - 이면
    if (flag) {
      answer -= +tmp;
    } else {
      answer += +tmp;
    }
    if (input[i] === "-") {
      flag = true;
    }
    tmp = "";
  } else {
    tmp += input[i];
  }
}

console.log(answer);
