const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.split(" "));
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" "));

const H = +input[0][0];
const W = +input[0][1];
const arr = input[1].map((v) => +v);
let answer = 0;

for (let i = H; i > 0; i--) {
  const stick = arr.reduce((pre, cur, index) => {
    if (cur >= i) {
      pre.push(index);
    }
    return pre;
  }, []);
  if (stick.length <= 1) continue;

  // index, result
  const [, result] = stick.reduce(
    (pre, cur) => {
      if (cur === pre[0]) pre;
      if (cur - pre[0] > 1) {
        pre[1] += cur - pre[0] - 1;
      }
      pre[0] = +cur;
      return pre;
    },
    [stick[0], 0]
  );
  answer += result;
}

console.log(answer);
