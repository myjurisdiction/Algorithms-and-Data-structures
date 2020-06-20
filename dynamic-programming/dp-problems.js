const printerString = (s) => {
  const strLength = s.length;
  let errorCount = 0;
  const colorCodeObject = {};
  for (let i = 97; i <= 109; i++) {
    colorCodeObject[String.fromCharCode(i)] = i;
  }

  for (let i of s) {
    if (!(i in colorCodeObject)) errorCount++;
  }

  console.log(errorCount);
  return errorCount / strLength;
};

console.log(
  printerString("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);

const calculateFactors = (number) => {
  const factors = [number];
  for (let i = 2; i < Math.floor(number / 2) + 1; i++) {
    if (number % i === 0) factors.push(i);
  }

  return factors;
};

// console.log(calculateFactors(20));

const GCD = (n1, n2) => {
  const n1_factors = [...calculateFactors(n1)];
  const n2_factors = [...calculateFactors(n2)];

  console.log(n1_factors);
  console.log(n2_factors);

  let greatest_common = 0;

  for (let i of n1_factors) {
    for (let j of n2_factors) {
      if (i === j && i >= greatest_common) {
        greatest_common = i;
      }
    }
  }

  return greatest_common;
};

console.log(GCD(100, 10));

// This is eculedian government.

const recursive_GCD = (a, b) => {
  return !b ? a : recursive_GCD(b, a % b);
};
console.log("GCD is ...", recursive_GCD(10, 100));

//  basic formula for LCM is -> GCD * LCM = a * b;
const LCM = (a, b) => {
  return (a * b) / recursive_GCD(a, b);
};

console.log("LCM is ....", LCM(12, 20));

/** Facebook likes function */

const names1 = ["Alex", "Jacob", "Mark", "Max"];
const names2 = ["Max", "John", "Mark"];

const likes = (names) => {
  if (names.length >= 4) {
    const names_len = names.slice(2).length;
    return `${names[0]}, ${names[1]} and ${names_len} others like this.`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this.`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this.`;
  } else {
    return `${names[0]} likes this.`;
  }
};

console.log(likes(names1));

const alphabetPosition = (string) => {
  string = string.toLowerCase();
  let result = "";
  const colorCodeObject = {};
  for (let i = 97; i <= 122; i++) {
    colorCodeObject[String.fromCharCode(i)] = i;
  }

  for (let i = 65; i <= 90; i++) {
    colorCodeObject[String.fromCharCode(i)] = i;
  }

  for (let letter of string) {
    if (letter in colorCodeObject) {
      result += " " + (letter.charCodeAt() - 96);
    }
  }

  return result;
};

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

function consFunc(name, hobby) {
  this.desc = (job) => {
    return `Hi ${name}, You like ${hobby} and you are also an ${job}`;
  };
}

// const _exec = consFunc.prototype.desc;

// consFunc.prototype.desc = function () {
//     console.log('This is called a function hijacking ....');
//     return _exec.apply(this, arguments);
// }

consFunc.prototype.greet = function (name) {
    return `Hi ${name}.`;
}

let exec = new consFunc('Spartacus', 'Dancing');
console.log(exec.desc('Engineer'));
console.log(exec.greet('spartacus'));
