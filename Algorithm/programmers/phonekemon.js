function solution(nums) {
  var answer = 0;
  const n = nums.length / 2;
  console.log(n);
  const set = new Set([...nums]).size;
  console.log(set);

  return n <= set ? n : set;
}
