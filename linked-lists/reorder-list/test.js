const assert = require("assert");
const reorderList = require("./solution");
const { arrayToLinkedList, linkedListToArray } = require("../../shared/linkedList");

assert.deepStrictEqual(
  linkedListToArray(reorderList(arrayToLinkedList([1, 2, 3, 4]))),
  [1, 4, 2, 3]
);

assert.deepStrictEqual(
  linkedListToArray(reorderList(arrayToLinkedList([1, 2, 3, 4, 5]))),
  [1, 5, 2, 4, 3]
);

assert.deepStrictEqual(
  linkedListToArray(reorderList(arrayToLinkedList([1]))),
  [1]
);

console.log("reorder-list: todos os testes passaram");
