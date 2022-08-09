function solution(arr) {
    const n = arr.length;
    let tmp = arr[0];
    for(let i = 1;i<n;i++){
        tmp = tmp*arr[i]/gcd(tmp,arr[i]);
        
    }
    return tmp;
}
const gcd = (a, b)=>{   // 최대공약수 구하기
    while(b!==0){
        const r = a%b;
        a = b;
        b = r;
    }
    return a;
}