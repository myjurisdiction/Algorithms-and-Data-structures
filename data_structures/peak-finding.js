/** Let's start with one dimensional peak finding. */

const array = [1, 3, 20, 4, 1, 0];

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

// console.log(one_dimensional_peak_finding(array));

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

// console.log(binarySearch(array, 20));

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

// console.log(recursive_binary_search(array, 0, array.length - 1, 20));

// Now implementing the above for peak finding using binary search algoritmn

// console.log(array);
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
// console.log(oneDimensionPeak(array, 0, array.length - 1));

// finding peak in a 2d matrix

const get_2D_matrix = (row, col) => {
  let matrix = new Array();
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array();
    for (let j = 0; j < col; j++) {
      matrix[i][j] = Math.ceil(Math.random() * 100);
    }
  }

  return matrix;
};

const matrix = get_2D_matrix(5, 5);

/**
 * Algorithmic steps
 *
 * 1. pick middle column, j = m/2 where m = size of column of the 2d matrix
 *
 * 2.  find global max on the cloumn j at (i, j)
 *
 * 3. compare, (i, j -1), (i, j), (i, j + 1)
 *
 * 4. pick left columns, if (i, j - 1) > (i, j) or pick right columns if (i, j + 1) > ()
 *
 * 5. if (i, j) >= (i, j - 1), (i, j + 1) => (i, j)
 *
 * 6. (base case) when you have a single column find the global max.
 */

function _main(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const mid = Math.floor(cols / 2);
  return find_2d_peak(matrix, rows, cols, mid);
}

// I will be recursing this function
function find_2d_peak(matrix, rows, cols, mid) {
  const { max, max_index } = findMaxIndex(matrix, rows, mid);
  // base case
  if (mid === 0 || mid === cols - 1)
    return { peak: max, at_row: max_index, at_column: mid };
  // if max is really a peak return max after comparing it with the nearby elements
  else if (
    max >= matrix[max_index][mid - 1] &&
    max >= matrix[max_index][mid + 1]
  )
    return { peak: max, at_row: max_index, at_column: mid };
  // if max -> (i, j) < (i, j - 1);
  else if (max < matrix[max_index][mid - 1]) {
    mid -= Math.floor(mid / 2);
    return find_2d_peak(matrix, rows, cols, mid);
  }
  // if max -> (i , j) < (i, j + 1)
  else {
    mid += Math.floor(mid / 2);
    return find_2d_peak(matrix, rows, cols, mid);
  }
}

function findMaxIndex(matrix, rows, mid) {
  let max_index = 0;
  let max = 0;
  for (let i = 0; i < rows; i++) {
    if (max < matrix[i][mid]) {
      max = matrix[i][mid];
      max_index = i;
    }
  }
  return {
    max,
    max_index,
  };
}

console.log(matrix);
console.log(_main(matrix));
