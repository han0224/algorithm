function solution(s) {
  return (s.length === 4 || s.length === 6) && !/[a-zA-Z]/.test(s);
}
