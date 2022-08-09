const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
// const input = fs.readFileSync("baekjoon/예제.txt").toString();

const fac = (n) => {
  if (n <= 1) return 1;
  return n * fac(n - 1);
};

const result = fac(input);
console.log(result);
