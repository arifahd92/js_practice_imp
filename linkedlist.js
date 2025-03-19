// Node class: Represents an individual node in the linked list
class Node {
  constructor(data) {
    this.data = data; // The data stored in the node
    this.next = null; // Pointer to the next node (null by default)
  }
}

// LinkedList class: Represents the linked list
class LinkedList {
  constructor() {
    this.head = null; // Head (first node) of the linked list, head will store an object  type of Node class
  }
  //imp: inside this class'method this means linkedList,
  //imp linkedList is an object having two keys head and size
  //imp head is an object having two keys data and next, head is type of Node object
  // Add a node at the end of the linked list
  append(data) {
    if (typeof data != "number") {
      throw new Error("data should be number  ");
    }
    const newNode = new Node(data);
    this.size++;
    if (this.head === null) {
      this.head = newNode; // to head i assigned newNode that is object so head will be object containing data and next key
    } else {
      let temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  // Add a node at the beginning of the linked list
  prepend(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Remove a node by value
  remove(data) {
    let temp = this.head;
    while (temp.next && temp.next.data !== data) {
      temp = temp.next;
    }
    if (temp.next == null) {
      console.log("data not found in linked list");
    } else {
      temp.next = temp.next.next;
    }
  }
  removeFirst() {
    if (!this.head) {
      console.log(`linkedList is empty`);
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (this.head == null || this.head.next === null) {
      this.head = null;
      return;
    }
    let temp = this.head;
    while (temp.next.next) {
      temp = temp.next;
    }
    temp.next = null;
  }
  getSize() {
    let count = 0;
    if (!this.head) {
      return count;
    }
    let temp = this.head;
    while (temp) {
      count += 1;
      temp = temp.next;
    }
    return count;
  }
  removeNthFromLast(n) {
    const size = this.getSize();
    const last = size - n;
    console.log(last, "last");
    let temp = this.head;
    let count = 1;
    while (count < last) {
      temp = temp.next;
      count++;
    }
    console.log(temp);
    temp.next = temp.next.next;
  }
  reverse() {
    /*
  1- current ka next prev ko point karega, but here the problem will be that current ke aage ke sabhi node ka ref miss hop jayega aur sab wo garbage collect ho jayenge 
  so first store them in next by doing next = current.next , now next of current are safe 
  current.next = prev
  current successfully prev ko point kar raha (iska kaam ho gaya)
  ab current ke aage ke node ko current pe point karaana hai, with same concept 
  concept jisko modna hai use current banao jaha pe mod kare point karana hai use prev banao 
  pahle prev ko update karo current now current ko current ka next (old next not new next)

  prev = current 
  current = next

  */
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(`${temp.data}=>`);
      temp = temp.next;
    }
  }

  isEmpty() {
    return this.size === 0;
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.prepend(5);
linkedList.printList(); // Output: 5 -> 10 -> 20
linkedList.remove(60);
// linkedList.removeFirst();
// linkedList.removeLast();
linkedList.removeNthFromLast(2);
linkedList.printList(); // Output: 5 -> 20
console.dir(linkedList.getSize()); // Output: 2

const linkedListView = {
  head: {
    data: 10,
    next: {
      data: 20,
      next: {
        data: 30,
        next: {
          data: 40,
          next: null,
        },
      },
    },
  },
  size: 4,
};
linkedListView.head = linkedListView.head.next; // successfully discarded fist node
