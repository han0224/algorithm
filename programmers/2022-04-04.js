function BSearch(arr, times, target) {
    let low = 0;
    let high = arr;
    let mid = Math.floor((low + high) / 2);
    while(low < high) {
        const tmp = times.reduce((acc,cur)=>{return acc + Math.floor(mid/cur)},0)
        // if(tmp => target){
        //     mid = Math.min(tmp, mid);
        //     high = mid - 1;
        // }
        // else{
        //     low = mid + 1;
        // }
        if (tmp == target)
            return mid;
        else if (tmp > target)
            high = mid - 1;
        else
            low = mid + 1;
        
        mid = Math.floor((low + high) / 2);
    }
    return low+1;
}

function solution(n, times) {
    var answer = 0;
    let time = Math.max(...times)*n;
    let tmp = BSearch(time,times, n);
    console.log(tmp)
    for(let i = tmp;i>0;i--){
        const tmp2 = times.reduce((acc,cur)=>acc+Math.floor(i/cur),0)
        if(tmp2<n) return i+1
    }
    return tmp
}