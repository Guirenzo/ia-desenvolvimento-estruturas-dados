function reverseList(head) {
  let previous = null;
  let current = head;

  while (current) {
    const nextNode = current.next;
    current.next = previous;
    previous = current;
    current = nextNode;
  }

  return previous;
}

module.exports = reverseList;
