/** Working with Quick Sort */

const getPivotIndex = (a, s, e) => {
  let p = a[s];
  let swapIdx = s;
  for (let i = s + 1; i <= e; i++) {
    if (p > a[i]) {
      swapIdx += 1;
      [a[swapIdx], a[i]] = [a[i], a[swapIdx]];
    }
  }
  [a[swapIdx], a[s]] = [a[s], a[swapIdx]];
  return swapIdx;
};

const quickSort = (a, l = 0, r = a.length - 1) => {
  if (l < r) {
    let pivotIndex = getPivotIndex(a, l, r);
    quickSort(a, l, pivotIndex - 1); // recursive call to sort the left side
    quickSort(a, pivotIndex + 1, r); // recursive call to solve the right side
  }
  return a;
};

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));
