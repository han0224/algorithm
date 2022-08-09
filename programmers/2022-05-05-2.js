function solution(n, k) {
  var answer = 0;
  const kNum = n.toString(k);
  const nums = kNum.split(0).filter((v) => v.length != 0);
  nums.forEach((v) => {
    if (isPrime(+v)) {
      answer++;
    }
  });
  return answer;
}

const isPrime = (n) => {
  if (n === 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
