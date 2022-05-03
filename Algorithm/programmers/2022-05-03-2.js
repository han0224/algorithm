function solution(brown, yellow) {
  let row = (brown + yellow) / 3;
  let col = 3;
  while (true) {
    if ((col - 2) * (row - 2) === yellow) {
      return [row, col];
    }
    col += 1;
    row = (brown + yellow) / col;
  }
}
