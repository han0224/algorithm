const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\r\n");

const city = input[2].split(' ').map(v=>BigInt(v));
const dis = input[1].split(' ').map(v=>BigInt(v));
const n = +input[0];

let answer = 0n;
let l = city[0]
for(let i = 0;i<city.length-1;i++){
    if(l > city[i]){
        l=city[i];
    }
    answer += l*dis[i]
}
console.log(answer.toString())