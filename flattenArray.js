let input = [1, 2, 3, [4, 5, [6, 7, [8], 9], 10, [12,[13,[14,[15,[16,[17,[18]]]]]]]], 11];

function flattenArray(a, res = []) {
  for (let item of a) {
    if (Array.isArray(item)) {
      flattenArray(item, res);
    } else {
      res.push(item);
    }
  }

  return res;
}

const res = flattenArray(input);

console.log(res);
