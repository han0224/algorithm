const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(v=>+v)

// const input = fs
//   .readFileSync("예제.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map(v=>+v)

const solution = (n, arr) =>{
  const dp = new Array(n).fill(0);
  if(n<3){
    return arr.reduce((acc, cur)=>acc+cur,0);
  }
  dp[0] = arr[0];
  dp[1] = arr[0]+arr[1];
  dp[2] = Math.max(dp[1], arr[1]+arr[2], dp[0]+arr[2])
  for(let i = 3; i<n;i++){
    dp[i] = Math.max(dp[i-1], dp[i-2]+arr[i], dp[i-3]+arr[i-1]+arr[i]);
  }
  return dp.pop();
}
const n = input[0];
const arr = input.slice(1);
console.log(solution(n, arr))
