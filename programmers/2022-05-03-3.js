function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>a-b);
    while(people.length>0){
        answer+=1;
        const tmp = people.pop();
        if(tmp+people[0]<=limit){
            people.shift();
        }
    }
    return answer;
}