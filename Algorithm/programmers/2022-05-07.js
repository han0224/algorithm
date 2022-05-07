function solution(genres, plays) {
  var answer = [];
  const music = [];
  const index = [];
  genres.forEach((v, i) => {
    if (index.includes(v)) {
      music[v].push([i, plays[i]]);
    } else {
      index.push(v);
      music[v] = [];
      music[v].push([i, plays[i]]);
    }
  });
  const sum = [];
  index.forEach((v, i) => {
    sum.push(music[v].reduce((acc, cur) => acc + cur[1], 0));
    music[v].sort((a, b) => {
      if (a[1] == b[1]) {
        return b[0] - a[0];
      } else return a[1] - b[1];
    });
  });

  while (true) {
    const max = Math.max(...sum);
    const ind = sum.indexOf(max);
    sum[ind] = 0;
    const arr = music[index[ind]];
    if (arr.length == 1) {
      answer.push(arr[0][0]);
    } else {
      answer.push(arr[arr.length - 1][0]);
      answer.push(arr[arr.length - 2][0]);
    }

    delete music[index[ind]];
    if (Object.keys(music).length === 0) break;
  }

  return answer;
}
