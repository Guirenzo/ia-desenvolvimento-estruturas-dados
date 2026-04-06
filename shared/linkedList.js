class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrayToLinkedList(values) {
  const dummy = new ListNode(0);
  let current = dummy;

  for (const value of values) {
    current.next = new ListNode(value);
    current = current.next;
  }

  return dummy.next;
}

function linkedListToArray(head, maxNodes = 100) {
  const result = [];
  let current = head;
  let count = 0;

  while (current && count < maxNodes) {
    result.push(current.val);
    current = current.next;
    count++;
  }

  return result;
}

function createCycle(head, position) {
  if (!head || position < 0) {
    return head;
  }

  let current = head;
  let cycleNode = null;
  let tail = null;
  let index = 0;

  while (current) {
    if (index === position) {
      cycleNode = current;
    }

    tail = current;
    current = current.next;
    index++;
  }

  if (tail) {
    tail.next = cycleNode;
  }

  return head;
}

module.exports = {
  ListNode,
  arrayToLinkedList,
  linkedListToArray,
  createCycle,
};
