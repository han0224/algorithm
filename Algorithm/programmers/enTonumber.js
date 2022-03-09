function solution(s) {
  var answer = s;
  const number = [
    { num: 0, str: "zero" },
    { num: 1, str: "one" },
    { num: 2, str: "two" },
    { num: 3, str: "three" },
    { num: 4, str: "four" },
    { num: 5, str: "five" },
    { num: 6, str: "six" },
    { num: 7, str: "seven" },
    { num: 8, str: "eight" },
    { num: 9, str: "nine" },
  ];
  number.forEach((number) => {
    const regex = new RegExp(number.str, "gi");
    answer = answer.replace(regex, number.num);
    console.log(answer);
  });
  answer *= 1;
  return answer;
}
