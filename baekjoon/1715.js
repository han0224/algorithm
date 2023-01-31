class Heap {
  constructor() {
    this.heap = [];
    this.lastIndex = 0;
  }

  size() {
    return this.heap.length;
  }

  enqueue(value) {
    this.heap.push(value);

    let parentIndex = this.lastIndex;

    while (true) {
      const childIndex = parentIndex;
      parentIndex = Math.ceil(parentIndex / 2) - 1;

      if (parentIndex < 0) break;

      if (this.heap[parentIndex] > value) {
        this.heap[childIndex] = this.heap[parentIndex];
        this.heap[parentIndex] = value;
      }
    }

    this.lastIndex += 1;
  }

  dequeue() {
    this.lastIndex -= 1;

    const result = this.heap[0];
    const lastElement = this.heap.pop();

    if (this.heap.length === 0) return lastElement;

    this.heap[0] = lastElement;

    let currentIndex = 0;

    while (true) {
      const leftIndex = currentIndex * 2 + 1;
      const left = this.heap[leftIndex];
      if (!left) break;

      const rightIndex = currentIndex * 2 + 2;
      const right = this.heap[rightIndex];
      if (!right && this.heap[currentIndex] > left) {
        this.heap[leftIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = left;
        currentIndex = leftIndex;
        continue;
      }
      const compareIndex = left < right ? leftIndex : rightIndex;
      const compare = this.heap[compareIndex];

      if (this.heap[currentIndex] > compare) {
        this.heap[compareIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = compare;
        currentIndex = compareIndex;
      } else break;
    }
    return result;
  }
}

const solution = (input) => {
  let answer = 0;
  const N = input.shift();

  if (N === 1) return 0;

  const heap = new Heap();
  for (let i = 0; i < N; i++) {
    heap.enqueue(input[i]);
  }

  while (heap.size() > 1) {
    const s1 = heap.dequeue();
    const s2 = heap.dequeue();
    const sum = s1 + s2;
    answer += sum;
    heap.enqueue(sum);
  }
  return answer;
};

const path = process.platform === "linux" ? "/dev/stdin" : "baekjoon/예제.txt";

const fs = require("fs");
const input = fs.readFileSync(path).toString().trim().split("\n").map(Number);

console.log(solution(input));

/* ***************************** *
 * 우선순위 큐에서 dequeue 작성 꼼꼼히! *
 * ***************************** */
