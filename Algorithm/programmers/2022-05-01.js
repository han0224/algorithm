function solution(n) {
  var answer = "";
  let num = n;
  while (num > 0) {
    const tmp = num % 3;
    if (tmp === 0) answer = "4" + answer;
    else if (tmp === 1) answer = "1" + answer;
    else answer = "2" + answer;
    num = Math.floor((num - 1) / 3);
  }
  return answer;
}
