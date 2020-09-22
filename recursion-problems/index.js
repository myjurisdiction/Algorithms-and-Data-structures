const fibonacci = (number) => {
  if (number < 2) return number;
  return fibonacci(number - 1) + fibonacci(number - 2);
};

console.log(fibonacci(10));

const power = (base, exp) => {
  if (exp <= 1) return base;
  return base * power(base, exp - 1);
};

console.log(power(2, 5));

const factorial = (number) => {
  if (number === 0) return 1;
  return number * factorial(number - 1);
};

console.log(factorial(5));

const productOfArray = (array) => {
  if (!array.length) return 1;
  return array[0] * productOfArray(array.slice(1));
};

console.log(productOfArray([1, 2, 3, 4]));

const recursiveRange = (number) => {
  if (number < 0) return 0;
  return number + recursiveRange(number - 1);
};

console.log(recursiveRange(10));

const reverse_string = (str) => {
  if (str.length === 1) return str;
  return reverse_string(str.slice(1)) + str[0];
};

console.log(reverse_string("This is amazing !!"));

const isPalindrome = (str) => {
  let reverse = reverse_string(str);
  if (str === reverse) return true;
  return false;
};

console.log(isPalindrome("hannah"));

const isPalindrome_v2 = (str) => {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.substr(-1)) return isPalindrome_v2(str.slice(1, -1));
  return false;
};

console.log(isPalindrome_v2("hannah"));

const array = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]];

const flatten = (array) => {
  let newArray = [];
  for (let value of array) {
    if (Array.isArray(value)) {
      newArray = newArray.concat(flatten(value));
    } else {
      newArray.push(value);
    }
  }

  return newArray;
};

console.log(flatten(array));

const flatten_v2 = (array) => {
  const newArray = array.reduce((a, c) => {
    if (Array.isArray(c)) a.push(...flatten_v2(c));
    else a.push(c);
    return a;
  }, []);

  return newArray;
};

console.log(flatten_v2(array));

// fibonacci cache

function fib_cache(num, array = [0, 1, 1]) {
  if (array[num]) return array[num];
  let sum = fib_cache(num - 1, array) + fib_cache(num - 2, array);
  array[num] = sum;
  return sum;
}

console.log(fib_cache(5));

// bottom up approach

function iterative_fib(num) {
  let prev_1 = 0,
    prev_2 = 1,
    sum,
    container = [0];
  for (let i = 2; i <= num; i++) {
    sum = prev_1 + prev_2;
    prev_1 = prev_2;
    prev_2 = sum;
    container.push(prev_1);
  }

  return { container, prev_2 };
}

console.log(iterative_fib(10));

var a = {
  a: {
    b: {
      c: {
        d: {
          e: {
            f: {
              g: {
                h: {
                  g: 100,
                },
              },
            },
          },
        },
      },
    },
  },
};

// output = {"a.b.c" : 1}

function objectChaining(obj) {
  let str = "",
    value = 0;

  function _(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        str += key + ".";
        _(obj[key]);
      } else {
        str += key;
        value = obj[key];
      }
    }
  }

  _(obj);

  return { str, value };
}

console.dir(objectChaining(a));

function isPalindrom(s) {
  if (s.length === 1 || s[0] === s[1]) return true;
  if (s[0] === s.substr(-1)) return isPalindrom(s.slice(1, -1));
  return false;
}

console.log(isPalindrom("tacocat"));

const sampleObj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

function collectStrings(obj, array = []) {
  for (let key in obj) {
    if (typeof obj[key] === "string") array.push(obj[key]);
    else if (typeof obj[key] === "object") {
      collectStrings(obj[key], array);
    }
  }

  return array;
}

console.log(collectStrings(sampleObj));
