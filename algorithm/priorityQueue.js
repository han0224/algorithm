/**
 * 우선순위 큐를 구현
 * 1. Javascript의 내장 함수인 sort를 이용해 데이터를 삽입할때마다 정렬해주는 방식
 * 2. heap을 이용해 우선순위 큐를 구현한 방식
 */

class HeapPriorityQueue {
  constructor() {
    this.queue = [];
    this.lastIndex = 0;
  }

  enqueue(data) {
    this.queue.push(data);

    let parentIndex = this.lastIndex;

    while (true) {
      const childIndex = parentIndex;
      parentIndex = Math.ceil(parentIndex / 2) - 1;

      if (parentIndex < 0) break;

      if (this.queue[parentIndex] < data) {
        this.queue[childIndex] = this.queue[parentIndex];
        this.queue[parentIndex] = data;
      }
    }

    this.lastIndex++;
  }

  dequeue() {
    this.lastIndex--;
    const result = this.queue[0];

    const lastElement = this.queue.pop();

    if (this.queue.length === 0) return lastElement;

    this.queue[0] = lastElement;

    let currentIndex = 0;

    while (true) {
      const leftIndex = currentIndex * 2 + 1;
      const left = this.queue[leftIndex];

      const rightIndex = currentIndex * 2 + 2;
      const right = this.queue[rightIndex];

      const compareIndex = left > right ? leftIndex : rightIndex;
      const compare = this.queue[compareIndex];

      if (this.queue[currentIndex] < compare) {
        this.queue[compareIndex] = this.queue[currentIndex];
        this.queue[currentIndex] = compare;
        currentIndex = compareIndex;
      } else break;
    }

    return result;
  }
}

class SortPriorityQueue {
  constructor() {
    this.value = [];
  }
  enqueue(val) {
    this.value.push(val);
    this.sort();
  }
  dequeue() {
    return this.value.shift();
  }
  sort() {
    this.value.sort((a, b) => a - b);
  }
}

const heap = new HeapPriorityQueue();
const sort = new SortPriorityQueue();
const MAX = 10000;
console.log(`data size: ${MAX}`);
const sortStart = new Date();
for (let i = 0; i < MAX; i++) {
  const data = Math.random() * 1000000;
  sort.enqueue(data);
}
const sortEnd = new Date();
console.log(`sort: ${sortEnd - sortStart}`);

const heapStart = new Date();
for (let i = 0; i < MAX; i++) {
  const data = Math.random() * 1000000;
  heap.enqueue(data);
}
const heapEnd = new Date();
console.log(`heap: ${heapEnd - heapStart}`);

/**
 *  data size: 100
 *  sort: 0
 *  heap: 0
 *
 *  data size: 1000
 *  sort: 10
 *  heap: 1
 *
 *  data size: 10000
 *  sort: 651
 *  heap: 2
 */

/**
 * 데이터의 수가 작으면 크게 차이가 없으나 데이터의 수가 커지면 커질수록 heap을 이용하여 우선순위큐를 구현하는 것이 훨씬 이득
 */
