// 예시 
// numbers = [4, 1, 2, 1], target= 4
// 잉여숫자는 numbers의 합에서 target를 뺀 수이다.
// 위의 예시에서 잉여숫자는 4이다.
// 하지만, 1+ 2+ 1 -4 는 target과 다르기에 잉여숫자에서
// /2를 해주어야 우리가 원하는 잉여숫자가 될 수 있다.
// 즉, 2가 잉여 숫자이다.
// 잉여숫자를 찾기위해 dfs 를 이용한다.
// 우선 index 와 cnt(조합의 갯수)는 0으로 준 다음
// dfs 함수를 보면
// 인자 index 에서 부터 numbers 함수를 탐색한다.
// 만일 numbers[i] 가 target가 같으면 cnt 를 증가시키고 계속 탐색을 진행한다.
// 만일 numbers[i] 가 target 보다 작으면 현재 numbers[i] 값을 기억해둔채로 재귀 함수 이용한다.

const dfs = (numbers, target, index, cnt) =>{
    for(let i = index; i<numbers.length;i++){
        const tmp = numbers[i];
        if(tmp == target){
            cnt++;
        } else if(tmp < target){
            cnt += dfs(numbers, target-tmp, i+1, 0);
        }
    }
    return cnt;
}

function solution(numbers, target) {
    var answer = 0;
    const overValue = numbers.reduce((arr,cur)=>arr+cur,0);
    const cnt = dfs(numbers, parseInt((overValue-target)/2), 0, 0)
    return cnt;
}