function solution(n, arr1, arr2) {
  const arr = [];
  const tmp1 = arr1.map((v) => {
    if (v.toString(2).length !== n) {
      return "0".repeat(n - v.toString(2).length) + v.toString(2);
    } else {
      return v.toString(2);
    }
  });
  const tmp2 = arr2.map((v) => {
    if (v.toString(2).length !== n) {
      return "0".repeat(n - v.toString(2).length) + v.toString(2);
    } else {
      return v.toString(2);
    }
  });
  for (let i = 0; i < n; i++) {
    let tmp4 = "";
    for (let j = 0; j < n; j++) {
      if (tmp1[i][j] === "1" || tmp2[i][j] === "1") tmp4 += "#";
      else tmp4 += " ";
    }
    arr.push(tmp4);
  }
  return arr;
}
