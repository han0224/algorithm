const gcd = (a, b)=>{
    const result = a%b;
    if(result===0) return b;
    return gcd(b,result);
}
function solution(w, h) {
    const tmp = gcd(w, h);
    const [ww, hh] = [w/tmp, h/tmp];
    const r = ww+hh-1;
    return w*h-r*tmp;
}