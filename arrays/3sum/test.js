const assert = require("assert");
const threeSum = require("./solution");
const { normalizeTriplets } = require("../../shared/helpers");

assert.deepStrictEqual(
  normalizeTriplets(threeSum([-1, 0, 1, 2, -1, -4])),
  normalizeTriplets([[-1, -1, 2], [-1, 0, 1]])
);

assert.deepStrictEqual(normalizeTriplets(threeSum([0, 1, 1])), []);
assert.deepStrictEqual(
  normalizeTriplets(threeSum([0, 0, 0])),
  normalizeTriplets([[0, 0, 0]])
);

console.log("3sum: todos os testes passaram");
