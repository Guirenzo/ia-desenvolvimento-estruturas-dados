function dailyTemperatures(temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let index = 0; index < temperatures.length; index++) {
    while (
      stack.length > 0 &&
      temperatures[index] > temperatures[stack[stack.length - 1]]
    ) {
      const previousIndex = stack.pop();
      result[previousIndex] = index - previousIndex;
    }

    stack.push(index);
  }

  return result;
}

module.exports = dailyTemperatures;
