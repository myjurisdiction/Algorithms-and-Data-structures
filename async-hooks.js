/**
 * The async_hooks module provides an API to track asynchronous resources in Node.js. An async resource is an object with a callback function associated with it. Because of Node’s nature, almost all things happening under the hood in Node.js are asynchronous calls, and a lot of these async resources are created.
Examples of async resources are Promises, Timeouts, Immediates (when calling setImmediate), TickObject (when calling process.nextTick), TCPWRAP (when creating a server).
 */

const async_hooks = require("async_hooks");
const fs = require("fs");
const util = require("util");

// the API provides us with following events:

// 1: init: called when an async resource is initialized
// 2: before/after : called just before/after the callback associated with the async resource is executed.
// 3: destroy: called after the resource is destroyed.
// 4: promiseResolve : called when the resolve function of the promise contructor is invoked

const asyncHooks = async_hooks.createHook({ init, destroy });
asyncHooks.enable();

function init(asyncId, type, triggerAsyncId, resource) {
  // code
  //   console.log(asyncId, type);
  debug(asyncId, type);
}

init(); // this code for now throws this error -> Maximum call stack size exceeded

function destroy(asyncId) {
  // code
}

// The init callback gets these parameters

// 1: asyncId : unique ID of the async resource.
// 2: type : a string representing the type of async resource (ex, Promise, Timeout, Immediate, TCPWRAP, etc);

// 3: triggerAsyncId: the unique ID of the async resource in whose execution context this async resource was created.

// 4: resource: an object that represents the actual async ressource and contains information about it.

// *** The before, after, destroy, and PromiseResolve callbacks only get the asyncId of the resource.



function debug(...args) {
    fs.writeFileSync(1, `${util.format(...args)}\n`, { flag: "a" }); // this is a synchrounous console function
  }
  
  (function () {
    setTimeout(() => {
      console.log("Hi there");
    }, 1000);
  })();
  
  const _promise = async () => {
    "hey user >>";
  };
  
  (async function () {
      await _promise();
  })();