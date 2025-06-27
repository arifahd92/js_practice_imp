/*
new Promise((res, rej) => {
  console.log("promise started,,,,,,,,,,,,,,,,,,,,");

  rej("rejected,,,,,,,,,,,,,,,,,,,,,");
});

console.log("i will run then error will occur coz im asynchronous");
*/

/*
rej() runs immediately, and marks the Promise as "rejected".
The JS engine adds a microtask that will later check: "Was this rejection handled?"
But no .catch() is registered.
Since no handler was found, an "unhandled rejection" warning is triggered —
 but only after the current synchronous code finishes.
*/

let arr = [1, 2, 3];
arr.forEach(async (item) => {
  console.log(item);
  throw new Error("ww");
});
// when an async function throws error that become an rejected promise
// calling  callback of forEach/map/reduce is synchronous
// so we will get log for all item
// then after synchronous, asynchronous task will start and will look for its handler, will not found and will throw error
