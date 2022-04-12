function solution(dartResult) {
    const score = [dartResult[0],0,0];
    const bounce = ['S','D','T'];
    let j = 0;
    for(let i = 1;i < dartResult.length;i++){
        const tmp = dartResult[i];
        if(!isNaN(tmp)){
            score[j]+=tmp
        }else if(bounce.includes(tmp)){
            const bo = bounce.indexOf(tmp);
            score[j] = (+score[j])**(bo+1);
            j++;
        }else if(tmp==='*'){
            score[j-2] = (+score[j-2])*2;
            score[j-1] = (+score[j-1])*2;
        }else{
            score[j-1] = (+score[j-1])*(-1);
        }
    }
    return score.reduce((acc,cur)=>acc+cur,0);
}