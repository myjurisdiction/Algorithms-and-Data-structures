function binarySearch(array, searchElement) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (array[middle] !== searchElement && start <= end) {
    if (searchElement < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
  }
  return array[middle] === searchElement ? "Found !!" : "Not found";
}

const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

console.log("Here is the input array : ", array);

console.log(binarySearch(array, 30));

// A recursive solution

function recursive_binary_search(array, start, end, value) {
  if (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === value) return middle;
    else if (value < array[middle])
      return recursive_binary_search(array, start, middle - 1, value);
    else return recursive_binary_search(array, middle + 1, end, value);
  } else return "Not found !!";
}

console.log(recursive_binary_search(array, 0, array.length - 1, 30));
