const assert = require("assert");
const addTwoNumbers = require("./solution");
const { arrayToLinkedList, linkedListToArray } = require("../../shared/linkedList");

assert.deepStrictEqual(
  linkedListToArray(addTwoNumbers(arrayToLinkedList([2, 4, 3]), arrayToLinkedList([5, 6, 4]))),
  [7, 0, 8]
);

assert.deepStrictEqual(
  linkedListToArray(addTwoNumbers(arrayToLinkedList([0]), arrayToLinkedList([0]))),
  [0]
);

assert.deepStrictEqual(
  linkedListToArray(
    addTwoNumbers(arrayToLinkedList([9, 9, 9, 9, 9, 9, 9]), arrayToLinkedList([9, 9, 9, 9]))
  ),
  [8, 9, 9, 9, 0, 0, 0, 1]
);

console.log("add-two-numbers: todos os testes passaram");
