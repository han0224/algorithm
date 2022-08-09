const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
// const input = fs.readFileSync("baekjoon/예제.txt").toString();
const result = input.trim() + "??!";
console.log(result);
