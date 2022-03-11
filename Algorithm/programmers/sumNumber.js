function solution(numbers) {
  var answer = 0;
  let num = 0;
  const sum = 45;
  numbers.forEach((number) => {
    num += number;
  });
  answer = sum - num;
  return answer;
}
