function solution(citations) {
    let answer = 0;
    const arr = [...citations].sort((a, b)=>b-a);
    for(let i = 0; i<arr.length;i++){
        if(arr[i]>answer){
            answer+=1;
        }
    }
    return answer;
}