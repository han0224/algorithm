const solution = (input) => {
  input = input.split(" ").map(Number);
  let answer = input[1] - input[0] + 1;
  const set = new Set();

  for (let i = 2; i * i <= input[1]; i++) {
    let a = Math.floor(input[0] / (i * i));
    if (a * (i * i) < input[0]) a += 1;
    while (a * (i * i) <= input[1]) {
      set.add(a * (i * i));
      a += 1;
    }
  }
  return answer - set.size;
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim();

console.log(solution(input));
