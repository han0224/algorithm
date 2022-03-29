function solution(record) {
    var answer = [];
    const uid = {};
    record.forEach(v=>{
        v = v.split(' ');
        if(v[0]!=='Leave'){
        uid[v[1]] = v[2]
        }
    })
    record.forEach(v=>{
        v = v.split(' ');
        if(v[0]==='Enter'){
            answer.push(`${uid[v[1]]}님이 들어왔습니다.`);
        } else if(v[0]==='Leave'){
            answer.push(`${uid[v[1]]}님이 나갔습니다.`);
        }
    })
    return answer;
}