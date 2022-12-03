const solution = (input) => {
  let answer = 0n;
  const [n, ...arr] = input.split("\n").map(Number);
  const stack = [arr[0]];
  for (let i = 1; i < n; i++) {
    const top = stack[stack.length - 1];
    if (top > arr[i]) stack.push(arr[i]);
    else {
      while (stack.length) {
        if (stack[stack.length - 1] > arr[i]) break;
        stack.pop();
      }
      stack.push(arr[i]);
    }
    answer += BigInt(stack.length - 1);
  }
  return answer.toString(10);
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim();

console.log(solution(input));
