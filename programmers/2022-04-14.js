function solution(N, road, K) {
    var answer = 1;
    const queue = [[0,0],];
    const visited = [0,];
    const matrix = new Array(N).fill(0).map(v=>new Array(N).fill(0));
    const lenArr = new Array(N).fill(555555);
    road.forEach(v=>{
        if(matrix[v[0]-1][v[1]-1]==0 || matrix[v[0]-1][v[1]-1] > v[2]){
            matrix[v[0]-1][v[1]-1] = v[2];
            matrix[v[1]-1][v[0]-1] = v[2];
        } 
    })
    while(queue.length){
        const [tmp, len] = queue.shift();
        for(let i = 0;i<N;i++){
            if(matrix[tmp][i]>0 && len+matrix[tmp][i]<=K){
                if(!visited.includes(i)){
                    queue.push([i,len+matrix[tmp][i]]);
                    lenArr[i] = len+matrix[tmp][i];
                    visited.push(i);
                    answer++;
                }
                else if(lenArr[i]>len+matrix[tmp][i]){
                    lenArr[i]=len+matrix[tmp][i];
                    queue.push([i,len+matrix[tmp][i]]);
                }
            }
        }    
    }
    return answer;
}