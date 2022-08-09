function solution(progresses, speeds) {
    var answer = [];
    const stack = [];
    progresses.forEach((v,i)=>{
        const day = Math.ceil((100-v)/speeds[i]);
        const pre = stack.pop();
        if(pre>=day){
            const tmp = answer.pop() + 1;
            answer.push(tmp);
            stack.push(pre);
        }else{
            answer.push(1);
            stack.push(day);
        }
    })
    return answer;
}