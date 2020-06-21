const sampleArrayObject = require("./sampleArrays");

/**
 * TIME COMPLEXITY -> BEST CASE: O(n power 2) -> (when we have nearly sorted data), WORST CASE: O(n power 2), SPACE COMPLEXITY: O(1)
 * 
 * 
 * How this algorithm works;
 *
 *  i = 0
 * [9, 2, 6, 5]  -> minIndex = i;
 *     j = 1
 * if(array[minIndex] > array[j]) -> minIndex = j;
 *
 * 9, 2  -> minIndex = 1
 * 2, 6  -> minIndex=  1
 * 2, 5 -> minIndex = 1
 *
 * when the inner loop completes we swipe.
 * at this point minIndex = 1, and i = 0;
 * [array[minIndex], array[i]] = [array[i], array[minIndex]]
 * 
 */

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
};

console.log(selectionSort(sampleArrayObject.a3));
