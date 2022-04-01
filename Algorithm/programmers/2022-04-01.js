function solution(clothes) {
    let answer = 1;
    const obj = {};
    clothes.forEach(v=>{
        if(!(v[1] in obj)){
            obj[v[1]]=[];
        }
        obj[v[1]].push([v[0]])
    })
   
    for(let i = 0; i<Object.keys(obj).length; i++){
        answer *= obj[Object.keys(obj)[i]].length+1
    }
    return answer-1;
}