/**
 *  We are using Heap data structure.
 *
 * Dijkstra’s algorithm doesn’t work for graphs with negative weight edges. For graphs with negative weight edges, Bellman–Ford algorithm can be used, we will soon be discussing it as a separate post.
 *
 *
 */

class PriorityQueue {
  constructor() {
    Object.assign(this, { queue: [] });
  }

  enqueue(value, priority) {
    let node = new Node(value, priority);
    this.queue.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let indexCurrentNode = this.queue.length - 1;
    let node = this.queue[indexCurrentNode];
    while (indexCurrentNode > 0) {
      let parentIndex = Math.floor((indexCurrentNode - 1) / 2);
      let parent = this.queue[parentIndex];
      if (parent.priority < node.priority) break;
      this.queue[parentIndex] = node;
      this.queue[indexCurrentNode] = parent;
      indexCurrentNode = parentIndex;
    }
  }

  dequeue() {
    let min = this.queue[0];
    let end = this.queue.pop();
    this.queue[0] = end;
    this.sinkDown();
    return min;
  }

  sinkDown() {
    let rootIndex = 0;
    let element = this.queue[rootIndex];
    let length = this.queue.length;

    while (true) {
      let leftChildIndex = 2 * rootIndex + 1;
      let rightChildIndex = 2 * rootIndex + 2;
      let swapIndex = null;

      let leftChild, rightChild;
      if (leftChildIndex < length) {
        leftChild = this.queue[leftChildIndex];
        if (element.priority > leftChild.priority) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.queue[rightChildIndex];
        if (
          (swapIndex === null && element.priority > rightChild.priority) ||
          (swapIndex !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;
      this.queue[rootIndex] = this.queue[swapIndex];
      this.queue[swapIndex] = element;
      rootIndex = swapIndex;
    }
  }
}

class Node {
  constructor(value, priority) {
    Object.assign(this, { value, priority });
  }
}

/**
 * let minPQ = new PriorityQueue();
minPQ.enqueue(100, 2);
minPQ.enqueue(200, 3);
minPQ.enqueue(300, 5);
minPQ.enqueue(400, 0);
minPQ.enqueue(500, 1);

console.log(minPQ);

minPQ.dequeue();
console.log(minPQ);
minPQ.dequeue();
console.log(minPQ);
minPQ.dequeue();
console.log(minPQ);
 */

/**
 * Implelenting Dijkstra's algorithm.
 */

const Dijkstra = class {
  constructor() {
    Object.assign(this, { adjacencyList: new Map() });
  }

  addVertex(v) {
    if (v && !this.adjacencyList.has(v)) {
      this.adjacencyList.set(v, []);
    }
  }

  addEdge(v1, v2, weight) {
    if (this.adjacencyList.has(v1) && this.adjacencyList.has(v2)) {
      this.adjacencyList.get(v1).push({ node: v2, weight });
      this.adjacencyList.get(v2).push({ node: v1, weight });
    }
  }

  shortestPath(start, end) {
    let priorityQueue = new PriorityQueue();
    let distances = {};
    let previous = {};
    let path = [];
    for (let v of this.adjacencyList.keys()) {
      if (v === start) {
        distances[v] = 0;
        priorityQueue.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        priorityQueue.enqueue(v, Infinity);
      }
      previous[v] = null;
    }

    while (priorityQueue.queue.length) {
      let smallest = priorityQueue.dequeue().value;

      if (smallest === end) {
        // this code is to return the path traced.
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour of this.adjacencyList.get(smallest)) {
          let candidate = distances[smallest] + neighbour.weight;
          if (candidate < distances[neighbour["node"]]) {
            distances[neighbour["node"]] = candidate;
            previous[neighbour["node"]] = smallest;
            priorityQueue.enqueue(neighbour["node"], candidate);
          }
        }
      }
    }
    return path.concat(start).reverse();
  }
};

const _instance = new Dijkstra();
// _instance.addVertex("A");
// _instance.addVertex("B");
// _instance.addVertex("C");
// _instance.addVertex("D");
// _instance.addVertex("E");
// _instance.addVertex("F");

// _instance.addEdge("A", "B", 4);
// _instance.addEdge("A", "C", 2);
// _instance.addEdge("C", "F", 4);
// _instance.addEdge("C", "D", 2);
// _instance.addEdge("F", "D", 1);
// _instance.addEdge("F", "E", 1);
// _instance.addEdge("B", "E", 3);

_instance.addVertex("A");
_instance.addVertex("B");
_instance.addVertex("C");
_instance.addVertex("D");
_instance.addVertex("E");

_instance.addEdge("A", "B", 2);
_instance.addEdge("B", "E", 2);
_instance.addEdge("B", "C", 3);
_instance.addEdge("E", "C", 2);
_instance.addEdge("C", "D", 1);

console.log(_instance);

console.log(_instance.shortestPath("A", "D"));
