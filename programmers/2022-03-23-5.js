function solution(n) {
  const nn = n + 1;
  const arr = new Array(nn).fill(1);
  arr[0] = arr[1] = 0;
  for (let i = 2; i * i < nn + 1; i++) {
    if (arr[i] === 1) {
      arr[i] = 1;
      for (let j = i * i; j < nn + 1; j += i) {
        arr[j] = 0;
      }
    }
  }
  return arr.reduce((arr, cur) => arr + cur, 0);
}
