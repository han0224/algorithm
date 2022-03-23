function solution(s) {
  const tmp1 = [...s.toLowerCase()].filter((v) => v === "p").length;
  const tmp2 = [...s.toLowerCase()].filter((v) => v === "y").length;
  return tmp1 === tmp2;
}
