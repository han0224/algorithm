function solution(board, moves) {
  var answer = 0;
  const table = [];
  const n = board.length;
  const result = [0];

  for (let i = 0; i < n; i++) {
    const tmp = [];
    for (let j = 0; j < n; j++) {
      if (board[j][i] > 0) {
        tmp.push(board[j][i]);
      }
    }
    table.push(tmp);
  }

  moves.forEach((item) => {
    const tmp = table[item - 1][0];
    if (tmp === result[result.length - 1]) {
      result.pop();
      table[item - 1].shift();
      answer += 2;
    } else if (tmp > 0) {
      result.push(table[item - 1][0]);
      table[item - 1].shift();
    }
  });
  return answer;
}
