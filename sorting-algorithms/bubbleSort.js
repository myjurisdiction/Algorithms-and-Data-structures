/**
 * Analysis on bubble sort.
 * TIME COMPLEXITY -> BEST CASE: O(n) -> (when we have nearly sorted data), WORST CASE: O(n power 2), SPACE COMPLEXITY: O(1)
 */

const sampleArrayObject = require("./sampleArrays");

const basic_bubble_sort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

console.log(basic_bubble_sort(sampleArrayObject.a1));

const improved_bubble_sort = (array) => {
  let isSwap;
  for (let i = 0; i < array.length; i++) {
    isSwap = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwap = true;
      }
    }
    if(!isSwap) break;
  }
  return array;
};

console.log(improved_bubble_sort(sampleArrayObject.a2));
