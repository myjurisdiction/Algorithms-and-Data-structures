/**
 * @param {string} s
 * @return {number}
 *
 * abcabcbb
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }

  const uniqueStr = new Set();
  let left = 0,
    right = 0,
    maxLen = 0;

  for (right; right < s.length; right++) {
    if (!uniqueStr.has(s[right])) {
      uniqueStr.add(s[right]);
      maxLen = Math.max(maxLen, right - left + 1);
    } else {
      while (uniqueStr.has(s[right])) {
        uniqueStr.delete(s[left]);
        left++;
      }
      uniqueStr.add(s[right]);
    }
  }
  return maxLen;
};
