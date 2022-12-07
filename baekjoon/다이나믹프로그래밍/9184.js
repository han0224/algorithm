const solution = (input) => {
  const answer = [];
  const dp = new Array(21)
    .fill(0)
    .map((v) => new Array(21).fill(0).map((v) => new Array(21).fill(0)));

  const wfun = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0) {
      return 1;
    } else if (a > 20 || b > 20 || c > 20) {
      return wfun(20, 20, 20);
    } else if (dp[a][b][c] !== 0) {
      return dp[a][b][c];
    } else if (a < b && b < c) {
      dp[a][b][c] =
        wfun(a, b, c - 1) + wfun(a, b - 1, c - 1) - wfun(a, b - 1, c);
    } else {
      dp[a][b][c] =
        wfun(a - 1, b, c) +
        wfun(a - 1, b - 1, c) +
        wfun(a - 1, b, c - 1) -
        wfun(a - 1, b - 1, c - 1);
    }
    return dp[a][b][c];
  };

  for (let i = 0; i < input.length - 1; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);
    const result = wfun(a, b, c);
    answer.push(`w(${a}, ${b}, ${c}) = ${result}`);
  }
  return answer.join("\n");
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim().split("\n");

console.log(solution(input));
