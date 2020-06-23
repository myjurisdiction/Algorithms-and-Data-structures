/**
 * Ansalysis on merge sort.
 * TIME COMPLEXITY -> BEST CASE: O(n log n) -> (when we have nearly sorted data), WORST CASE: O(n log n), SPACE COMPLEXITY: O(n)
 *
 * I think this algorithm is very intitutive in itself.
 *
 *                                 [9, 2, 6, 5]
 *                                [9, 2], [6, 5]
 *                              [9], [2], [6], [5]   -> this mets the base case of the recursion  which is  that when the length of the array isc1 then the sort function will return the array.
 *
 *
 *              [9, 2, 6, 5]
 *
 *            [9, 2], [6, 5]
 *
 *          [9], [2], [6], [5]  // after this point, i will start merging and sorting the arrys
 *
 *          [2, 9] , [5, 6]
 *
 *           [2, 5, 6, 9]
 */

const sampleArrays = require("./sampleArrays");

const mergeArrays = (a1, a2) => {
  let i = 0,
    j = 0;
  let result = new Array();
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      result.push(a1[i]);
      i++;
    } else {
      result.push(a2[j]);
      j++;
    }
  }

  //  this is one way

  // if (i === a1.length) {
  //   result = result.concat(a2.slice(j));
  // } else if (j === a2.length) {
  //   result = result.concat(a1.slice(i));
  // }

  // this is the other

  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }

  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }

  return result;
};

const sort = (array) => {
  if (array.length === 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = sort(array.slice(0, mid));
  let right = sort(array.slice(mid));
  return mergeArrays(left, right);
};

console.log(mergeArrays([1, 2, 5, 8], [3, 4, 6, 7]));
// console.log(sampleArrays.a1);
// console.log(sort(sampleArrays.a1));
