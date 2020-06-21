/**
 * Analysis on Insertion Sort.
 * TIME COMPLEXITY -> BEST CASE: O(n) -> (when we have nearly sorted data), WORST CASE: O(n power 2), SPACE COMPLEXITY: O(1)
 *                                                                                          i
 * step1 : we loop through the entire array but we start the loopCounter = array[1]; -> [9, 2, 5, 6];
 * step2 : we take a variable where we store the current value -> c = a[i], c = 2 (according to the above example)
 * step3 : we take a second loop and set loopCounter j = i - 1; j >= 0 && c < a[j]; j--.
 * step4 : if step 3 passes we do this ->  a[j + 1] = a[j]; -> [9, 9 , 5 ,6] and the value of j outside the inner loop is j = -1;
 * a[j + 1] = c;
 * return array;
 *     i
 * [9,2,5,6]
 *  j
 * [9,9,5,6] -> [2,9,5,6]
 *      i
 * [2,9,5,6], c = 5;
 * [2, 9, 9, 6] =>  2 < 5 < 9 -> a[j + 1] = a[0 + 1] = c = 5 => [2,5,9,6];
 * 
 *        i
 * [2,5,9,6], c = 6
 * [2,5,9, 9] => [2,5,6,9]
 */

const sampleArrayObject = require("./sampleArrays");


const insertionSort = (array) => {
  let currentValue, j;
  for (let i = 1; i < array.length; i++) {
    currentValue = array[i];
    for (j = i - 1; j >= 0 && currentValue < array[j]; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
};

console.log(sampleArrayObject.a1);
console.log(insertionSort(sampleArrayObject.a1));
