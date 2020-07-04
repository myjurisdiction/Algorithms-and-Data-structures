// const tickets = (array) => {
//   let total = 0, change = 0, response;
//   for(let price of array) {
//     total += 25;
//     change = price -25;
//     total -= change;

//     if(total < change) response =  'NO';
//     else response = 'YES';
//   }
//   return response;
// }

// console.log(tickets([25, 25, 50, 50, 100]));

// function Clerk(name) {
//   this.name = name;

//   this.money = {
//     25 : 0,
//     50 : 0,
//     100: 0
//   };

//   this.sell = function(element, index, array) {
//     this.money[element]++;

//     switch (element) {
//       case 25:
//         return true;
//       case 50:
//         this.money[25]--;
//         break;
//       case 100:
//         this.money[50] ? this.money[50]-- : this.money[25] -= 2;
//         this.money[25]--;
//         break;
//     }
//     console.log(this.money);
//     return this.money[25] >= 0;
//   };
// }

// function tickets(peopleInLine){
//   var vasya = new Clerk("Vasya");
//   return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
// }

// console.log(tickets([25, 25, 50, 50, 100]));

function _() {
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
    console.log(this.denominations);
    return this.denominations[25] >= 0;
  };
}

function tickets(peopleInLine) {
  const vasya = new _();
  return peopleInLine.every(vasya.validateDenomination.bind(vasya))
    ? "YES"
    : "NO";
}

console.log(tickets([25, 25, 100]));

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
    console.log(y, x);
    return y / x;
  };
}

six(dividedBy(two()));

function decimalToBinary(number) {
  const array = new Array();
  for (let i = 0; number > 0; i++) {
    array[i] = number % 2;
    number = Math.floor(number / 2);
  }
  return array.reverse().join("");
}

console.log(decimalToBinary(1234));

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

console.log(countBits_V2(1234));

// ***  Important Proplem -> Valid Braces

// function validBraces(string) {
//   let symbolId = {
//     "{": "A",
//     "}": "A",
//     "(": "B",
//     ")": "B",
//     "[": "C",
//     "]": "C",
//   };
//   const stack = new Array;
//   for (let i of string) {
//     if (i === "(" || i === "{" || i === "[") {
//       stack.push(symbolId[i]);
//     } else if (i === ")" || i === "}" || i === "]") {
//       if (
//         stack.length &&
//         symbolId.hasOwnProperty(i) &&
//         stack[stack.length - 1] === symbolId[i]
//       ) {
//         stack.pop();
//       }
//     }
//   }
//   return stack.length ? false : true;
// }

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
      if(p!== symbols[last]) return false;
    }
  }
  return stack.length ? false : true;
}

console.log(validBraces("[(){}]"));

// const testSuite = {
//   1: "(){}[]",
//   2: "([{}])",
//   3: "(}",
//   4: "[(])",
//   5: "[({})](]",
// };

// const resultArray = [];
// for (let i in testSuite) {
//   console.log(validBraces.call(testSuite));
// }
