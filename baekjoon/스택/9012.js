const solution = (input) => {
  const answer = [];
  const n = Number(input[0]);
  const arr = input.slice(1).map((v) => v.split(""));
  const check = (p) => {
    const stack = [];
    for (let i of p) {
      if (stack.length === 0) {
        if (i === ")") return false;
        stack.push(i);
        continue;
      }
      const pop = stack.pop();
      if (pop === "(" && i === ")") continue;
      if (pop === ")") return false;
      stack.push(pop);
      stack.push(i);
    }
    if (stack.length) return false;
    return true;
  };
  for (let i of arr) {
    answer.push(check(i) ? "YES" : "NO");
  }
  return answer.join("\n");
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim().split("\n");

console.log(solution(input));
