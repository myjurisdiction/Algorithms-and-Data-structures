
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let minLength = Infinity;
  
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j <= nums.length; j++) {
        let len = 0,
          currentSum = 0;
        for (let k = i; k < j; k++) {
          currentSum += nums[k];
          len++;
        }
  
        if (currentSum >= target) {
          minLength = Math.min(len, minLength);
          break;
        }
      }
    }
  
    return minLength === Infinity ? 0 : minLength;
  };
  
  var minSubArrayLen_slidingWindow_approach = function (target, nums) {
    let left = 0,
      right = 0,
      minLength = Infinity,
      currentSum = 0;
  
    while (left < nums.length) {
      if (currentSum >= target) {
        minLength = Math.min(minLength, right - left);
        currentSum -= nums[left++];
      } else if (right < nums.length) {
        currentSum += nums[right++];
      } else {
        currentSum -= nums[left++];
      }
    }
  
    return minLength === Infinity ? 0 : minLength;
  };