// const solution = (input) => {
//   input = input.split("\n");
//   const [n, m] = input[0].split(" ").map(Number);
//   const arr = input.slice(1, n + 1);
//   const changeArr = [];
//   const k = Number(input[1 + n]);
//   const max = {};
//   for (let i = 0; i < n; i++) {
//     let count = 0;
//     for (let j = 0; j < m; j++) {
//       if (arr[i][j] === "0") count += 1;
//       if (count > k) break;
//     }
//     if (count > k || count % 2 !== k % 2) continue;
//     changeArr.push(arr[i]);
//   }
//   for (let i = 0; i < changeArr.length; i++) {
//     if (max[changeArr[i]]) max[changeArr[i]] += 1;
//     else max[changeArr[i]] = 1;
//   }
//   const answer = Math.max(...Object.values(max));

//   return answer < 0 ? 0 : answer;
// };
const solution = (input) => {
  input = input.split("\n");
  const [n, m] = input[0].split(" ").map(Number);
  const arr = input.slice(1, n + 1);
  const k = Number(input[1 + n]);
  const map = new Map();
  arr.forEach((v) => {
    if (map.has(v)) map.set(v, map.get(v) + 1);
    else {
      const count = v.split("").filter((s) => s === "0").length;
      if (count <= k && count % 2 === k % 2) map.set(v, 1);
    }
  });
  return map.size > 0 ? Math.max(...map.values()) : 0;
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim();

console.log(solution(input));
