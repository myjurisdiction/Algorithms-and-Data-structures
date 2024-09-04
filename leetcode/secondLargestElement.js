/**
 * Goal is to find the seond largest number
 * nums can have duplicate elements
 * var arr = [99, 1, 99, 5,1,67,4,4,68, 3]
 *
 */

const secondLargestElement = (nums) => {
  const max = Math.max.apply(null, nums);
  let secondMax = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < max && nums[i] > secondMax) {
      secondMax = nums[i];
    }
  }

  return { max, secondMax };
};
