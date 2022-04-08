const string = (p)=>{
    if(p==='') return'';
    let answer ='';
    const uStack = [];
    const vStack = [...p];
    while(true){
        uStack.push(vStack.shift());
        if(uStack.length%2===0 && uStack.filter(e=>e===')').length===uStack.length/2){
            break;
        }
    }
    if(uStack[0]===')') {
        answer+='(';
        answer+=string(vStack.join(''));
        answer+=')'
        uStack.pop();
        uStack.shift();
        uStack.forEach(v=>{
            if(v===')') answer+='(';
            else answer+=')';
        })
    }else{
        answer+=uStack.join('');
        answer+=string(vStack.join(''));
    }
    return answer;
}
function solution(p) {
    var answer = '';
    const uStack = [];
    const vStack = [...p];
    const len = vStack.length;
    return string(p, uStack, vStack);
}