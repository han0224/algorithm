const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");

const n = +input[0]
let index = 1;
const number = [];
const answer = [];
for(let i = 0; i<n;i++){
    const tmp = +input[index];
    number.push([...input.slice(index+1, index+tmp+1)]);
    index +=tmp+1
}
number.forEach(v=>{
    v.sort((a, b)=>a.localeCompare(b));
    let flag = false
    for(let i = 0; i<v.length;i++){
        flag = false;
        for(let j = i+1; j<v.length;j++){
            if(v[j].length<v[i].length) continue
            const str = +v[j].slice(0,v[i].length);
            if(str - +v[i] === 0){
                flag = true;
                break;
            }else if(str - +v[i]>0) {
                flag = false;
                break;
            }   
        }
        if(flag) break;
    }
    if(flag) answer.push("NO");
    else answer.push("YES");
})
console.log(answer.join('\n'))