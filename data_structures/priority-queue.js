/**
 * Implementing Priority Queue
 */

const Node = class {
  constructor(value, priority) {
    Object.assign(this, { value, priority });
  }
};

const PriorityQueue = class {
  constructor() {
    Object.assign(this, { queue: [] });
  }

  // every insertion and bubbling up of values happens based on the priority of that particular element instead of the value .
  insert(value, priority = 0) {
    const newNode = new Node(value, priority);
    this.queue.push(newNode);
    this.bubbleUp;
  }

  get bubbleUp() {
    let index = this.queue.length - 1;
    let element = this.queue[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.queue[parentIndex];
      if (parent.priority <= element.priority) break;
      this.queue[parentIndex] = element;
      this.queue[index] = parent;
      index = parentIndex;
    }
  }

  get dequeue() {
    let min = this.queue[0];
    let end = this.queue.pop();
    this.queue[0] = end;
    this.sinkDown;
    return min;
  }

  get sinkDown() {
    let rootIndex = 0;
    let length = this.queue.length;
    let element = this.queue[rootIndex];

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

      if(swapIndex === null) break;
      this.queue[rootIndex] = this.queue[swapIndex];
      this.queue[swapIndex] = element;
      rootIndex = swapIndex;
    }
  }
};

const priorityQueue = new PriorityQueue();

priorityQueue.insert(100, 2);
priorityQueue.insert(200, 0);
priorityQueue.insert(100, 5);
priorityQueue.insert(400, 1);
priorityQueue.insert(1000, 1);
priorityQueue.insert(2000, 1);

console.log(priorityQueue);

console.log(priorityQueue.dequeue);

console.log(priorityQueue);

console.log(priorityQueue.dequeue);

console.log(priorityQueue);

console.log(priorityQueue.dequeue);

console.log(priorityQueue);

