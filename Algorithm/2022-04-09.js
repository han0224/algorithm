const GCD = (a, b)=>{
    if(b===0) return a;
    else return GCD(b, a%b);
}
function solution(n, m) {
    const gcd = GCD(n,m);
    return [gcd, n*m/gcd]
}