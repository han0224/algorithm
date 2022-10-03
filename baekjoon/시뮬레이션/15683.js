const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");

const [n, m] = input[0].split(' ');
const map = input.slice(1).map(v=>v.split(' ').map(v=>+v));
const cctv = []

const cnt = (arr)=>{
    let answer = 0;
    for(let i = 0; i<arr.length;i++){
        for(let j = 0; j<arr[i].length;j++){
            if(arr[i][j]===0) answer+=1;
        }
    }
    return answer;
}
const width = (arr, i, j) =>{
    for(let k = j+1; k<arr[0].length;k++){
        if(arr[i][k]===6) break;
        if(arr[i][k]!==0) continue;
        arr[i][k] = -1;
    }
    for(let k = j-1;k>=0;k--){
        if(arr[i][k]===6) break;
        if(arr[i][k]!==0) continue;
        arr[i][k] = -1;
    }
    return arr;
}

const height = (arr, i, j) =>{
    for(let k = i+1;k<arr.length;k++){
        if(arr[k][j]===6) break;
        if(arr[k][j]!==0) continue;
        arr[k][j] = -1;
    }
    for(let k = i-1;k>=0;k--){
        if(arr[k][j]===6) break;
        if(arr[k][j]!==0) continue;
        arr[k][j] = -1;
    }
    return arr
}

const fun = (n, arr, i, j)=>{
    if(n===5){
        width(arr, i, j);
        height(arr, i, j)
        return
    }
    let right = 0;
    let left = 0;
    let top = 0;
    let bottom = 0;
    for(let k = j+1; k<arr[0].length;k++){
        if(arr[i][k]===6) break;
        right+=1;
    }
    for(let k = j-1; k>=0;k--){
        if(arr[i][k]===6) break;
        left+=1;
    }
    for(let k = i-1; k>=0;k--){
        if(arr[k][j]===6) break;
        top+=1;
    }
    for(let k = i+1;k<arr.length;k++){
        if(arr[k][j]===6) break;
        bottom+=1;
    }
    map[i][j] = [n, right, left, top, bottom]
    cctv.push([i, j])
}
for(let i = 0; i<map.length; i++){
    for(let j = 0; j<map[0].length;j++){
        if(map[i][j]>0 && map[i][j]<6) fun(map[i][j], map, i, j);
    }
}

const watch = (arr, i, j, n, str)=>{
    if(str === 'right'){
        for(let k = 1;k<=n; k++){
            if(arr[i][j+k]!==0) continue;
            arr[i][j+k] = -1;
        } 
    }else if(str === 'left'){
        for(let k = 1; k<=n;k++){
            if(arr[i][j-k]!==0) continue;
            arr[i][j-k] = -1;
        }
    }else if(str === 'top'){
        for(let k = 1; k<=n;k++){
            if(arr[i-k][j]!==0) continue;
            arr[i-k][j] = -1;
        }
    }else if(str==='bottom'){
        for(let k = 1; k<=n; k++){
            if(arr[i+k][j]!==0) continue;
            arr[i+k][j] = -1;
        }
    }
    return arr;
}
const dfs = (cctvs, map) =>{
    if(cctvs.length===0) return map; 
    const [i, j] = cctvs[0];
    const cctv = map[i][j];
    let newMap = [];
    const nextcctv =  cctvs.slice(1)
    if(cctv[0]===1){
        let right = [...map.map(v=>[...v])];
        right = watch(right, i, j, cctv[1], 'right');
        let left = [...map.map(v=>[...v])];
        left = watch(left, i, j, cctv[2], 'left');
        let top = [...map.map(v=>[...v])];
        top = watch(top, i, j, cctv[3], 'top');
        let bottom = [...map.map(v=>[...v])];
        bottom = watch(bottom, i, j, cctv[4], 'bottom');

        right[i][j] = left[i][j] = top[i][j] = bottom[i][j] = 1;

        const map1 = dfs(nextcctv,right);
        const map2 = dfs(nextcctv,left);
        const map3 = dfs(nextcctv,top);
        const map4 = dfs(nextcctv,bottom);

        const cnt1 = cnt(map1);
        const cnt2 = cnt(map2);
        const cnt3 = cnt(map3);
        const cnt4 = cnt(map4);

        const max = Math.min(cnt1, cnt2, cnt3, cnt4);
        if(max===cnt1) newMap = map1;
        else if(max === cnt2) newMap = map2;
        else if(max === cnt3) newMap = map3;
        else if(max === cnt4) newMap = map4;
    }else if(cctv[0]===2){
        let width = [...map.map(v=>[...v])];
        width = watch(width,i,j,cctv[1],'right')
        width = watch(width,i,j,cctv[2],'left')
        width[i][j] = 2
        let height = [...map.map(v=>[...v])];
        height = watch(height, i, j, cctv[3],'top');
        height = watch(height, i, j, cctv[4], 'bottom');
        height[i][j] = 2;
        const map1 = dfs(nextcctv, width);
        const map2 = dfs(nextcctv, height);
        
        const cnt1 = cnt(map1);
        const cnt2 = cnt(map2);
        if(cnt1<cnt2) newMap = map1;
        else newMap = map2;
    }else if(cctv[0]===3){
        let topLeft = [...map.map(v=>[...v])];
        topLeft = watch(topLeft, i, j, cctv[3], 'top');
        topLeft = watch(topLeft, i, j, cctv[2], 'left');

        let bottomLeft = [...map.map(v=>[...v])];
        bottomLeft = watch(bottomLeft, i, j, cctv[4], 'bottom');
        bottomLeft = watch(bottomLeft, i, j, cctv[2], 'left');

        let bottomRight = [...map.map(v=>[...v])];
        bottomRight = watch(bottomRight, i, j, cctv[4], 'bottom');
        bottomRight = watch(bottomRight, i, j, cctv[1], 'right');

        let topRight = [...map.map(v=>[...v])];
        topRight = watch(topRight, i, j, cctv[3], 'top');
        topRight = watch(topRight, i, j, cctv[1], 'right');

        topLeft[i][j] = bottomLeft[i][j] = topRight[i][j] = bottomRight[i][j] = 3;

        const map1 = dfs(nextcctv,topLeft);
        const map2 = dfs(nextcctv,bottomLeft);
        const map3 = dfs(nextcctv,bottomRight);
        const map4 = dfs(nextcctv,topRight);

        const cnt1 = cnt(map1);
        const cnt2 = cnt(map2);
        const cnt3 = cnt(map3);
        const cnt4 = cnt(map4);

        const max = Math.min(cnt1, cnt2, cnt3, cnt4);
        if(max===cnt1) newMap = map1;
        else if(max === cnt2) newMap = map2;
        else if(max === cnt3) newMap = map3;
        else if(max === cnt4) newMap = map4;

    }else if(cctv[0]===4){
        let right = [...map.map(v=>[...v])];
        right = watch(right, i, j, cctv[2], 'left');
        right = watch(right, i, j, cctv[3], 'top');
        right = watch(right, i, j, cctv[4], 'bottom');
        let left = [...map.map(v=>[...v])];
        left = watch(left, i, j, cctv[1], 'right');
        left = watch(left, i, j, cctv[3], 'top');
        left = watch(left, i, j, cctv[4], 'bottom');
        let top = [...map.map(v=>[...v])];
        top = watch(top, i, j, cctv[1], 'right');
        top = watch(top, i, j, cctv[2], 'left');
        top = watch(top, i, j, cctv[4], 'bottom');
        let bottom = [...map.map(v=>[...v])];
        bottom = watch(bottom, i, j, cctv[1], 'right');
        bottom = watch(bottom, i, j, cctv[2], 'left');
        bottom = watch(bottom, i, j, cctv[3], 'top');

        right[i][j] = left[i][j] = top[i][j] = bottom[i][j] = 4;

        const map1 = dfs(nextcctv,right);
        const map2 = dfs(nextcctv,left);
        const map3 = dfs(nextcctv,top);
        const map4 = dfs(nextcctv,bottom);

        const cnt1 = cnt(map1);
        const cnt2 = cnt(map2);
        const cnt3 = cnt(map3);
        const cnt4 = cnt(map4);

        const max = Math.min(cnt1, cnt2, cnt3, cnt4);
        if(max===cnt1) newMap = map1;
        else if(max === cnt2) newMap = map2;
        else if(max === cnt3) newMap = map3;
        else if(max === cnt4) newMap = map4;
    }else return map;
    return newMap;
}
const d = dfs(cctv, map)
console.log(cnt(d))