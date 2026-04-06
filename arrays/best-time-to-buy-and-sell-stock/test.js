const assert = require("assert");
const maxProfit = require("./solution");

assert.strictEqual(maxProfit([7, 1, 5, 3, 6, 4]), 5);
assert.strictEqual(maxProfit([7, 6, 4, 3, 1]), 0);
assert.strictEqual(maxProfit([2, 4, 1]), 2);

console.log("best-time-to-buy-and-sell-stock: todos os testes passaram");
