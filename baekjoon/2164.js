const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();
// const input = +fs.readFileSync("baekjoon/예제.txt").toString().trim();

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

const deque = new Deque();
for (let i = 0; i < input; i++) {
  deque.append(i + 1);
}

let i = 1;
while (deque.getSize() > 1) {
  if (i % 2 === 1) {
    deque.poll();
  } else {
    const card = deque.poll();
    deque.append(card);
  }
  i++;
}
deque.print();
