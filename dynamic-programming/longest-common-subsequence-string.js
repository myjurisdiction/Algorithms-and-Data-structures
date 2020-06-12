/**
 * Q ->  You are given 2 strings. Return the length of the longest subsequence that the 2 strings share
 */

const str1 = "AGGTAB";
const str2 = "GXTXAYB";

// using brute-force

/**
 *
 * @param {*string} s1
 * @param {*string} s2
 * @param {*integer} i
 * @param {*integer} j
 *
 * s1, and s2 are constants in the argument passed to LCS_bruteforce function as they represent the string we will be passing
 * i, and j points to the last character in the strings respectively.
 */

const LCS_bruteForce = (s1, s2, i, j) => {
  if (i === 0 || j === 0) return 0;
  if (s1[i - 1] === s2[j - 1]) return 1 + LCS_bruteForce(s1, s2, i - 1, j - 1);
  else
    return Math.max(
      LCS_bruteForce(s1, s2, i, j - 1),
      LCS_bruteForce(s1, s2, i - 1, j)
    );
};
console.log(
  `Via brute-force algorithm -> `,
  LCS_bruteForce(str1, str2, str1.length, str2.length)
);

// The complexity of the above algorithm is O(2 power n). Which is pretty bad if i have a string which is a thousand characters long. Let's improve it further with the help of dynamic programming.

/**
 *
 * @param {string} s1
 * @param {*string} s2
 * @param {*int} i
 * @param {*int} j
 * @param {*array} cache
 *
 * This algorithm to calculate the longest subsequence between two string is much better in terms of time complexity  O( i * j). Here i and j are lengths of string respectively.
 * This is an example of memoization.
 */

const LCS_cache = (s1, s2, i, j, cache) => {
  if (i === 0 || j === 0) return 0;
  if (cache[i - 1][j - 1] !== -1) return cache[i - 1][j - 1];
  else if (s1[i - 1] === s2[j - 1]) {
    cache[i - 1][j - 1] = 1 + LCS_cache(s1, s2, i - 1, j - 1, cache);
    return cache[i - 1][j - 1];
  } else {
    cache[i - 1][j - 1] = Math.max(
      LCS_cache(s1, s2, i, j - 1, cache),
      LCS_cache(s1, s2, i - 1, j, cache)
    );
    return cache[i - 1][j - 1];
  }
};

const stringMatrix = (row, column, type) => {
  let matrix = new Array();
  for (let i = 0; i <= row; i++) {
    matrix[i] = new Array(column + 1);
    for (let j = 0; j <= column; j++) {
      switch (type) {
        case "negative":
          matrix[i][j] = -1;
          break;
        case "zero":
          matrix[i][j] = 0;
          break;
      }
    }
  }
  return matrix;
};

const cache = [...stringMatrix(str1.length, 1000, "negative")];
console.log(
  `This is via Memoization -> `,
  LCS_cache(str1, str2, str1.length, str2.length, cache)
);

const LCS_tabular = (s1, s2) => {
  let m = s1.length;
  let n = s2.length;
  const lookupTable = [...stringMatrix(m, n, "zero")];

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (!i || !j) lookupTable[i][j] = 0;
      else if (s1[i - 1] === s2[j - 1])
        lookupTable[i][j] = 1 + lookupTable[i - 1][j - 1];
      else
        lookupTable[i][j] = Math.max(
          lookupTable[i][j - 1],
          lookupTable[i - 1][j]
        );
    }
  }
  return lookupTable[m][n];
};

console.log(`This is via Tabular method -> `, LCS_tabular(str1, str2));

// recursive way for palindrome
const palindrome_recursive = (string) => {
  if (string.length <= 1) return true;
  if (string.length === 2) return string[0] === string[1];
  if (string[0] === string[string.length - 1])
    return palindrome_recursive(string.slice(1, -1));
  return false;
};

console.log("is_recursive_palindrome ", palindrome_recursive("HANNAH"));

// recursie way to reverse a string
const reverse_recursive = (string) => {
  if (!string.length) return string;
  return reverse_recursive(string.substring(1)) + string[0];
};

console.log("recursive_reverse_string ", reverse_recursive("ABC"));

/**
 *
 * @param {integer} int
 *
 * idea is that we have a number which is 123.
 *
 *  1. we take the mod of 123 which is 123 % 10 -> 3
 *  2. we store the mod in a variable which is called reverse variable -> 3
 *  3. we divide 123 / 10 and we take the floor of this number 12 and we again repeat the same process
 */

const reverse_integer = (int) => {
  let mod,
    reverse = 0;
  while (int) {
    mod = int % 10;
    reverse = 10 * reverse + mod;
    int = Math.floor(int / 10);
  }
  return reverse;
};

console.log(`reversed_integer using maths only `, reverse_integer(1234567));
