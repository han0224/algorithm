const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
// const input = fs.readFileSync("./예제.txt").toString().trim()

let str = input.split(":")
if(str.length!==8){
    const index = str.indexOf('');
    const len = 8-str.length +1;
    str = [...str.slice(0, index), ...new Array(len).fill('0000'), ...str.slice(index+1)];
    if(str.indexOf('')!==-1){
        str[str.indexOf('')]='0000'
    }
}
str = str.map(v=>`0000${v}`.slice(-4));
console.log(str.join(":"));