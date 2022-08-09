function solution(sizes) {
  const big = [0, 0];
  sizes.forEach((v) => {
    v.sort((a, b) => a - b);
    if (v[0] > big[0]) big[0] = v[0];
    if (v[1] > big[1]) big[1] = v[1];
  });
  return big[0] * big[1];
}
