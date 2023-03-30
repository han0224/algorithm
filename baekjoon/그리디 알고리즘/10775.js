const solution = (input) => {
  let answer = 0;
  const [G, P, g] = [input[0], input[1], input.slice(2)];
  const parent = Array.from({ length: G + 1 }, (v, i) => i);

  const find = (value) => {
    if (parent[value] === value) {
      return value;
    } else {
      parent[value] = find(parent[value]);
      return parent[value];
    }
  };
  for (let i = 0; i < G; i++) {
    const tmp = find(g[i]);
    if (tmp === 0) break;
    answer += 1;
    parent[tmp] = tmp - 1;
  }

  return answer;
};

const path = process.platform === "linux" ? "/dev/stdin" : "baekjoon/예제.txt";

const fs = require("fs");
const input = fs.readFileSync(path).toString().trim().split("\n").map(Number);

console.log(solution(input));
