/**
 * Created By ChrisWen
 *  插入排序
 */
function insert(nums) {
  let j = 0;
  let temp = 0;
  for (let i = 1; i < nums.length; i += 1) {
    j = i;
    temp = nums[i];
    while (j > 0 && nums[j - 1] > temp) {
      nums[j] = nums[j - 1];
      j -= 1;
    }
    nums[j] = temp;
  }
}

module.exports = insert;
