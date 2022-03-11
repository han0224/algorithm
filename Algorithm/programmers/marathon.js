// 첫번째 효율성 통과 못함
// completion.forEach 를 이용해 반복을 돌려 participant.includes 를 사용했더니
// 효율성 통과 못했음
// 이후 정렬을 한 후에 같은 인덱스에 다른 값일 경우
// 해당 선수는 통과하지 못한 선수이기에
// 그 선수를 리턴
function solution(participant, completion) {
  var answer = "";
  completion.sort();
  participant.sort();
  const n = participant.length;
  for (let i = 0; i < n; i++) {
    if (!(completion[i] === participant[i])) {
      console.log(completion[i]);
      return participant[i];
    }
  }
}
