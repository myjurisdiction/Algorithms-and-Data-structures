/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const container = [];
  let left = 0,
    right = 0,
    str = "";

  function formValidParenthesis(n, left, right, str) {
    if (left === n && right === n) {
      container.push(str);
      return;
    }

    if (left < n) {
      formValidParenthesis(n, left + 1, right, str + "(");
    }

    if (right < left) {
      formValidParenthesis(n, left, right + 1, str + ")");
    }
  }

  formValidParenthesis(n, left, right, str);
  return container;
};
