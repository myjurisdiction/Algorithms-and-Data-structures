/**
 * Implementing Binary Tree and its traversing
 */

const Node = class {
  constructor(value) {
    Object.assign(this, { left: null, right: null, value });
  }
};

const BinaryTree = class {
  constructor() {
    Object.assign(this, { root: null });
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let temp = this.root;
      let shouldContinue = true;
      while (shouldContinue) {
        if (value < temp.value) {
          if (!temp.left) {
            temp.left = newNode;
            shouldContinue = false;
          } else {
            temp = temp.left;
          }
        } else {
          if (!temp.right) {
            temp.right = newNode;
            shouldContinue = false;
          } else {
            temp = temp.right;
          }
        }
      }
    }
    return this;
  }

  generateNewNode(value) {
    return new Node(value);
  }

  recursive_insert(value, pointer = this.root) {
    if (!this.root) {
      this.root = this.generateNewNode(value);
    } else {
      if (value < pointer.value) {
        if (!pointer.left) {
          pointer.left = this.generateNewNode(value);
          return this;
        }
        this.recursive_insert(value, pointer.left);
      } else {
        if (!pointer.right) {
          pointer.right = this.generateNewNode(value);
          return this;
        }
        this.recursive_insert(value, pointer.right);
      }
    }
  }
  search(value) {
    let temp = this.root;
    let shouldContinue = true;
    let result = "";
    while (temp && shouldContinue) {
      if (value === temp.value) {
        result = result.concat("Found !!");
        shouldContinue = false;
      }
      if (value < temp.value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }
    return result.length !== 0 ? result : "Not found !!";
  }

  get getRoot() {
    return this.root;
  }
};

class TraverseBinaryTree extends BinaryTree {
  constructor() {
    super();
  }
  get breadthFirstSearch() {
    let queue = [];
    let toReturnArray = [];
    queue.push(this.getRoot); // inserting the root into the queue
    while (queue.length) {
      let dequedNode = queue.shift();
      toReturnArray.push(dequedNode.value);
      if (dequedNode.left) queue.push(dequedNode.left);
      if (dequedNode.right) queue.push(dequedNode.right);
    }
    return toReturnArray;
  }

  // we can use stack in this case
  get DFS_preOrder() {
    let container = [];
    function traverse(node) {
      container.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.getRoot);
    return "preOrder " + container;
  }

  get DFS_preOrder_i() {}

  get DFS_postOrder() {
    let container = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      container.push(node.value);
    }
    traverse(this.getRoot);
    return "postOrder " + container;
  }

  /** If i want to get the sorted binary tree */
  get DFS_inOrder() {
    let container = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      container.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.getRoot);
    return "inOrder " + container;
  }
  get DFS_i() {
    // we are using stack in this circumstance
    let stack = [this.root];
    let result = [];
    while (stack.length) {
      let node = stack.pop();
      result.push(node.value);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }

    return result;
  }
}

const bt = new TraverseBinaryTree();
// let insertArray = Array.from({ length: 10 }, () =>
//   Math.floor(Math.random() * 30)
// );

let insertArray = [10, 5, 2, 7, 12, 11, 15];
insertArray.forEach((number) => {
  bt.recursive_insert(number);
});

console.log(bt);

console.log(bt.search(2));

console.log(bt.breadthFirstSearch);

console.log(bt.DFS_preOrder);

console.log(bt.DFS_i);

console.log(bt.DFS_postOrder);

console.log(bt.DFS_inOrder);
