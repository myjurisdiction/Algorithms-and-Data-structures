/**
 * @param {string} s
 * @return {boolean}
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * "()"
 * "()[]{}"
 * "(]"
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      const poppedEl = stack.pop();
      if (
        (s[i] === ")" && poppedEl !== "(") ||
        (s[i] === "}" && poppedEl !== "{") ||
        (s[i] === "]" && poppedEl !== "[")
      ) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
};
