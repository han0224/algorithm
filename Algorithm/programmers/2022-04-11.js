function solution(maps) {
    const xlen = maps.length-1;
    const ylen = maps[0].length-1;
    const queue = [[0,0,1]];
    const xDirection = [0,0,-1,1];
    const yDirection = [-1,1,0,0];
    while(queue.length){
        const [x, y, cnt] = queue.shift();
        if(x === xlen && y === ylen){
            return cnt;
        }
        for(let i = 0;i<4;i++){
            const xx = x+xDirection[i];
            const yy = y+yDirection[i];
            if(xx<0 || yy<0 || xx>xlen || yy>ylen) continue;
            if(maps[xx][yy]){
                queue.push([xx,yy,cnt+1]);
                maps[xx][yy]=0;
            }
        }
    }
    return -1;
}