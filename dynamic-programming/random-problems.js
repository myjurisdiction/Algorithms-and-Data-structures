"use strict";

function Clerk() {
  this.denominations = {
    25: 0,
    50: 0,
    100: 0,
  };

  this.validateDenomination = function (el) {
    this.denominations[el] += 1;

    switch (el) {
      case 25:
        return true;
      case 50:
        this.denominations[25]--;
        break;
      case 100:
        this.denominations[50]
          ? this.denominations[50]--
          : (this.denominations[25] -= 2);
        this.denominations[25]--;
        break;
    }
    return this.denominations[25] >= 0;
  };
}

function tickets(peopleInLine) {
  const vasya = new Clerk();
  return peopleInLine.every(vasya.validateDenomination.bind(vasya))
    ? "YES"
    : "NO";
}

// console.log(tickets([25, 25, 100]));

function expression(number, operation) {
  return !operation ? number : operation(number);
}

function six(operation) {
  return expression(6, operation);
}

function two(operation) {
  return expression(2, operation);
}

function plus(x) {
  return function (y) {
    return y + x;
  };
}

function dividedBy(x) {
  return function (y) {
    return y / x;
  };
}

// six(dividedBy(two()));

function decimalToBinary(number) {
  const array = new Array();
  for (let i = 0; number > 0; i++) {
    array[i] = number % 2;
    number = Math.floor(number / 2);
  }
  return array.reverse().join("");
}

// console.log(decimalToBinary(1234));

function countBits(n) {
  const bits = decimalToBinary(n);
  let count = 0;
  for (let i of bits) {
    if (i === "1") {
      count++;
    }
  }
  return count;
}

// *** THIS is a very clever solution
const countBits_V2 = (n) => n.toString(2).split("0").join("").length;

// console.log(countBits_V2(1234));

// ***  Important Proplem -> Valid Braces
function validBraces(braces) {
  const symbols = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = new Array();

  for (let p of braces) {
    if (p === "(" || p === "{" || p === "[") stack.push(p);
    else {
      let last = stack.pop();
      if (p !== symbols[last]) return false;
    }
  }
  return stack.length ? false : true;
}

console.log(validBraces("[(){}]"));
