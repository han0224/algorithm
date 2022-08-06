class NodeDeque {
  constructor(value) {
    this.pre = null;
    this.next = null;
    this.value = value;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  initDeque() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    const node = new NodeDeque(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    node.pre = this.tail;
    this.tail = node;
    this.size++;
  }
  addFirst(value) {
    const node = new NodeDeque(value);
    if (this.isEmpty()) {
      this.tail = node;
      this.head = node;
    } else {
      const nextNode = this.head;
      this.head = node;
      this.head.next = nextNode;
      nextNode.pre = this.head;
    }
    this.size++;
  }
  poll() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.getSize() === 1) {
      this.initDeque();
      return;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.head.pre = null;
    this.size--;
    return value;
  }
  pollLast() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.getSize() === 1) {
      this.initDeque();
      return;
    }
    const value = this.tail.value;
    const preLast = this.tail.pre;
    preLast.next = null;
    this.tail = preLast;
    this.size--;
    return value;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  print() {
    if (this.isEmpty()) {
      console.log("비어있음");
      return;
    }
    let node = this.head;
    for (let i = 0; i < this.size; i++) {
      console.log(node.value);
      node = node.next;
    }
  }
}

const maxNum = 100000;

const deque = new Deque();
const appendStart = new Date();
for (let i = 0; i < maxNum; i++) {
  deque.append(i);
}
const appendEnd = new Date();
console.log(`deque append : ${appendEnd - appendStart}ms`);

const arr = [];
const pushStart = new Date();
for (let i = 0; i < maxNum; i++) {
  arr.push(i);
}
const pushEnd = new Date();
console.log(`arr push : ${pushEnd - pushStart}ms`);

const pollLastStart = new Date();
for (let i = 0; i < maxNum; i++) {
  deque.pollLast();
}
const pollLastEnd = new Date();
console.log(`deque pollLast : ${pollLastEnd - pollLastStart}ms`);

const popStart = new Date();
for (let i = 0; i < maxNum; i++) {
  arr.pop();
}
const popEnd = new Date();
console.log(`arr pop : ${popEnd - popStart}ms`);
// const deque = new Deque();
// const dequeStart = new Date();
// for (let i = 0; i < maxNum; i++) {
//   deque.addFirst(i);
// }
// const dequeEnd = new Date();
// console.log("deque addFirst : ", dequeEnd - dequeStart);

// const arr = new Array();
// const arrStart = new Date();
// for (let i = 0; i < maxNum; i++) {
//   arr.unshift(i);
// }
// const arrEnd = new Date();
// console.log("arr unshift : ", arrEnd - arrStart);

// const pollStart = new Date();
// for (let i = 0; i < maxNum; i++) {
//   deque.poll();
// }
// const pollEnd = new Date();
// console.log(`deque poll : ${pollEnd - pollStart}`);

// const shiftStart = new Date();
// for (let i = 0; i < maxNum; i++) {
//   arr.shift();
// }
// const shiftEnd = new Date();
// console.log(`arr shift : ${shiftEnd - shiftStart}`);
