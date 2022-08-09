function solution(n,a,b){
    for(let i = 1;i<n;i++){
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        if(a===b) return i;
    }
}