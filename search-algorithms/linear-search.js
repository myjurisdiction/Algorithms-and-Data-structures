function Search(array) {
  this.linearSearch = function (value) {
    let first = 0;
    let last = array.length - 1;
    while (first < last) {
      if (array[first] === value) return "found !!";
      if (array[last] === value) return "found !!";
      first++;
      last--;
    }
    return "Not found !!";
  };
}

Search.prototype.binary_search = function (array, value) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (array[middle] !== value && start <= end) {
    if (value < array[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return array[middle] === value ? middle : -1;
};

Search.prototype.objectDescription = function () {
  return this;
};

const array = ["ram", "sita", "sam", "apple", "women"];
let instance = new Search(array);
console.log(instance.linearSearch("women"));

console.log(instance.binary_search(array, "women")); // binary search always work with the sorted array

console.log(instance.objectDescription());
