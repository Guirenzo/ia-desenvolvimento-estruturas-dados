const assert = require("assert");
const dailyTemperatures = require("./solution");

assert.deepStrictEqual(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
assert.deepStrictEqual(dailyTemperatures([30, 40, 50, 60]), [1, 1, 1, 0]);
assert.deepStrictEqual(dailyTemperatures([30, 60, 90]), [1, 1, 0]);

console.log("daily-temperatures: todos os testes passaram");
