function solution(numbers) {
  var answer = [];
  const set = new Set();
  const n = numbers.length;
  numbers.forEach((v, i) => {
    for (let j = i + 1; j < n; j++) {
      set.add(v + numbers[j]);
    }
  });
  answer = [...set].sort((a, b) => a - b);
  return answer;
}
