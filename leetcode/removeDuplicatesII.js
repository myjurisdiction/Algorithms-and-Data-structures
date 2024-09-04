/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesII = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - 2 && nums[i] === nums[i + 2]) {
      continue;
    }

    nums[j++] = nums[i];
  }

  return j;
};
