function solution(n) {
    let answer = 0;
    const stack = [];
    let sum = 0;
    for(let i = 1;i <= n/2+1;i++){
        stack.push(i);
        sum+=i;
        while(sum>n){
            sum-=stack.shift();
        }
        if(sum==n){
            answer+=1;
        }
    }
    if(stack.pop()!==n) answer+=1;
    return answer;
}