/**
 * Created By ChrisWen
 *  快速排序
 *  复杂度 O(nlogⁿ)
 */

function partition(nums, left, right) {
  const pivot = nums[Math.floor((right + left) / 2)];
  let i = left; // 左指针
  let j = right;// 右指针

  while (i <= j) {
    while (nums[i] < pivot) {
      i += 1;
    }
    while (nums[j] > pivot) {
      j -= 1;
    }
    if (i <= j) {
      const aux = nums[i];
      nums[i] = nums[j];
      nums[j] = aux;
    }
  }
}

function quickSort(nums, left, right) {
  let index = 0;
  if (nums.length > 1) {
    index = partition(nums, left, right);
    if (left < index - 1) {
      quickSort(nums, left, index - 1);
    }
    if (index < right) {
      quickSort(nums, index, right);
    }
  }
}


function quick(nums) {
  return quickSort(nums, 0, nums.length - 1);
}

module.exports = quick;
