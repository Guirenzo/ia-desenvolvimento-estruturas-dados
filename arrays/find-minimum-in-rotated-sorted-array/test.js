const assert = require("assert");
const findMin = require("./solution");

assert.strictEqual(findMin([3, 4, 5, 1, 2]), 1);
assert.strictEqual(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
assert.strictEqual(findMin([11, 13, 15, 17]), 11);

console.log("find-minimum-in-rotated-sorted-array: todos os testes passaram");
