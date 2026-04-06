function isValid(s) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      continue;
    }

    const top = stack.pop();

    if (top !== pairs[char]) {
      return false;
    }
  }

  return stack.length === 0;
}

module.exports = isValid;
