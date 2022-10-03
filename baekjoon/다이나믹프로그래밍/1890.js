const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");

const n = +input[0];
const table = input.slice(1).map(v=>v.split(' ').map(v=>+v));
const dp = new Array(n).fill(0).map(v=>new Array(n).fill(BigInt(0)));

for(let i = n-1; i>=0; i--){
    for(let j = n-1; j>=0; j--){
        if(i===n-1 && j===n-1) {
            dp[i][j] = 1;
            continue;
        }
        const x = i+table[i][j]<n?BigInt(dp[i+table[i][j]][j]):BigInt(0);
        const y = j+table[i][j]<n?BigInt(dp[i][j+table[i][j]]):BigInt(0);
        dp[i][j]=BigInt(x+y);
    }
}
console.log(dp[0][0].toString())