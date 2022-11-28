const setTable = (apple, n) => {
  const k = apple.length;
  const table = new Array(n).fill(0).map((v) => new Array(n).fill(0));
  for (let i = 0; i < k; i++) {
    const [x, y] = apple[i].split(" ").map(Number);
    table[x - 1][y - 1] = 1;
  }
  return table;
};
const changeDir = (cur, next) => {
  switch (next) {
    case "D":
      return (cur + 1) % 4;
    case "L":
      return cur - 1 < 0 ? 3 : cur - 1;
  }
};
const getMove = (dir, loca) => {
  switch (dir) {
    case 0:
      return [loca[0], loca[1] + 1];
    case 1:
      return [loca[0] + 1, loca[1]];
    case 2:
      return [loca[0], loca[1] - 1];
    case 3:
      return [loca[0] - 1, loca[1]];
  }
};
const isOver = (table, move) => {
  if (move[0] === table[0].length || move[0] < 0) return true;
  if (move[1] === table[0].length || move[1] < 0) return true;
  if (table[move[0]][move[1]] === 2) return true;
  return false;
};

const solution = (input) => {
  let time = 0;
  input = input.split("\n");
  const n = Number(input[0]);
  const k = Number(input[1]);
  const table = setTable(input.slice(2, 2 + k), n);
  let dir = 0;
  let index = 0;
  const snake = [[0, 0]];
  const moveArr = input.slice(3 + k).map((v) => v.split(" "));
  while (true) {
    if (index < moveArr.length && time === Number(moveArr[index][0])) {
      dir = changeDir(dir, moveArr[index][1]);
      index += 1;
    }
    const move = getMove(dir, snake[snake.length - 1]);
    if (isOver(table, move)) break;
    snake.push(move);
    if (table[move[0]][move[1]] === 0) {
      const tail = snake.shift();
      table[tail[0]][tail[1]] = 0;
    } else {
      table[move[0]][move[1]] = 0;
    }
    table[move[0]][move[1]] = 2;
    time += 1;
  }

  return time + 1;
};

const path = "baekjoon/예제.txt";
// const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim();

console.log(solution(input));
