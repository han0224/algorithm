function solution(answers) {
  var answer = [];
  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const score = [0, 0, 0];
  answers.forEach((ans, i) => {
    if (ans === students[0][i % 5]) {
      score[0] += 1;
    }
    if (ans === students[1][i % 8]) {
      score[1] += 1;
    }
    if (ans === students[2][i % 10]) {
      score[2] += 1;
    }
  });
  const max = Math.max(...score);
  score.forEach((item, i) => {
    if (max === item) {
      answer.push(i + 1);
    }
  });
  return answer;
}
