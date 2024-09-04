/**
 * 
 * @param {array} sortedA 
 * @param {integer} number 
 * @returns integer
 * 
 * 
 * Time complexity for Binary Search log n (base is 2)
 */

function BinarySearch(sortedA, number) {
  let start = 0;
  let end = sortedA.length - 1;
  function search(sortedA, number, start, end) {
    // perform  the main logic here
    if (start <= end) {
      // ensures that the middle index is correctly calculated by adjusting for the start index
      const middle = Math.floor(start + (end - start) / 2);
      if (sortedA[middle] === number) {
        // item found in the array
        return middle;
      }

      if (number < sortedA[middle]) {
        // ensures that the function correctly returns the index of the found element.
        return search(sortedA, number, start, middle - 1);
      }
      //   ensures that the function correctly returns the index of the found element.
      return search(sortedA, number, middle + 1, end);
    }

    // when item does not exist in the array
    return null;
  }

  return search(sortedA, number, start, end);
}

const sampleArry = Array.from({ length: 100 }, (a, b) => b + 1);

const result = BinarySearch(sampleArry, 37);

console.log(`result`, result);
