function solution(n, words) {
    const stack = [];
    stack.push(words[0]);
    for(let i = 1; i<words.length;i++){
        if(stack.includes(words[i])){
            return [(i%n)+1,Math.floor(i/n)+1];
        }
        const tmp = stack.pop();
        if(tmp[tmp.length-1]!==words[i][0]){
            return [(i%n)+1,Math.floor(i/n)+1];
        }
        stack.push(tmp);
        stack.push(words[i]);
    }
    
    return [0,0];
}