/**
 * How Linked list works
 */

 class Node {
     constructor(val) {
         Object.assign(this, { val, next : null});
     }
 }

 class LinkedList {
     constructor() {
         Object.assign(this, { head : null, tail : null, length : 0});
     }

     push(val) {
         const newNode = new Node(val);
         if(!this.head) {
             this.head = newNode;
             this.tail = this.head;
         } else {
             this.tail.next = newNode;
             this.tail = newNode;
         }
         this.length++;
         return this;
     }

     get print() {
         if(this.head) {
             let pointer = this.head;
             while(pointer) {
                console.log(pointer.val);
                pointer = pointer.next;
             }
         } else {
             return `List is empty !!`;
         }
     }

     get reverse() {
         let temp = this.head;
         (function _(node) {
            if(!node) return;
            _(node.next);
            console.log(node.val);
         })(temp)
     }

     insert(val, position) {
         const newNode = new Node(val);
         if(position < 0 || position > this.length) return 'Invalid position';
         if(!this.head) {
             this.head = newNode;
             this.tail = this.head;
         } else {
             let prevNode = this.index(position -1);
             let temp = prevNode.next;
             prevNode.next = newNode;
             newNode.next = temp;
         }
         this.length++;
         return this;
     }

    index(position) {
        if(position < 0 || position > this.length)  return 'invalid position !!';
        let counter = 0;
        let current = this.head;
        while(counter !== position)  {
            current = current.next;
            counter++;
        }
        return current;
    }
 }

 const node = new LinkedList();

 let array = Array.from({ length : 10}, (a, b) => b + 1);
 console.log(array);
 for(let value of array) {
     node.push(value);
 }

node.print;

console.log('reverse the list -- \n')

node.reverse;

// console.log(node.insert('I am a new Entry', 4));

// node.print;
