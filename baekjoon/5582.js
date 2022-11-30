const solution = (input) => {
  let answer = 0;
  const [str1, str2] = input.split("\n").map((v) => v.split(""));
  const arr = new Array(str2.length)
    .fill(0)
    .map((v) => new Array(str1.length).fill(0));
  for (let i = 0; i < arr.length; i++) {
    if (str1[0] === str2[i]) arr[i][0] = 1;
  }
  for (let i = 1; i < arr[0].length; i++) {
    if (str1[i] === str2[0]) arr[0][i] = 1;
    for (let j = 1; j < arr.length; j++) {
      if (str1[i] !== str2[j]) continue;
      arr[j][i] = arr[j - 1][i - 1] + 1;
      answer = Math.max(answer, arr[j][i]);
    }
  }
  return answer;
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim();

console.log(solution(input));
