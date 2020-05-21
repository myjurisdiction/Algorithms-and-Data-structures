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

  _dfs(v) {
    const result = [];
    const visited = new Map();
    const adjacencyList = new Map(this.list);
    (function _(vertex) {
      if (!vertex) return; // base case
      visited.set(vertex, true);
      result.push(vertex);
      adjacencyList.get(vertex).forEach((neighbour) => {
        if (!visited.get(neighbour)) {
          return _(neighbour);
        }
      });
    })(v);
    return result;
  }
};

let g1 = new Graph();
g1.addVertex = "tokyo";
g1.addVertex = "india";
g1.addVertex = "pakistan";
g1.addVertex = "russia";
g1.addVertex = "usa";
g1.addVertex = "australia";

g1.addEdge("tokyo", "india");
g1.addEdge("tokyo", "australia");
g1.addEdge("tokyo", "pakistan");
g1.addEdge("india", "usa");
g1.addEdge("india", "pakistan");
g1.addEdge("usa", "australia");
g1.addEdge("india", "russia");

g1.removeEdge("india", "tokyo");

// g1.removeVertex = "india";

// console.log(g1);

console.log(g1._list);

console.log(g1._dfs('india'));
