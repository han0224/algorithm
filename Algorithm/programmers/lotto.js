function solution(lottos, win_nums) {
  var answer = [];

  const zero = lottos.filter((n) => n === 0).length;
  const same = lottos.filter((x) => win_nums.includes(x)).length;
  if (zero + same === 0) {
    answer.push(6);
    answer.push(6);
  } else if (zero === 6) {
    answer.push(1);
    answer.push(6);
  } else {
    answer.push(7 - (zero + same));
    answer.push(7 - same);
  }
  return answer;
}
