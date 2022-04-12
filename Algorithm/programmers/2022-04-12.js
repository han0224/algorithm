const cal = (left, right, v)=>{
    const l = Math.abs(left[1] - v[1]) + Math.abs(left[0] - v[0]);
    const r = Math.abs(right[0] - v[0]) + Math.abs(right[1] - v[1]);
    if(l==r) return 0;
    else return l>r? 2:1;
}

function solution(numbers, hand) {
    var answer = '';
    const hands = [10,11];
    const lo = [[1,3],[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2], [0,3],[2,3]]
    numbers.forEach((v,i)=>{
        if([1,4,7].includes(v)){
            answer+='L';
            hands[0] = v;
        }else if([3,6,9].includes(v)){
            answer+='R';
            hands[1] = v;
        }else{
            const tmp = cal(lo[hands[0]], lo[hands[1]], lo[v]);
            if(!tmp){
                if(hand==='right'){
                    answer+='R';
                    hands[1] = v;
                }else{
                    answer+='L';
                    hands[0] = v;
                }
            }else if(tmp===1){
                answer+="L";
                hands[0] = v;
            }else{
                answer+='R';
                hands[1] = v;
            }
        }
    })
    return answer;
}