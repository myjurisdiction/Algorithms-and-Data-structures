// for (let i = 1000; i < 10000; i++) {
//   if (i % 1000 === 0) {
//     console.log(`********`, i)
//     setTimeout(() => {
//       console.log(i);
//     }, i);
//   }
// }

/**
 * const debouncedFunc = debounce(func, 100)
 *
 * now -> the debouncedFunc will execute again after the execution of its current operation with the delay of 100 ms
 */

// function debounce(func, delay) {
//   let timerId;
//   return function (...rest) {
//     if (timerId) clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       func(...rest);
//     }, delay);
//   };
// }

function printRandomNumber(i) {
  console.log(`i am ${i}`);
}

// const debouncedFunc = debounce(printRandomNumber, 500);

// for (let i = 0; i < 10000; i++) {
//   if (i % 600 === 0)
//     setTimeout(() => {
//       debouncedFunc(i);
//     }, i);
// }

/*** Throttle */

function throttle(func, delay) {
  let makeFuncCall = true;
  return function (...rest) {
    if (makeFuncCall) {
      func(...rest);
      makeFuncCall = false;
      setTimeout(() => {
        makeFuncCall = true;
      }, delay);
    }
  };
}

const throttleFunc = throttle(printRandomNumber, 500);

// for (let i = 0; i < 10000; i++) {
//   //   if (i % 600 === 0)
//   setTimeout(() => {
//     throttleFunc(i);
//   }, i);
// }

/**
 * Let's talk about promise now.
 *
 * When a promise is created, the executor function which has been passed as a param to Promise constructor executes automatically, eventusally producing the result. the callback 'resolve' & 'reject' are provided by javascipt itself and are finally called by the executor function based on the result it got after performing the underlying operation, i.e, if executor func was successfull in executing the operation it will call resolve, otherwise reject.
 */

// let promise = new Promise(function(resolve, reject) {
//     // executor (the producing code, "singer")
// })

// let promise = new Promise((resolve) => {
//   resolve(2);
// });

// // this is promise chaining, as every call to then returns a new promise so that we can use then again and again.
// promise
//   .then((r) => r * 2)
//   .then((r) => r * 2)
//   .then((r) => console.log(r));

// const greetIPromise = new Promise((resolve) => {
//   resolve("Hello world");
// });

// function f1(result) {
//   throw Error(result);
// }

// function f2(error) {
//   console.log(`Chill bro, I have handled '${error}'`);
// }

// greetIPromise.then(f1, f2); // error not handled
// greetIPromise.then(f1).catch(f2); // error handeld properly

// async before function call mean that the function will always return a promise.

function delay(name) {
  return new Promise((resolve) => {
    console.log(`second`, name);
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}

const obj = {
  func: async function (name) {
    console.log(`first`, name);
    let result = await delay(name); // await is waitng for the promise result, but the function call is not the promise, so it will just log and return the control to the globasl execution context
    console.log(`third`, result);
  },
};

obj.func("Abhishek");
obj.func("Arushi");
console.log(`start`);

/**
 * Let’s emphasize: await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.
 */
