// ListNode class for singly-linked list node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// LinkedList class with various utility methods
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert a node at the head of the list
  insertAtHead(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Insert a node at the end of the list
  insertAtEnd(val) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Delete a node from the head of the list
  deleteFromHead() {
    if (!this.head) return null;
    const val = this.head.val;
    this.head = this.head.next;
    this.size--;
    return val;
  }

  // Delete a node from the end of the list
  deleteFromEnd() {
    if (!this.head) return null;
    if (!this.head.next) {
      const val = this.head.val;
      this.head = null;
      this.size--;
      return val;
    }
    let current = this.head;
    let previous;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    const val = current.val;
    previous.next = null;
    this.size--;
    return val;
  }

  // Search for a value in the list
  find(val) {
    let current = this.head;
    while (current) {
      if (current.val === val) return true;
      current = current.next;
    }
    return false;
  }

  // Populate the linked list from an array of values
  static fromArray(arr) {
    const list = new LinkedList();
    arr.forEach((val) => list.insertAtEnd(val));
    return list;
  }

  // Convert the linked list to an array of values
  toArray() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.val);
      current = current.next;
    }
    return values;
  }

  // Print the linked list (for testing and debugging)
  printList() {
    console.log(this.toArray().join(' -> '));
  }
}

module.exports = { ListNode, LinkedList };
