function solution(strings, n) {
    return strings.sort((a, b)=>{
        if(a[n]===b[n]){
            return a>b?0:-1
        }
        return a[n]>b[n]?0:-1
    });
}