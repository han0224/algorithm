function solution(s, n) {
    var answer = '';
    const arr = [...s].map(v=>{
        if(v===' ') return ' ';
        const ascii = v.charCodeAt(0) + n;
        const val2 = v===v.toUpperCase();
        if(val2){
            if(!(65<=ascii && ascii<=90)){
                return String.fromCharCode(ascii%'Z'.charCodeAt(0) + 'A'.charCodeAt(0)-1);
            }
        }else{
            if(!(97<=ascii && ascii<=122)){
                return String.fromCharCode(ascii%'z'.charCodeAt(0) + 'a'.charCodeAt(0)-1);
            }
        }
        return String.fromCharCode(ascii)
    });
    return arr.join('')
}