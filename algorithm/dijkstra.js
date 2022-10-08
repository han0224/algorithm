/**
 * 다익스트라 알고리즘
 * 우선순위 큐를 이용해 출발지에서 도착지까지 가장 작은 지점을 찾기
 */

/**
 * 의사코드
 * 1. 함수는 시작정점과 마지막정점을 알고있다.
 * 2. key는 정점을 나타내고, value는 Infinity로 초기화되어있는 distances 오브젝트를 만든다.
 *    해당 오브젝트는 시작정점해서 key 정점까지 갈 수 있는 최소거리를 value로 갖고 있다.
 *    시작정점은 값이 0임이 틀림없기에 0으로 설정한다.
 * 3. 우선순위큐를 만들어 정점과 Infinity를 enqueue해준다.
 *    단, 시작정점은 거리가 0임이 틀림없기에 시작정점과 0을 enqueue해준다.
 * 4. previous 오브젝트를 만든다. 해당 오브젝트는 key로 정점을 갖고, value로 key정점으로 오기 바로 전에 들리는 정점을 갖는다.
 *    처음에 전부 null로 초기화해준다.
 * 5. 우선순위큐에 값이 있으면 계속 반복문을 돌린다.
 *    - 우선순위큐에서 dequeue()를 실행시켜 vertex를 얻는다.
 *    - vertex가 마지막 정점이면 반복문을 멈춘다.
 *    - 마지막 정점이 아니면 vertex에서 이동할 수 있는 다른 정점을 토대로 반복문을 돌린다.
 *       - 출발지에서 현재 정점까지의 거리와 이동할려는 다음 정점까지의 거리를 계산한다.
 *       - 만일 계산한 값이 이동할려는 정점이 가지고 있는 거리보다 작으면 업데이트 시켜준다.
 *          - distances 오브젝트, previous 오브젝트 업데이트, 우선순위큐에 삽입
 */

class Node {
  constructor(data) {
    this.vertex = data.vertex;
    this.priority = data.priority;
  }
}

class PriorityQueue {
  constructor() {
    this.tree = [0];
    this.size = 0;
  }
  enqueue(value, priority) {
    const node = new Node({ vertex: value, priority: priority });
    this.tree.push(node);
    this.size += 1;
    let index = this.size;
    const element = this.tree[index];
    while (index > 1) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.tree[parentIndex];
      // 부모 노드가 자신보다 작거나 같으면 중단
      if (element.priority >= parent.priority) break;
      this.tree[parentIndex] = element;
      this.tree[index] = parent;
      index = parentIndex;
    }
  }
  dequeue() {
    const min = this.tree[1];
    const end = this.tree.pop();
    this.size -= 1;
    this.tree[1] = end;
    if (this.size === 0) return min;
    let index = 1;
    while (true) {
      let leftChildIndex = 2 * index;
      let rightChildIndex = 2 * index + 1;
      let leftChild, rightChild;
      let swap = null;
      // 우선, 왼쪽 오른쪽 노드가 존재하는지 확인
      if (leftChildIndex < this.size) {
        leftChild = this.tree[leftChildIndex];
        if (leftChild.priority < end.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < this.size) {
        rightChild = this.tree[rightChildIndex];
        if (
          (swap === null && rightChild.priority < end.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      // 더 이상 교환이 이루어 지지 않으면 중단
      if (swap === null) break;
      this.tree[index] = this.tree[swap];
      this.tree[swap] = end;
      index = swap;
    }
    return min;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const dijkstra = (start, end, graph) => {
  const distances = {};
  const priorityqueue = new PriorityQueue();
  const previous = {};
  for (let i in graph) {
    distances[i] = Infinity;
    previous[i] = null;
  }
  distances[start] = 0;
  for (let i in distances) {
    priorityqueue.enqueue(i, distances[i]);
  }
  while (!priorityqueue.isEmpty()) {
    const value = priorityqueue.dequeue();
    if (value.vertex === end) break;
    for (let i of graph[value.vertex]) {
      if (distances[i.node] > value.priority + i.value) {
        distances[i.node] = value.priority + i.value;
        previous[i.node] = value.vertex;
        priorityqueue.enqueue(i.node, distances[i.node]);
      }
    }
  }
  console.log(`start: ${start}, end: ${end}`);
  console.log("distance", distances);
  console.log("priorityqueue", priorityqueue);
  console.log("previous", previous);
};

const graph = {
  A: [
    { node: "B", value: 4 },
    { node: "C", value: 2 },
  ],
  B: [
    { node: "A", value: 4 },
    { node: "E", value: 3 },
  ],
  C: [
    { node: "A", value: 2 },
    { node: "D", value: 2 },
    { node: "F", value: 4 },
  ],
  D: [
    { node: "C", value: 2 },
    { node: "E", value: 3 },
    { node: "F", value: 1 },
  ],
  E: [
    { node: "B", value: 3 },
    { node: "D", value: 3 },
    { node: "F", value: 1 },
  ],
  F: [
    { node: "C", value: 4 },
    { node: "D", value: 1 },
    { node: "E", value: 1 },
  ],
};

dijkstra("A", "E", graph);
/**
 * A B 4
 * A C 2
 * C D 2
 * B E 3
 * C F 4
 * D E 3
 * D F 1
 * E F 1
 */
