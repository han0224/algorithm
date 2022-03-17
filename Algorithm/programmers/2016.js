function solution(a, b) {
  const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let cnt = b - 1;
  for (let i = 0; i < a - 1; i++) {
    cnt += day[i];
  }
  return week[cnt % 7];
}
