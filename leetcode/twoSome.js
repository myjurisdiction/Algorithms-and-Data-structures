/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSumII = function (nums, target) {
    let i = 0;
    j = nums.length - 1;
    while (i < j) {
      const total = nums[i] + nums[j];
      if (total > target) {
        j--;
      } else if (total < target) {
        i++;
      } else {
        return [i, j];
      }
    }
  
    return [];
  };