const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim()
// const input = +fs
//   .readFileSync("./예제.txt")
//   .toString()
//   .trim()


const solution = (n) =>{
    const dp = new Array(n).fill(0);
    if(n<=2) return n;
    dp[0] = 1;
    dp[1] = 2;
    for(let i = 2; i<n;i++){
        dp[i]=(dp[i-1]+dp[i-2]) % 10007
    }
    return dp.pop();
}
console.log(solution(input))