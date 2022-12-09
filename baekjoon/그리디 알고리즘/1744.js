const solution = (input) => {
  let answer = 0;
  const arr = input.slice(1).map(Number);
  arr.sort((a, b) => b - a);

  const negative = arr.filter((v) => v < 0).sort((a, b) => a - b);
  const positive = arr.filter((v) => v > 0);
  const zero = arr.filter((v) => v === 0);
  const tmp = [];
  if (positive.length % 2 === 1) tmp.push(positive.pop());
  if (negative.length % 2 === 1) tmp.push(negative.pop());

  for (let i = 0; i < negative.length - 1; i += 2) {
    answer += negative[i] * negative[i + 1];
  }
  let i;
  for (i = 1; i < positive.length; i++) {
    if (positive[i - 1] * positive[i] > positive[i - 1] + positive[i]) {
      answer += positive[i - 1] * positive[i];
      i += 1;
    } else {
      answer += positive[i - 1];
    }
  }
  if (i === positive.length) answer += positive.pop();

  if (tmp[tmp.length - 1] < 0 && zero.length > 0) {
    tmp.pop();
    zero.pop();
  }

  return answer + tmp.reduce((acc, cur) => acc + cur, 0);
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim().split("\n");

console.log(solution(input));
