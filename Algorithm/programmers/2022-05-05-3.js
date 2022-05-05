function solution(skill, skill_trees) {
  var answer = skill_trees.length;
  const skillArr = skill.split("");
  skill_trees.forEach((v) => {
    let step = 0;
    const arr = v.split("");
    for (const e of arr) {
      const index = skillArr.indexOf(e);
      if (index > step) {
        answer--;
        break;
      } else if (index === step) step++;
    }
  });
  return answer;
}
