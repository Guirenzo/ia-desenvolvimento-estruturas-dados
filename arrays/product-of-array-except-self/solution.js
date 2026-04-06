function productExceptSelf(nums) {
  const result = new Array(nums.length).fill(1);

  let prefixProduct = 1;
  for (let index = 0; index < nums.length; index++) {
    result[index] = prefixProduct;
    prefixProduct *= nums[index];
  }

  let suffixProduct = 1;
  for (let index = nums.length - 1; index >= 0; index--) {
    result[index] *= suffixProduct;
    suffixProduct *= nums[index];
  }

  return result.map((value) => (Object.is(value, -0) ? 0 : value));
}

module.exports = productExceptSelf;
