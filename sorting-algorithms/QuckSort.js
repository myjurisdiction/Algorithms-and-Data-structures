/**
 * Quick Sort
 *
 * The algorithm states
 *
 * 1. Find any element from the array and make it the pivot.
 * 2. Do partitioning, i.e, position all the elements which are lesser than the pivot to LEFT and greater elements to the RIGHT.
 * 3. Make base case as : if (arr.length < 2) return arr;
 *
 * [4,6,2,1,8] -> if pivot = 4 -> [1,2,4, 6,8]
 *
 */

// So this is the partition algorithm
function partitioning(arr) {
  let pivot = arr[0];
  let swapIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[swapIndex], arr[0]] = [arr[0], arr[swapIndex]];

  return swapIndex;
}

const SAMPLE_ARR = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 59)
);

console.log(`Sample Arr`, SAMPLE_ARR);

// const r = partitioning(SAMPLE_ARR);

// console.log(`Result`, r);

function partitioning(arr) {
  let pivot = arr[0];
  let swapIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[swapIndex], arr[0]] = [arr[0], arr[swapIndex]];

  return swapIndex;
}

function QuickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivotIndex = partitioning(arr);
  // all elements less than pivot
  const leftArr = QuickSort(arr.slice(0, pivotIndex));
  // all elements greater than pivot
  const rightArr = QuickSort(arr.slice(pivotIndex + 1));

  return leftArr.concat(arr[pivotIndex], rightArr);
}

console.log(`Sorting using Quick-Sort`, QuickSort(SAMPLE_ARR));
