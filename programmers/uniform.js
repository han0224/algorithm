function solution(n, lost, reserve) {
  var answer = 0;
  lost.sort();
  reserve.sort();
  lost = lost.filter((v) => {
    const tmp = reserve.indexOf(v);
    if (tmp > -1) {
      reserve.splice(tmp, 1);
      return false;
    } else return true;
  });
  answer = n - lost.length;
  lost.forEach((v, i) => {
    if (reserve.indexOf(v - 1) > -1) {
      reserve.splice(reserve.indexOf(v - 1), 1);
      answer += 1;
    } else if (reserve.indexOf(v + 1) > -1) {
      reserve.splice(reserve.indexOf(v + 1), 1);
      answer += 1;
    }
  });
  console.log(lost);
  console.log(reserve);
  return answer;
}
