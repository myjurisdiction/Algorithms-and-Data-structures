/**
 * implementation of graph data structure.
 *
 * It's applications are very diverse ranging from GPS (global positioning system) to deteting the outbreak of a deadly virus from a person to person.
 *
 * There are 2 very popular ways of implementing graph data structure.
 *  1. Adjacency matrix
 *     -> Advantages
 *        1. ADD Edge -> O(1)
 *        2. REMOVE Edge -> O(1)
 *        3. Query -> O(1)
 *
 *     -> Disadvantages
 *        1. ADD Vertex -> O(|v ^ 2|)
 *        2. REMOVE Vertex -> O(|v ^ 2|)
 *        3. Storage -> O(|v ^ 2|)
 *
 *  2. Adjacency list
 *     -> Advantages
 *        1. ADD Edge -> O(1)
 *        2. REMOVE Edge -> O(|e|)
 *        3. Query -> O(|v| + |e|)
 *
 *     -> Disadvantages
 *        1. ADD Vertex -> O(1)
 *        2. REMOVE Vertex -> O(|v| + |e|)
 *        3. Storage -> O(|v| + |e|)
 *
 *
 * // Most data in the real world tends to lend itself to sparser and/or larger graphs.
 *
 * it would be better to use adjacency list. But this choice totally depends on ourselves.
 */

// the graph for now is has no direction or it is a directionless graph.

const Graph = class {
  constructor() {
    Object.assign(this, { list: new Map() });
  }

  /**
   * @param {any} key
   */
  set addVertex(key) {
    if (key && !this.list.has(key)) {
      this.list.set(key, []);
    }
  }

  addEdge(v1, v2) {
    if (this.list.has(v1) && this.list.has(v2)) {
      this.list.get(v1).push(v2);
      this.list.get(v2).push(v1);
    }
  }

  removeEdge(v1, v2) {
    if (this.list.has(v1)) {
      this.list.set(
        v1,
        this.list.get(v1).filter((el) => el !== v2)
      );
    }
    if (this.list.has(v2)) {
      this.list.set(
        v2,
        this.list.get(v2).filter((el) => el !== v1)
      );
    }
    return "Edge removed successfully";
  }

  /**
   * @param {any} v
   */
  set removeVertex(v) {
    if (this.list.has(v)) {
      this.list.get(v).forEach((el) => {
        this.removeEdge(v, el);
      });
      this.list.delete(v);
    }
  }

  get _list() {
    return this.list;
  }

  /**
   * traverse graph
   */

  dfs_recursive(startVertex) {
    let container = [];
    let visitedVerticesList = new Map();
    const adjacentList = new Map(this.list);
    (function _(vertex) {
      if (!vertex) return;
      visitedVerticesList.set(vertex, true);
      container.push(vertex);
      adjacentList.get(vertex).forEach((neighbour) => {
        if (!visitedVerticesList.get(neighbour)) return _(neighbour);
      });
    })(startVertex);

    return container;
  }

  dfs_iterative(startVertex) {
    let stack = [startVertex];
    let result = [];
    let visited = new Map();
    visited.set(startVertex, true);

    while (stack.length) {
      // console.log(stack);
      let vertex = stack.pop();
      result.push(vertex);
      this.list.get(vertex).forEach((neighbour) => {
        if (!visited.get(neighbour)) {
          visited.set(neighbour, true);
          stack.push(neighbour);
        }
      });
    }
    return result;
  }

  bfs_iterative(start) {
    let queue = [start];
    let result = [];
    let visited = new Map();
    visited.set(start, true);
    while(queue.length) {
      start = queue.shift();
      result.push(start);
      this.list.get(start).forEach( connection => {
        if(!visited.get(connection)) {
          visited.set(connection, true);
          queue.push(connection);
        }
      })
    }
    return result;
  }
};

let g1 = new Graph();
g1.addVertex = "kirtu";
g1.addVertex = "keshav";
g1.addVertex = "neha";
g1.addVertex = "zeny";
g1.addVertex = "danish";
g1.addVertex = "sam";

g1.addEdge("kirtu", "keshav");
g1.addEdge("kirtu", "zeny");
g1.addEdge("kirtu", "danish");
g1.addEdge("keshav", "zeny");
// g1.addEdge("keshav");
// g1.addEdge("E", "D");
// g1.addEdge("E", "F");
// g1.addEdge("F", "E");
// g1.addEdge("F", "D");
// g1.addEdge("F", "C");
// g1.addEdge("C", "F");
// g1.addEdge("C", "A");

g1.removeEdge("kirtu", "zeny");

// g1.removeVertex = "mummy";

// console.log(g1);

console.log(g1._list.get('kirtu').length);
console.log(g1._list);

// console.log(g1.dfs_recursive("A"));

// console.log(g1.dfs_iterative("A"));

// console.log(g1.bfs_iterative("A"));


(function (v) {
  let count = 0;
  let matrix = new Array();
  for (let i = 0; i < v; i++) {
    matrix[i] = new Array(v);
    for (let j = 0; j < v; j++) {
      matrix[i][j] = 'keshav';
    }
  }
  console.log(matrix);
})(100);

