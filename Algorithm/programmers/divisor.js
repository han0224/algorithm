function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    let num = 0;
    let j = 0;
    for (j = 0; j * j < i; j++) {
      if (i % j === 0) {
        num += 2;
      }
    }
    if (j * j === i) num += 1;
    if (num % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}
