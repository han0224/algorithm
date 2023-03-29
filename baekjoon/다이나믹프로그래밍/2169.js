const solution = (input) => {
  let answer = 0;
  const [n, m] = input[0].split(" ").map(Number);
  const arr = input.slice(1).map((v) => v.split(" ").map(Number));
  const map = new Array(n).fill(0).map((v) => new Array(m).fill(0));
  map[0][0] = arr[0][0];
  for (let i = 1; i < m; i++) {
    map[0][i] = map[0][i - 1] + arr[0][i];
  }
  for (let i = 1; i < n; i++) {
    const tmp = new Array(2).fill(0).map(() => new Array(m).fill(0));
    for (let j = 0; j < m; j++) {
      // 위에서 아래, ->
      if (j === 0) tmp[0][j] = map[i - 1][j] + arr[i][j];
      else {
        tmp[0][j] = Math.max(map[i - 1][j], tmp[0][j - 1]) + arr[i][j];
      }

      // 위에서 아래, <-
      let k = m - 1 - j;
      if (k === m - 1) {
        tmp[1][k] = map[i - 1][k] + arr[i][k];
      } else {
        tmp[1][k] = Math.max(map[i - 1][k], tmp[1][k + 1]) + arr[i][k];
      }
    }
    for (let j = 0; j < m; j++) {
      map[i][j] = Math.max(tmp[0][j], tmp[1][j]);
    }
  }
  return map[n - 1][m - 1];
};

const path = process.platform === "linux" ? "/dev/stdin" : "baekjoon/예제.txt";

const fs = require("fs");
const input = fs.readFileSync(path).toString().trim().split("\n");
console.log(solution(input));
