function solution(n) {
    var answer = [0, 1];
    for(let i = 2;i<=n;i++){
        // (A+B)%C = (A%C + B%C)%C
        // 범위가 넘어가므로 항상 1234567의 나머지로 계산
        answer.push(answer[i-2]%1234567+answer[i-1]%1234567);
    }
    return answer.pop()%1234567;
}