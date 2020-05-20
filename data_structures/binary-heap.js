/** This is the Implementation of the max binary heap. */

class MaxBinaryHeap {
  constructor() {
    Object.assign(this, { container: [] });
  }

  insert(value) {
    this.container.push(value);
    this.bubbleUp;
  }

  get bubbleUp() {
    let index = this.container.length - 1;
    let element = this.container[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentElement = this.container[parentIndex];
      if (element <= parentElement) break;
      this.container[parentIndex] = element;
      this.container[index] = parentElement;
      index = parentIndex;
    }
  }

  swap(idx1, idx2) {
    [this.container[idx1], this.container[idx2]] = [
      this.container[idx2],
      this.container[idx1],
    ];
  }

  get extractMax() {
    let max = this.container[0];
    let end = this.container.pop();
    this.container[0] = end;
    this.sinkDown;
    return max;
  }

  get sinkDown() {
    let rootIdx = 0;
    let element = this.container[0];
    let length = this.container.length;

    while (true) {
      let leftIdx = 2 * rootIdx + 1;
      let rightIdx = 2 * rootIdx + 2;
      let swapIdx = null;

      let leftChild, rightChild;
      if (leftIdx < length) {
        leftChild = this.container[leftIdx];
        if (leftChild > element) {
          swapIdx = leftIdx;
        }
      }
      if (rightIdx < length) {
        rightChild = this.container[rightIdx];
        if (
          (swapIdx === null && rightChild > element) ||
          (swapIdx !== null && rightChild > leftChild)
        ) {
          swapIdx = rightIdx;
        }
      }
      if (swapIdx === null) break;
      this.container[rootIdx] = this.container[swapIdx];
      this.container[swapIdx] = element;
      rootIdx = swapIdx;
    }
  }
}

let bh = new MaxBinaryHeap();

bh.insert(22);
bh.insert(44);
bh.insert(100);
bh.insert(21);
bh.insert(23);
bh.insert(500);

console.log(bh);

console.log(bh);

console.log(bh.extractMax);

console.log(bh);

console.log(bh.extractMax);

console.log(bh, `\n`);

/** Implementation of min binary heap */

class MinBinaryHeap extends MaxBinaryHeap {
  constructor() {
    super();
    this.container = [];
  }

  insert(value) {
    this.container.push(value);
    this.bubbleUp;
  }

  get bubbleUp() {
    let index = this.container.length - 1;
    let element = this.container[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.container[parentIndex];
      if (parent <= element) break;
      this.container[parentIndex] = element;
      this.container[index] = parent;
      index = parentIndex;
    }
  }

  get extractMin() {
    let min = this.container[0];
    let end = this.container.pop();
    this.container[0] = end;
    this.sinkDown;
    return min;
  }

  get sinkDown() {
    let rootIndex = 0;
    let element = this.container[rootIndex];
    let length = this.container.length;
    while (true) {
      let leftChildIdx = 2 * rootIndex + 1;
      let rightChildIdx = 2 * rootIndex + 2;
      let swap = null;

      let leftChild, rightChild;
      if (leftChildIdx < length) {
        leftChild = this.container[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.container[rightChildIdx];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.container[rootIndex] = this.container[swap];
      this.container[swap] = element;
      rootIndex = swap;
    }
  }
}

const minBh = new MinBinaryHeap();
minBh.insert(22);
minBh.insert(44);
minBh.insert(100);
minBh.insert(21);
minBh.insert(23);
minBh.insert(5);

console.log(minBh);

console.log(minBh.extractMin);

console.log(minBh);

console.log(minBh.extractMin);

console.log(minBh, `\n`);

console.log(minBh.extractMin);

console.log(minBh, `\n`);

/**
  * 
  * const proto_object = {
    a1 : [1,2,0],
    a2 : [3,4,-1,1],
    a3 : [7,8,9,11,12]
}

function smallestInteger() {
    let min = Math.min(...this.a2);
    let max = Math.max(...this.a2);

    let rangeArray = Array.from({ length : max}, (a, b) => b + 1);
    let lowestRangeArray;
    if(min > 2) {
        lowestRangeArray = Array.from({ length : min }, (a, b) => b + 1);
    }
    if(lowestRangeArray) return Math.min(...lowestRangeArray);
    for(let value of rangeArray) {
        if(!this.a2.includes(value)) return value;
    }
    return max + 1;

}

const instance1 = smallestInteger.bind(proto_object);
console.log(instance1());
  */
