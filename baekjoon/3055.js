const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\r\n");

const [ylen, xlen] = input[0].split(" ").map((v) => +v);
const map = input.slice(1).map((v) => v.split(""));
const water = [];

let S = [];
let flag = false;
for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    if (map[i][j] === "S") {
      S = [i, j, 1];
    } else if (map[i][j] === "*") {
      water.push([i, j]);
    }
  }
}
const xDirection = [0, 0, -1, 1];
const yDirection = [-1, 1, 0, 0];
let answer = xlen * ylen;
flag = false;
const bfs = (root) => {
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    if (flag) break;

    const len = water.length;
    for (let i = 0; i < len; i++) {
      const w = water[i];
      for (let j = 0; j < 4; j++) {
        const xx = w[1] + xDirection[j];
        const yy = w[0] + yDirection[j];
        if (xx < 0 || yy < 0 || xx >= xlen || yy >= ylen) continue;
        if (map[yy][xx] === ".") {
          map[yy][xx] = "*";
          water.push([yy, xx]);
        }
      }
    }
    const qlen = queue.length;
    for (let j = 0; j < qlen; j++) {
      const [y, x, cnt] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const xx = x + xDirection[i];
        const yy = y + yDirection[i];
        if (xx < 0 || yy < 0 || xx >= xlen || yy >= ylen) continue;
        if (map[yy][xx] === "D") {
          flag = true;
          answer = cnt;
          break;
        }
        if (map[yy][xx] === ".") {
          queue.push([yy, xx, cnt + 1]);
          map[yy][xx] = "X";
        }
      }
    }
  }
};
bfs(S);
console.log(flag ? answer : "KAKTUS");
