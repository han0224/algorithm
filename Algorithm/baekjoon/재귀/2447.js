const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin");
// const input = +fs.readFileSync("baekjoon/예제.txt");

const starArr = new Array(input)
  .fill(" ")
  .map((v) => new Array(input).fill(" "));

const fun = (x, y, n) => {
  if (n === 3) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) continue;
        starArr[x + i][y + j] = "*";
      }
    }
  } else {
    const m = n / 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) continue;
        fun(x + i * m, y + j * m, m);
      }
    }
  }
};
fun(0, 0, input);
let result = "";
for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    result += starArr[i][j];
  }
  result += "\n";
}
console.log(result);
