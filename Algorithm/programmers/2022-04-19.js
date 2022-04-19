function solution(priorities, location) {
    var answer = 0;
    let index = location;
    while(index>-1){
        const j = priorities.shift();
        let flag = true;
        for(let i = 0; i< priorities.length;i++){
            if(priorities[i] > j){
                priorities.push(j);
                index===0?index=priorities.length-1:index--;
                flag = false;
                break;
            }
        }
        if(flag){
            index--;
            answer++;
        }
    }
    return answer;
}