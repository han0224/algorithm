function solution(A,B){
    var answer = 0;
    A=A.sort((a,b)=>a-b);
    B=B.sort((a, b)=>b-a);
    A.forEach((v, i)=>{
        answer+=(v*B.shift())
    })

    return answer;
}