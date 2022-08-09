const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();
// const input = +fs.readFileSync("baekjoon/예제.txt").toString().trim();

const arr = new Array(input + 1).fill(-1);
arr[3] = arr[5] = 1;

for (let i = 6; i <= input; i++) {
  const a = arr[i - 3];
  const b = arr[i - 5];
  if (a * b < 0) {
    arr[i] = a > b ? a + 1 : b + 1;
  } else if (a === -1 && b === -1) {
    continue;
  } else {
    arr[i] = a > b ? b + 1 : a + 1;
  }
}

console.log(arr[input]);
