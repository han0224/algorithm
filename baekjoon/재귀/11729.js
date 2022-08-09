const fs = require("fs");
// const input = +fs.readFileSync("/dev/stdin");
const input = +fs.readFileSync("baekjoon/예제.txt");
let cnt = 0;
const answer = [];
const hanoi = (n, start, tmp, end) => {
  if (n === 1) {
    answer.push([start, end]);
    cnt++;
    return;
  } else {
    hanoi(n - 1, start, end, tmp);
    answer.push([start, end]);
    cnt++;
    hanoi(n - 1, tmp, start, end);
  }
};

hanoi(input, 1, 2, 3);
console.log(cnt);
console.log(answer.map((v) => v.join(" ")).join("\n"));
