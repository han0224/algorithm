function solution(s){
    const stack = [];
    for(let i = 0;i<s.length;i++){
        if(stack.length===0||s[i]==='('){
            stack.push(s[i]);
            continue;
        }
        if(s[i]===')'){
            const tmp = stack.pop();
            if(tmp===')') return false;
        }
    }
    if(stack.length===0) return true;
    else return false;
}