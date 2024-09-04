// Work on Hash Table from sratch

// load factor
// Hash function
// Time complexity (Average case & Worst Case)
// Collisions

/**
 * Let us implement a basic hash table.
 *
 *  To handle the collision, i have used SEPERATE CHAINING.
 * Separate Chaining is a collision resolution technique where each bucket in the hash table's underlying array contains a linked list (or another data structure) to store all key-value pairs that hash to the same index.
 */

class Node {
  constructor(key, val) {
    this.next = null;
    this.val = val;
    this.key = key;
  }
}

class HashTable {
  // a private property. Can't be accessed from outside the class.
  #_bucket = new Array(53);

  get bucket() {
    return this.#_bucket;
  }

  add(key, value) {
    const index = this.getSlotIndex(key);

    let currentValue = this.#_bucket[index];
    // check for collisions
    if (currentValue != null) {
      // traverse the node list
      while (currentValue) {
        // if duplicate key, re-name the value
        if (currentValue.key === key) {
          currentValue.val = value;
          return;
        }
        if (!currentValue.next) break;
        currentValue = currentValue.next;
      }
      currentValue.next = new Node(key, value);
    } else {
      this.#_bucket[index] = new Node(key, value);
    }
  }

  hash(str) {
    // A good hash function is crucial for the performance of a hash table, as it distributes keys uniformly across the available slots, minimizing collisions. A popular and effective hash function for strings is the djb2 algorithm, developed by Daniel J. Bernstein.
    let hash = 5381; // Start with a prime number
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 33) ^ str.charCodeAt(i); // Multiply hash by 33 and XOR with the current character code
    }
    return hash >>> 0; // Ensure non-negative 32-bit integer
  }

  getSlotIndex(str) {
    return this.hash(str) % this.#_bucket.length;
  }

  get(key) {
    // retrive the value at that key
    const index = this.getSlotIndex(key);
    let currentValue = this.#_bucket[index];
    if (currentValue != null) {
      while (currentValue) {
        if (currentValue.key === key) {
          break;
        }
        if (!currentValue.next) break;
        currentValue = currentValue.next;
      }
    }
    return currentValue?.val ? currentValue?.val : null;
  }

  remove(key) {
    const index = this.getSlotIndex(key);
    const currentValue = this.#_bucket[index];
    let previousNode;

    while (currentValue) {
      if (currentValue.key === key) {
        if (previousNode) {
          previousNode.next = currentValue.next;
        } else {
          this.#_bucket[index] = currentValue.next;
        }

        return currentValue.val;
      }
      previousNode = currentValue;
      currentValue = currentValue.next;
    }

    return null;
  }
}

const hashTable = new HashTable();

hashTable.add("apple", "FRUIT-1");
hashTable.add("tv", "ELECTRONIC-1");
hashTable.add("ball", "RUBBER-1");
hashTable.add("bat", "WOOD-1");

hashTable.add("apple2", "FRUIT-2");
hashTable.add("tv2", "ELECTRONIC-2");
hashTable.add("ball2", "RUBBER-2");
hashTable.add("bat2", "WOOD-2");

hashTable.add("apple3", "FRUIT-3");
hashTable.add("tv3", "ELECTRONIC-3");
hashTable.add("ball3", "RUBBER-3");
hashTable.add("bat3", "WOOD-3");

hashTable.add("apple4", "FRUIT-4");
hashTable.add("tv4", "ELECTRONIC-4");
hashTable.add("ball4", "RUBBER-4");
hashTable.add("bat4", "WOOD-4");

console.log(hashTable.get("apple"));
console.log(hashTable.get("tv"));
console.log(hashTable.get("ball"));

console.log(hashTable.get("apple2"));
console.log(hashTable.get("tv2"));
console.log(hashTable.get("ball2"));
console.log(hashTable.get("bat2"));

console.log(hashTable.get("apple3"));
console.log(hashTable.get("tv3"));
console.log(hashTable.get("ball3"));

console.log(hashTable.bucket);

hashTable.remove("apple");

console.log(hashTable.get("apple"));
