const solution = (input) => {
  let rooms = 0;
  let answer = 0;
  const N = +input.shift();
  const arr = input
    .map((v) => v.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);

  const start = arr.map((time) => {
    return { time: time[0], isStart: 1 };
  });
  const end = arr.map((time) => {
    return { time: time[1], isStart: -1 };
  });
  const sort = [...start, ...end].sort((a, b) =>
    a.time === b.time ? a.isStart - b.isStart : a.time - b.time
  );
  sort.forEach((v) => {
    rooms = v.isStart === 1 ? rooms + 1 : rooms - 1;
    answer = Math.max(answer, rooms);
  });

  return answer;
};

const path = process.platform === "linux" ? "/dev/stdin" : "baekjoon/예제.txt";

const fs = require("fs");
const input = fs.readFileSync(path).toString().trim().split("\n");

console.log(solution(input));
