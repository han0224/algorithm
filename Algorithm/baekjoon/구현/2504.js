const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

// const input = fs.readFileSync("baekjoon/예제.txt").toString().trim().split("");
const stack = [];
const left = ["[", "("];
const right = ["]", ")"];
for (let i = 0; i < input.length; i++) {
  if (stack.length === 0) {
    stack.push(input[i]);
  } else {
    if (left.includes(input[i])) {
      stack.push(input[i]);
    } else {
      if (input[i] === "]") {
        if (stack[stack.length - 1] === "[") {
          stack.pop();
          stack.push(3);
        } else if (stack[stack.length - 2] === "[") {
          // 바로 전이 숫자
          const tmp = stack.pop();
          stack.pop();
          stack.push(tmp * 3);
        } else {
          stack.push(input[i]);
        }
      } else if (input[i] === ")") {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
          stack.push(2);
        } else if (stack[stack.length - 2] === "(") {
          // 바로 전이 숫자
          const tmp = stack.pop();
          stack.pop();
          stack.push(tmp * 2);
        } else {
          stack.push(input[i]);
        }
      }
      if (!isNaN(stack[stack.length - 2])) {
        const tmp = stack.pop();
        stack[stack.length - 1] += tmp;
      }
    }
  }
}
if (stack.length > 1 || isNaN(stack[0])) {
  console.log(0);
} else {
  console.log(stack[0]);
}
