/** Let's start with one dimensional peak finding. */

console.log("One dimensional peak finding..");

const array = [1, 3, 20, 4, 1, 0];

console.log(array);

// this has a worst cae complexity of O(n)
const one_dimensional_peak_finding = (array) => {
  const peaks = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0 && array[i] >= array[i + 1]) {
      peaks.push(array[i]);
    } else if (i === array.length - 1 && array[i] >= array[i - 1]) {
      peaks.push(array[i]);
    } else if (array[i] >= array[i - 1] && array[i] >= array[i + 1]) {
      peaks.push(array[i]);
    }
  }

  return peaks;
};

console.log(one_dimensional_peak_finding(array));

//  a better approach to do a binary search algorithm (given the definition of the peak);

function binarySearch(array, searchElement) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (array[middle] !== searchElement && start < end) {
    if (searchElement < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
  }
  return array[middle] === searchElement ? "Found !!" : "Not found";
}

console.log(binarySearch(array, 20));

// now based on the above approach we can improve our one directional peak finding approach;

// using binary search algorithm

function recursive_binary_search(array, start, end, value) {
  if (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === value) return middle;
    else if (value < array[middle])
      return recursive_binary_search(array, start, middle - 1, value);
    else return recursive_binary_search(array, middle + 1, end, value);
  } else return "Not found !!";
}

console.log(recursive_binary_search(array, 0, array.length - 1, 20));

// Now implementing the above for peak finding using binary search algoritmn

console.log(array);
function oneDimensionPeak(array, start, end) {
  let middle = Math.floor((start + end) / 2);
  if (
    (middle === 0 || array[middle - 1] <= array[middle]) &&
    (middle === array.length - 1 || array[middle + 1] <= array[middle])
  )
    return array[middle];
  else if (middle > 0 && array[middle] < array[middle - 1])
    return oneDimensionPeak(array, start, middle - 1);
  else return oneDimensionPeak(array, middle + 1, end);
}
console.log(oneDimensionPeak(array, 0, array.length - 1));
