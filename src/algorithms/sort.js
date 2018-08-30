/**
 * Created By ChrisWen
 *  冒泡排序
 *   复杂度O(n²)
 */

function sort(nums) {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length - 1 - i; j += 1) {
      if (nums[j] > nums[j + 1]) {
        const aux = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = aux;
      }
    }
  }
  return nums;
}

module.exports = sort;
