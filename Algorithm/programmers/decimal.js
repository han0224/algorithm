// 처음 Set으로 작성하여 중복되는 경우 해당 값을 더하지 못해 오류
// 에라토스테네스의 체 를 이용하여 소수 판별
function solution(nums) {
  var answer = 0;
  const table = [];
  const n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        table.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  const max = Math.max(...table);
  const arr = Array.from({ length: max }, (v, i) => i + 1);
  const sqrtM = Math.sqrt(max);
  for (let i = 1; i < sqrtM; i++) {
    for (let j = i + 1; j < max; j++) {
      if (arr[j] % arr[i] === 0) {
        arr.splice(j, 1);
      }
    }
  }
  arr.splice(0, 2);
  arr.forEach((num) => {
    answer += table.filter((v) => v === num).length;
  });
  return answer;
}
