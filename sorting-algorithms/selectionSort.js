const SAMPLE_ARR = Array.from({ length: 20 }, () =>
  Math.floor(Math.random() * 1000)
);

console.log(`Sample Array`, SAMPLE_ARR);

function SelectionSort(arr, type) {
  // Its an in-place sorting algortihm
  if (type === "ASC") {
    sortInAscOrder();
  } else {
    sortInDesc();
  }

  function sortInAscOrder() {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      // find the minimum index by compaing with other elements in the array
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      // once found then swap the i with the minIndex
      if (i !== minIndex) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  }

  function sortInDesc() {
    for (let i = 0; i < arr.length; i++) {
      let maxIndex = i;
      // find the maximum index by comparing with other elements in the array
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[maxIndex]) {
          maxIndex = j;
        }
      }

      // once found then swap the i with the maxIndex
      if (i !== maxIndex) {
        [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
      }
    }
  }

  return arr;
}

const result = SelectionSort(SAMPLE_ARR);

console.log(`Result :`, result);
