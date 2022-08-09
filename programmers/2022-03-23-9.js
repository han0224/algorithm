function solution(x, n) {
  var answer = new Array(n).fill(0);
  return answer.map((v, i) => x * (i + 1));
}
