/**
 * @param {number[]} height
 * @return {number}
 */

// [1,8,6,2,5,4,8,3,7]

// this is a bruteforece solution
var maxArea = function (height) {
  let maxArea = -Infinity;
  const len = height.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const minHeight = Math.min(height[i], height[j]);
      const distance = j - i;
      const currentArea = minHeight * distance;
      maxArea = Math.max(currentArea, maxArea);
    }
  }

  return maxArea;
};

function maxAreaMoreEfficient(height) {
  // can use two pointer
  let maxArea = 0;
  let i = 0,
    j = height.length - 1;

  while (i < j) {
    const minHeight = Math.min(height[i], height[j]);
    const distance = j - i;
    const currentArea = minHeight * distance;
    maxArea = Math.max(currentArea, maxArea);
    // decision to make which pointer to move
    // we should stick to the taller height because there is a possibility that it might give us more area to hold water
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }

  return maxArea;
}
