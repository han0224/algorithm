const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
// const input = fs.readFileSync("baekjoon/예제.txt").toString();

const f = (n) => {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else return f(n - 1) + f(n - 2);
};

const result = f(input);
console.log(result);
