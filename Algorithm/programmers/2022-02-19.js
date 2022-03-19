function solution(numbers) {
  const tmp = numbers.sort((a, b) => {
    let aa = parseInt(a.toString() + b.toString());
    let bb = parseInt(b.toString() + a.toString());
    return bb - aa;
  });
  if (tmp[0] === 0) return "0";
  else return tmp.join("");
}
