const solution = (input) => {
  let answer = 0;
  const N = +input.shift();
  if (N === 1) return 0;
  const tree = {};
  for (let i = 1; i <= N; i++) {
    tree[i] = [];
  }
  input.forEach((element) => {
    const [p, c, v] = element.split(" ").map(Number);
    tree[p].push([c, v]);
    tree[c].push([p, v]);
  });
  const bfs = (start) => {
    const visited = new Array(N + 1).fill(false);
    let answer = 0;
    const queue = [];
    let node = start;
    queue.push([start, answer]);
    while (queue.length > 0) {
      const [next, total] = queue.shift();
      visited[next] = true;
      if (answer < total) {
        node = next;
        answer = total;
      }
      tree[next].forEach((e) => {
        const [node, v] = e;
        if (!visited[node]) queue.push([node, total + v]);
        visited[node] = true;
      });
    }
    return [answer, node];
  };

  const result = bfs(1);
  const tmp = bfs(result[1]);

  return tmp[0];
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim().split("\n");

console.log(solution(input));
