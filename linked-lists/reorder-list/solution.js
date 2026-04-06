function reorderList(head) {
  if (!head || !head.next) {
    return head;
  }

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = slow.next;
  slow.next = null;

  let previous = null;
  let current = secondHalf;

  while (current) {
    const nextNode = current.next;
    current.next = previous;
    previous = current;
    current = nextNode;
  }

  secondHalf = previous;
  let firstHalf = head;

  while (secondHalf) {
    const firstNext = firstHalf.next;
    const secondNext = secondHalf.next;

    firstHalf.next = secondHalf;
    secondHalf.next = firstNext;

    firstHalf = firstNext;
    secondHalf = secondNext;
  }

  return head;
}

module.exports = reorderList;
