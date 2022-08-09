const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\r\n");

const AC = (e) => {
  const p = e[0];
  const n = e[1];
  const x = e[2].filter((v) => v > 0);
  let start = 0;
  let end = x.length;
  let isR = false;

  for (let i of p) {
    if (i === "R") {
      isR = !isR;
    } else {
      if (!isR) {
        start += 1;
      } else {
        end -= 1;
      }
      if (start > end || x.length === 0) {
        return "error";
      }
    }
  }
  if (isR) {
    const res = [];
    for (let i = end - 1; i >= start; i--) {
      res.push(x[i]);
    }
    return res;
  } else {
    return x.slice(start, end);
  }
  //   return isR ? x.slice(-1 * start, -1 * end).reverse() : x.slice(start, end);
};
const argument = [];
const N = +input[0];
const arr = input.slice(1);
const result = [];
for (let i of arr) {
  if (i[0] === "[") {
    argument.push(
      i
        .slice(1, i.length - 1)
        .split(",")
        .map((v) => +v)
    );
  } else {
    argument.push(i);
  }

  if (argument.length === 3) {
    result.push(AC(argument));
    argument.length = 0;
  }
}
for (let i of result) {
  if (Array.isArray(i)) {
    console.log("[" + i.join(",") + "]");
  } else {
    console.log(i.toString());
  }
}
