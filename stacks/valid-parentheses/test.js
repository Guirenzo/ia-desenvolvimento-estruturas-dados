const assert = require("assert");
const isValid = require("./solution");

assert.strictEqual(isValid("()"), true);
assert.strictEqual(isValid("()[]{}"), true);
assert.strictEqual(isValid("(]"), false);
assert.strictEqual(isValid("([)]"), false);
assert.strictEqual(isValid("{[]}"), true);

console.log("valid-parentheses: todos os testes passaram");
