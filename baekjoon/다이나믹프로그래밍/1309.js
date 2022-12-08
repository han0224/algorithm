const solution = (input) => {
  let answer = 0;
  const dp = new Array(input + 1).fill(0).map((v) => new Array(3).fill(0));
  dp[1][0] = 1;
  dp[1][1] = 1;
  dp[1][2] = 1;
  for (let i = 2; i <= input; i++) {
    dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901;
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 9901;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % 9901;
  }
  return (dp[input][0] + dp[input][1] + dp[input][2]) % 9901;
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = +fs.readFileSync(path).toString().trim();

console.log(solution(input));
