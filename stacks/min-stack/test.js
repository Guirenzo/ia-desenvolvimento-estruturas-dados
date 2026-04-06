const assert = require("assert");
const MinStack = require("./solution");

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);

assert.strictEqual(minStack.getMin(), -3);

minStack.pop();
assert.strictEqual(minStack.top(), 0);
assert.strictEqual(minStack.getMin(), -2);

minStack.push(-5);
assert.strictEqual(minStack.getMin(), -5);

console.log("min-stack: todos os testes passaram");
