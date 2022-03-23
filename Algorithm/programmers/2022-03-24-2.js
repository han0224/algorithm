function solution(s) {
    const tmp = s.split(' ');
    const answer = [];
    for(let i = 0;i<tmp.length;i++){
        for(let j = 0;j<tmp[i].length;j++){
            if(j%2===0) {
                answer.push(tmp[i][j].toUpperCase())
            }
            else {
                answer.push(tmp[i][j].toLowerCase())
            }
        }
        answer.push(' ');
    }
    answer.pop()
    return answer.join('');
}