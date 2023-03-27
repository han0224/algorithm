const integral = (input) => {
  const degree = input.match(/x/g)?.length || 0;
  const num = Number(input.match(/[0-9]/g).join(""));
  const resultNum = num / (degree + 1) === 1 ? "" : num / (degree + 1);
  return `${resultNum}${"x".repeat(degree + 1)}`;
};

const solution = (input) => {
  const index = input.search(/[+-]/);
  if (index > 0) {
    return (
      integral(input.slice(0, index)) +
      input[index] +
      integral(input.slice(index + 1, input.length))
    );
  } else {
    return integral(input);
  }
};

const path = process.platform === "linux" ? "/dev/stdin" : "baekjoon/예제.txt";

const fs = require("fs");
const input = fs.readFileSync(path).toString().trim();
if (input === "0") {
  console.log("W");
  return;
}
const answer =
  input[0] === "-"
    ? "-" + solution(input.slice(1, input.length))
    : solution(input);

console.log(answer + "+W");
