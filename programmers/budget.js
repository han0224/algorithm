function solution(d, budget) {
  var answer = 0;
  const sum = d
    .sort((a, b) => a - b)
    .reduce((acc, cur) => {
      if (acc + cur <= budget) {
        answer++;
        return acc + cur;
      }
    }, 0);
  return answer;
}
