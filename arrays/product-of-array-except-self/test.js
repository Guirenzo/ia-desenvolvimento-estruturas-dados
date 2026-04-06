const assert = require("assert");
const productExceptSelf = require("./solution");

assert.deepStrictEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
assert.deepStrictEqual(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
assert.deepStrictEqual(productExceptSelf([2, 3]), [3, 2]);

console.log("product-of-array-except-self: todos os testes passaram");
