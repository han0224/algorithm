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
    this.items = [];
  }
  swap(index1, index2) {
    const tmp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = tmp;
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  parent(index) {
    return this.items[this.parentIndex(index)];
  }
  leftChildIndex(index) {
    return index * 2 + 1;
  }
  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }
  rightChildIndex(index) {
    return index * 2 + 2;
  }
  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }
}

class AbsHeap extends Heap {
  up() {
    let index = this.items.length - 1;
    while (
      this.parent(index) !== undefined &&
      (Math.abs(this.parent(index)) > Math.abs(this.items[index]) ||
        (Math.abs(this.parent(index)) === Math.abs(this.items[index]) &&
          this.parent(index) > this.items[index]))
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }
  down() {
    let index = 0;
    while (
      (this.leftChild(index) !== undefined &&
        (Math.abs(this.leftChild(index)) < Math.abs(this.items[index]) ||
          Math.abs(this.rightChild(index)) < Math.abs(this.items[index]))) ||
      (Math.abs(this.leftChild(index)) === Math.abs(this.items[index]) &&
        this.leftChild(index) < this.items[index]) ||
      (Math.abs(this.rightChild(index)) === Math.abs(this.items[index]) &&
        this.rightChild(index) < this.items[index])
    ) {
      let smallIndex = this.leftChildIndex(index);
      if (
        (this.rightChild(index) !== undefined &&
          Math.abs(this.rightChild(index)) < Math.abs(this.leftChild(index))) ||
        (Math.abs(this.rightChild(index)) === Math.abs(this.leftChild(index)) &&
          this.rightChild(index) < this.leftChild(index))
      ) {
        smallIndex = this.rightChildIndex(index);
      }
      this.swap(index, smallIndex);
      index = smallIndex;
    }
  }
  add(item) {
    this.items.push(+item);
    this.up();
  }
  del() {
    if (this.items.length === 0) {
      return 0;
    }
    const item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.down();
    return item;
  }
}

const absheap = new AbsHeap();
const N = input[0];
const arr = input.slice(1);
const result = [];
for (i of arr) {
  if (i === 0) {
    result.push(absheap.del());
  } else {
    absheap.add(i);
  }
}
console.log(result.join("\n"));
