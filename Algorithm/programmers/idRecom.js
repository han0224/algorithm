function solution(new_id) {
  let answer = "";
  answer = new_id.toLowerCase();
  answer = answer.replace(/[^0-9|a-z|\-|\_|\.]/g, "");
  answer = answer.replace(/\.{2,}/g, ".");
  answer = answer.replace(/^\.|[\.]$/g, "");
  if (answer.length === 0) answer = "a";
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
    answer = answer.replace(/^\.|[\.]$/g, "");
  }
  while (answer.length <= 2) {
    answer += answer.slice(-1);
  }
  return answer;
}
const new_id = "...!@BaT#*..y.abcdefghijklm";
console.log(solution(new_id));
