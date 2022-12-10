const solution = (input) => {
  let [N, b] = input[0].split(" ").map(BigInt);
  const arr = input.slice(1).map((v) => v.split(" ").map(Number));
  if (b === 1n) {
    return arr.map((v) => v.map((e) => e % 1000).join(" ")).join("\n");
  }
  let answer = arr;
  const matrixMulti = (a, b) => {
    const result = new Array(a.length)
      .fill(0)
      .map((v) => new Array(a.length).fill(0));
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
        let sum = 0;
        for (let k = 0; k < a.length; k++) {
          sum += (a[i][k] * b[k][j]) % 1000;
        }
        result[i][j] = sum % 1000;
      }
    }
    return result;
  };

  const tmp = [];
  while (b > 1n) {
    if (b % 2n === 1n) tmp.push(answer);
    answer = matrixMulti(answer, answer);
    b = b / 2n;
  }

  if (tmp.length !== 0) {
    let a = tmp[0];
    for (let i = 1; i < tmp.length; i++) {
      a = matrixMulti(tmp[i - 1], tmp[i]);
      tmp[i] = a;
    }
    answer = matrixMulti(a, answer);
  }
  return answer.map((v) => v.join(" ")).join("\n");
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim().split("\n");

console.log(solution(input));
