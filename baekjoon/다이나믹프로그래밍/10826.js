const solution = (input) => {
  const fi = [0n, 1n];
  for (let i = 2; i <= input; i++) {
    fi.push(fi[i - 1] + fi[i - 2]);
  }
  return fi[input].toString();
};

const path = process.platform === "linux" ? "/dev/stdin" : "baekjoon/예제.txt";

const fs = require("fs");
const input = fs.readFileSync(path).toString().trim();

console.log(solution(Number(input)));
