const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("anyName", function (name, age) {
  setTimeout(() => {
    console.log("An event has been registered...");
    console.log(`Triggered By: ${name}. Age: ${age}.`);
    console.log("meaning of this ", this); // when we use arrow function then 'this' no longer reference the instance of EventEmitter.
  }, 1000);
  // we can put any logic here and wait for the event 'anyName' to be listened.
});

/**
  myEmitter.emit('anyName', () => {
    console.log('listened successfully');
});
 */

// we can also pass arguments to the registered event.

// myEmitter.emit("anyName", "sam", 24);

/**
 * The EventEmitter calls all listeners synchronously in the order in which they were registered. This ensures the proper sequencing of events and helps avoid race conditions and logic errors. When appropriate, listener functions can switch to an asynchronous mode of operation using the setImmediate() or process.nextTick() methods:
 */

myEmitter.on("_a", function listener1() {
  console.log("sequence one.");
});

myEmitter.prependListener("_a", function listener3(...args) {
  process.nextTick(() => {
    console.log("sequence three.");
    const params = args.join(", ");
    console.log(`I have the following parameters: ${params}`);
  });
});

myEmitter.on("_a", function listener2(arg1, arg2) {
  console.log("sequence two");
  console.log(`I have following arguments: ${arg1}, ${arg2}`);
});

// myEmitter.emit("_a", "a", "b", "c", "d");

// capture rejections.

const ee = new MyEmitter({ captureRejections: true });

ee.on("async", async (name) => {
  if (name) console.log(`Hi, i am ${name}`);
  else throw new Error("something went wrong !!");
});

// ee.emit("async");

/**
 * 
 Back to async hooks
 */

//The async_hooks module provides an API to track asynchronous resources. It can be accessed using:

const async_hooks = require("async_hooks");

const eid = async_hooks.executionAsyncId();

const tid = async_hooks.triggerAsyncId();

console.log(eid, tid);

// const asyncHook = async_hooks.createHook({
//   init,
//   before,
//   after,
//   destroy,
//   promiseResolve,
// });

// console.log(asyncHook);
