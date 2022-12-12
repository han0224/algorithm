const solution = (input) => {
  let answer = 0;
  const [m, n, h] = input[0].split(" ").map(Number);
  const arr = input.slice(1).map((v) => v.split(" ").map(Number));
  const ds = [
    [-1, 0, 0],
    [1, 0, 0],
    [0, -1, 0],
    [0, 1, 0],
    [0, 0, -1],
    [0, 0, 1],
  ];
  const visited = [...Array(h)].map((h) =>
    [...Array(n)].map((n) => Array(m).fill(false))
  );
  const queue = [];
  let z = 0;
  let t = m * n * h;
  for (let i = 0; i < arr.length; i++) {
    let box = arr[i];
    box.forEach((v, j) => {
      if (v === 1) {
        queue.push([i % n, j, z, 0]);
        visited[z][i % n][j] = true;
        t -= 1;
      } else if (v === -1) {
        visited[z][i % n][j] = true;
        t -= 1;
      }
    });
    if ((i + 1) % n === 0) z += 1;
  }
  if (t === 0) return 0;
  let index = 0;
  while (queue.length !== index) {
    const [x, y, z, count] = queue[index];
    index += 1;
    answer = count;
    for (let i = 0; i < 6; i++) {
      const xx = x + ds[i][0];
      const yy = y + ds[i][1];
      const zz = z + ds[i][2];
      if (xx < 0 || yy < 0 || zz < 0 || xx >= n || yy >= m || zz >= h) continue;
      if (visited[zz][xx][yy]) continue;
      t -= 1;
      visited[zz][xx][yy] = true;
      queue.push([xx, yy, zz, count + 1]);
    }
  }
  return t > 0 ? -1 : answer;
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim().split("\n");

console.log(solution(input));
