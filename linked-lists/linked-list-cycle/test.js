const assert = require("assert");
const hasCycle = require("./solution");
const { arrayToLinkedList, createCycle } = require("../../shared/linkedList");

const listWithCycle = createCycle(arrayToLinkedList([3, 2, 0, -4]), 1);
const listWithoutCycle = arrayToLinkedList([1, 2, 3, 4]);
const singleWithoutCycle = arrayToLinkedList([1]);

assert.strictEqual(hasCycle(listWithCycle), true);
assert.strictEqual(hasCycle(listWithoutCycle), false);
assert.strictEqual(hasCycle(singleWithoutCycle), false);

console.log("linked-list-cycle: todos os testes passaram");
