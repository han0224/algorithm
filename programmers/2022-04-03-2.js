function solution(n) {
    const num = n.toString(2);
    const arr = num.split('');
    const one = arr.reduce((acc, cur)=>{
        if(cur==='1')
            return acc+=1;
        return acc;
    },0)
    let number = n+1;
    while(true){
        const tmp=number.toString(2).split('');
        const one2 = tmp.reduce((acc, cur)=>{
        if(cur==='1')
            return acc+=1;
            return acc;
        },0)
        if(one2===one) return number;
        number+=1;
    }
}