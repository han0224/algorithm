function solution(str1, str2) {
  var answer = 0;
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  const set1 = [];
  const set2 = [];
  for (let i = 1; i < str1.length; i++) {
    if (/[A-Z]/.test(str1[i - 1]) && /[A-Z]/.test(str1[i])) {
      set1.push(str1[i - 1] + str1[i]);
    }
  }
  for (let i = 1; i < str2.length; i++) {
    if (/[A-Z]/.test(str2[i - 1]) && /[A-Z]/.test(str2[i])) {
      set2.push(str2[i - 1] + str2[i]);
    }
  }
  if (set1.length === 0 && set2.length === 0) {
    return 65536;
  }
  console.log(set1, set2);
  const union = [];
  const intersection = [...set1, ...set2];
  set1.forEach((v) => {
    const tmp = set2.indexOf(v);
    if (tmp > -1) {
      set2.splice(tmp, 1);
      union.push(v);
      const index = intersection.indexOf(v);
      intersection.splice(index, 1);
    }
  });
  return Math.floor((union.length / intersection.length) * 65536);
}
