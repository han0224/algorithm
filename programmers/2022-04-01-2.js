function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const stack = [];
    let time = [];
    while(true) {    
        answer+=1;
        time = time.map(v=>v+=1)
        if(time[0]==bridge_length+1){
            stack.shift();
            time.shift();
        }
        if((stack.reduce((acc, cur)=>acc+cur,0))+truck_weights[0]>weight || stack.length==bridge_length){
            continue;
        }
        const tmp = truck_weights.shift();
        if(tmp){
            stack.push(tmp)
            time.push(1)
        }
        if(stack.length===0) break;
    }
    return answer;
}