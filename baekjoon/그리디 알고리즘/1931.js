const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync("baekjoon/예제.txt")
  .toString()
  .trim()
  .split("\r\n");

const n = input[0];
let arr = input.slice(1).map(v=>v.split(' ').map(e=>+e));
let answer = 0;
let work = 0;

arr.sort((a, b)=>{
    if(a[1]===b[1]){
        return a[0]-b[0];
    }else{
        return a[1]-b[1]
    }
});

for(let i = 0; i< n;i++){
    if(arr[i][0]>=work){
        answer++;
        work = arr[i][1]
    }
}

console.log(answer)