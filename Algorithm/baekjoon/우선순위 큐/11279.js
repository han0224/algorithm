const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
// const input = fs
//   .readFileSync("baekjoon/예제.txt")
//   .toString()
//   .trim()
//   .split("\r\n")
//   .map((v) => +v);

class Heap {
  constructor() {
    this.item = [];
  }
  swap(item1, item2) {
    const tmp = this.item[item2];
    this.item[item2] = this.item[item1];
    this.item[item1] = tmp;
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return index * 2 + 1;
  }
  rightChildIndex(index) {
    return index * 2 + 2;
  }
  parent(index) {
    return this.item[this.parentIndex(index)];
  }
  leftChild(index) {
    return this.item[this.leftChildIndex(index)];
  }
  rightChild(index) {
    return this.item[this.rightChildIndex(index)];
  }
}
class MaxHeap extends Heap {
  up() {
    let index = this.item.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) < this.item[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }
  down() {
    let index = 0;
    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) > this.item[index] ||
        this.rightChild(index) > this.item[index])
    ) {
      let bigIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) > this.item[bigIndex]
      ) {
        bigIndex = this.rightChildIndex(index);
      }
      this.swap(bigIndex, index);
      index = bigIndex;
    }
  }
  add(item) {
    this.item.push(item);
    this.up();
  }
  del() {
    if (this.item.length === 0) {
      return 0;
    }
    let item = this.item[0];
    this.item[0] = this.item[this.item.length - 1];
    this.item.pop();
    this.down();

    return item;
  }
}

const N = input[0];
const arr = input.slice(1);
const maxheap = new MaxHeap();
const result = [];
for (i of arr) {
  if (i === 0) {
    result.push(maxheap.del());
  } else {
    maxheap.add(i);
  }
}
console.log(result.join("\n"));
