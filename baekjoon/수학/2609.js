const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
// const input = fs
//   .readFileSync("baekjoon/예제.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map((v) => +v);
/**
 * 유클리드 호제법
 * 자연수 a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면 (단 a>b)
 * a와 b의 최대공약수는 b와 r의 최대공약수와 같다
 * 이 후 b를 r로 나눈 나머지 r0를 구하고 r을 r0로 나눈 나머지를 구하는 과정을 반복하여
 * 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수이다.
 */
const [a, b] =
  input[0] > input[1] ? [input[0], input[1]] : [input[1], input[0]];

const GCD = (a, b) => {
  const r = a % b;
  if (r === 0) {
    return b;
  }
  return GCD(b, r);
};
const gcd = GCD(a, b);
console.log(`${gcd}\n${(a * b) / gcd}`);
