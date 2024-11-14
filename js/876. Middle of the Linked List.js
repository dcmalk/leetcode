const { ListNode, LinkedList } = require('./utils/linkedListHelpers');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const arr = [1, 2, 3, 4, 5];
const list = LinkedList.fromArray(arr);
list.printList();

// Find the middle node
const middle = middleNode(list.head);

const resultLinkedList = new LinkedList();
resultLinkedList.head = middle;
resultLinkedList.printList();
