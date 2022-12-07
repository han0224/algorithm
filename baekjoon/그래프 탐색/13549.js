const solution = (input) => {
  const [n, k] = input.split(" ").map(Number);
  const arr = new Array(200000).fill(100000);
  const queue = [n];
  arr[n] = 0;
  while (queue.length) {
    const x = queue.shift();
    if (x === k) break;
    if (x * 2 <= 200000 && arr[x] < arr[x * 2]) {
      queue.unshift(x * 2);
      arr[x * 2] = arr[x];
    }
    if (x > 0 && arr[x - 1] > arr[x] + 1) {
      queue.push(x - 1);
      arr[x - 1] = arr[x] + 1;
    }
    if (x < 200000 && arr[x + 1] > arr[x] + 1) {
      queue.push(x + 1);
      arr[x + 1] = arr[x] + 1;
    }
  }
  return arr[k];
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim();

console.log(solution(input));
