const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

// const input = fs
//   .readFileSync("baekjoon/예제.txt")
//   .toString()
//   .trim()
//   .split("\r\n")
//   .map((v) => v.split(" ").map((v) => +v));

const [N, M] = input[0];
const arr = input.slice(1);
const house = [];
const chicken = [];
const result = [];
const combination = (arr, selectNumber) => {
  const res = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = combination(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    res.push(...attached);
  });
  return res;
};
const distance = (r1, c1, r2, c2) => Math.abs(r1 - r2) + Math.abs(c1 - c2);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 1) {
      arr[i][j] = 0;
      house.push([i, j]);
    } else if (arr[i][j] === 2) {
      arr[i][j] = 0;
      chicken.push([i, j]);
    }
  }
}

house.forEach((v) => {
  const tmp = [];
  chicken.forEach((e) => {
    tmp.push(distance(v[0], v[1], e[0], e[1]));
    // console.log(v, e, distance(v[0], v[1], e[0], e[1]));
  });
  result.push(tmp);
});
const combiarr = new Array(chicken.length).fill(0).map((v, i) => i);
const combi = combination(combiarr, M);
let res = [];
combi.forEach((v) => {
  let tmp = 0;
  for (let i = 0; i < result.length; i++) {
    const temp = v.map((e) => result[i][e]);
    tmp += Math.min(...temp);
  }
  res.push(tmp);
});
console.log(Math.min(...res));
// console.log(house, chicken);
// console.log(result);
