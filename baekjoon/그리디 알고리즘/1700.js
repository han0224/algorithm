const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs
//   .readFileSync("baekjoon/예제.txt")
//   .toString()
//   .trim()
//   .split("\r\n");

const [N, K] = input[0].split(" ").map((v) => +v);
const arr = input[1].split(" ").map((v) => +v);
const use = [];
let answer = 0;

for (let i = 0; i < K; i++) {
  if (use.some((v) => v === arr[i])) continue;
  if (use.length < N) {
    use.push(arr[i]);
  } else {
    answer++;
    const tmp = [...use];
    let length = N;
    for (let j = i + 1; j < K; j++) {
      if (length === 1) break;
      if (tmp.includes(arr[j])) {
        length--;
        const index = tmp.indexOf(arr[j]);
        tmp[index] = 0;
      }
    }
    const del = tmp.filter((v) => v !== 0)[0];
    const index = use.indexOf(del);
    use.splice(index, 1);
    use.push(arr[i]);
  }
}

console.log(answer);
