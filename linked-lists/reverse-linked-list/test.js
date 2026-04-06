const assert = require("assert");
const reverseList = require("./solution");
const { arrayToLinkedList, linkedListToArray } = require("../../shared/linkedList");

assert.deepStrictEqual(
  linkedListToArray(reverseList(arrayToLinkedList([1, 2, 3, 4, 5]))),
  [5, 4, 3, 2, 1]
);

assert.deepStrictEqual(
  linkedListToArray(reverseList(arrayToLinkedList([1, 2]))),
  [2, 1]
);

assert.deepStrictEqual(
  linkedListToArray(reverseList(arrayToLinkedList([]))),
  []
);

console.log("reverse-linked-list: todos os testes passaram");
