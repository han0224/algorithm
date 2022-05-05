function solution(s) {
  s = s.slice(1, s.length - 1);
  const result = [];
  const arr = s.split(/\{(.*?)\}/).filter((v) => {
    if (v === "," || v.length === 0) return false;
    return true;
  });
  arr.sort((a, b) => a.length - b.length);
  arr.forEach((value) => {
    const tmp = value.split(",");
    tmp.forEach((v) => {
      if (!result.includes(+v)) {
        result.push(+v);
      }
    });
  });
  return result;
}
