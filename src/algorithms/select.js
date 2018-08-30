/**
 * Created By ChrisWen
 *  选择排序
 *  时间复杂度O(n²)
 */

function select(nums) {
  let minIndex = 0;
  for (let i = 0; i < nums.length - 1; i += 1) {
    minIndex = i;
    for (let j = i; j < nums.length; j += 1) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      const aux = minIndex;
      minIndex = i;
      i = aux;
    }
  }
}

module.exports = select;
