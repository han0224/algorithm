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
  swap(index1, index2) {
    const tmp = this.item[index1];
    this.item[index1] = this.item[index2];
    this.item[index2] = tmp;
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  parent(index) {
    return this.item[this.parentIndex(index)];
  }
  rightChildIndex(index) {
    return index * 2 + 2;
  }
  rigthChild(index) {
    return this.item[this.rightChildIndex(index)];
  }
  leftChildIndex(index) {
    return index * 2 + 1;
  }
  leftChild(index) {
    return this.item[this.leftChildIndex(index)];
  }
}
class MinHeap extends Heap {
  up() {
    let index = this.item.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) > this.item[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }
  down() {
    let index = 0;
    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) < this.item[index] ||
        this.rigthChild(index) < this.item[index])
    ) {
      let smallIndex = this.leftChildIndex(index);
      if (
        this.rigthChild(index) !== undefined &&
        this.rigthChild(index) < this.leftChild(index)
      ) {
        smallIndex = this.rightChildIndex(index);
      }
      this.swap(index, smallIndex);
      index = smallIndex;
    }
  }
  add(item) {
    this.item.push(+item);
    this.up();
  }
  del() {
    if (this.item.length === 0) {
      return 0;
    }
    const item = this.item[0];
    this.item[0] = this.item[this.item.length - 1];
    this.item.pop();
    this.down();
    return item;
  }
}

const minheap = new MinHeap();
const N = input[0];
const arr = input.slice(1);
const result = [];
for (i of arr) {
  if (i === 0) {
    result.push(minheap.del());
  } else {
    minheap.add(i);
  }
}
console.log(result.join("\n"));
