function solution(N, stages) {
  var answer = [];
  const index = [];
  const total = new Array(N + 1).fill(0);
  const now = new Array(N + 1).fill(0);
  stages.forEach((v, i) => {
    for (let j = 0; j < v; j++) {
      total[j] += 1;
    }
    now[v - 1] += 1;
  });
  for (let i = 0; i < N; i++) {
    const obj = { index: i + 1, result: now[i] / total[i] };
    index.push(obj);
  }
  index.sort((a, b) => b.result - a.result);
  for (let i = 0; i < N; i++) {
    answer.push(index[i].index);
  }
  return answer;
}
