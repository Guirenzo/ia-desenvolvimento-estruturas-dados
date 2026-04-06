function threeSum(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const result = [];

  for (let index = 0; index < sorted.length - 2; index++) {
    if (index > 0 && sorted[index] === sorted[index - 1]) {
      continue;
    }

    let left = index + 1;
    let right = sorted.length - 1;

    while (left < right) {
      const total = sorted[index] + sorted[left] + sorted[right];

      if (total === 0) {
        result.push([sorted[index], sorted[left], sorted[right]]);
        left++;
        right--;

        while (left < right && sorted[left] === sorted[left - 1]) {
          left++;
        }

        while (left < right && sorted[right] === sorted[right + 1]) {
          right--;
        }
      } else if (total < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

module.exports = threeSum;
