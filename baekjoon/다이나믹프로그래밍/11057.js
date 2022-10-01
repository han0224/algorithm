const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim()
// const input = +fs
//   .readFileSync("./예제.txt")
//   .toString()
//   .trim()

const dp = new Array(10).fill(1);
for(let i = 2; i <= input;i++){
  for(let j = 0; j < 10;j++){
    dp[j] = dp.slice(j).reduce((acc, cur)=>(acc+cur) % 10007,0);
  }
}
console.log(dp.reduce((acc, cur)=>(acc+cur) % 10007,0))