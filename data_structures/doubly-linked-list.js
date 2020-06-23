class Node {
  constructor(value) {
    Object.assign(this, { left: null, right: null, value });
  }
}

class Doubly_linked_list {
  constructor() {
    Object.assign(this, { head: null, tail: null, length: 0 });
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.left = this.tail; // l_N_r -> N_N_r
      this.tail.right = newNode; // l_N <- l_N_N_r
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  get print() {
    let temp = this.head;
    while (temp) {
      console.log(temp.value);
      temp = temp.right;
    }
  }
}

const node = new Doubly_linked_list();

let array = Array.from({ length: 10 }, (a, b) => (b += 10));

array.forEach((_) => {
  node.push(_);
});

console.log(node);
node.print;
