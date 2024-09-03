/** @format */

// Promise.all

//Promise.all is a method in JavaScript that allows you to execute multiple promises in parallel and handle their results collectively. It takes an iterable of promises (e.g., an array) and returns a single promise that resolves when all of the input promises have resolved or rejects if any of the input promises rejects.

//Key Points:
//Parallel Execution: All promises are executed in parallel. (not suitable for dependent promise)
//Resolved Values: The resolved value of the returned promise is an array containing the resolved values of each input promise, in the same order as they were passed to Promise.all.
//Rejection Handling: If any promise rejects, Promise.all immediately rejects with the reason of the first promise that rejects, and subsequent promises' resolutions or rejections are ignored.

const promise1 = Promise.resolve(3);
const promise2 = function (delay) {
  return new Promise((resolve, reject) => setTimeout(reject, delay, "error"));
};

const promise3 = function (delay) {
  return new Promise((resolve, reject) => setTimeout(resolve, delay, "foo"));
};

let time1 = new Date().getTime();

//promise.all,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
/* 
//in case of  promise.all total time taken  is max (P1,P2,P3... ) but it is true only if all settled other wise min(rejected(P1,P2,...) )
//nepotism (acts different way in case of resolve and reject)

Promise.all([promise1, promise2(200), promise3(500)])
  .then((promiseResult) => {
    console.log(promiseResult);
    console.log(`total time taken = ${new Date().getTime() - time1}`);
  })
  .catch((err) => {
    console.log(err); //error
    console.log(`total time taken = ${new Date().getTime() - time1}`); //total time taken = 208, this is case of min(rejected(P1,P2,))
  });
console.log(`before promise i will be executed coz all methods of promise are asy`);
*/

//Promise.allSettled,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
/*
////in case of  promise.allSettled total time taken  is always max (P1,P2,P3... ) 
//no nepotism (acts same way in both cases (resolve and reject))
Promise.allSettled([promise1, promise2(500), promise3(200)]).then((results) => {
  console.log(results); //[ { status: 'fulfilled', value: 3 }, { status: 'rejected', reason: 'error' }, { status: 'fulfilled', value: 'foo' } ]
  console.log(`total time taken = ${new Date().getTime() - time1}`); //total time taken = 518
});
*/

// total time taken in case of promise.any is (min of (resolved(p1,p2,..)))

//in case of  promise.race total time taken  is always min of (resolve or reject (P1,P2,P3... ) )

/*
 promise.race vs promise.any ,
 1) both takes array of promises and return single value 
 2)in any try to find any resolved (nepotism)
 3) in race no nepotism between resolve and reject jo winner is winner either it is resolve or reject  
*/

/*

JavaScript provides several advanced methods for working with promises that help manage asynchronous operations efficiently. Here’s an overview of these methods:

### 1. `Promise.all`

`Promise.all` takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved. If any of the promises reject, the returned promise immediately rejects with the reason of the first rejected promise.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

//Promise.all every promise should be resolve

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // [3, 42, "foo"]
}).catch(error => {
  console.error(error);
});
```

### 2. `Promise.allSettled` // be settled either resolve or reject

`Promise.allSettled` takes an array of promises and returns a single promise that resolves after all of the given promises have either resolved or rejected. The result is an array of objects that each describe the outcome of each promise.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'error'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'foo'));

Promise.allSettled([promise1, promise2, promise3]).then(results => {
  results.forEach(result => console.log(result));
  // { status: 'fulfilled', value: 3 }
  // { status: 'rejected', reason: 'error' }
  // { status: 'fulfilled', value: 'foo' }
});
```

### 3. `Promise.any`

`Promise.any` takes an array of promises and returns a single promise that resolves as soon as any of the promises in the array fulfills. If all of the given promises are rejected, it returns a promise that is rejected with an `AggregateError`.

```javascript
const promise1 = Promise.reject('Error 1');
const promise2 = Promise.reject('Error 2');
const promise3 = Promise.resolve('Success');

Promise.any([promise1, promise2, promise3]).then(value => {
  console.log(value); // 'Success'
}).catch(error => {
  console.error(error);
});
```

### 4. `Promise.race`

`Promise.race` takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects, with the value or reason from that promise.

```javascript
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'two'));

Promise.race([promise1, promise2]).then(value => {
  console.log(value); // 'two'
}).catch(error => {
  console.error(error);
});
```

### 5. `Promise.resolve`

`Promise.resolve` returns a promise that is resolved with the given value. If the value is a promise, it will be unwrapped and the resulting promise will resolve with the value of the promise.

```javascript
Promise.resolve('Success').then(value => {
  console.log(value); // 'Success'
});
```

### 6. `Promise.reject`

`Promise.reject` returns a promise that is rejected with the given reason.

```javascript
Promise.reject(new Error('Failed')).catch(error => {
  console.error(error); // Error: Failed
});
```

These advanced promise methods allow for flexible and powerful handling of multiple asynchronous operations in JavaScript, making it easier to manage complex workflows and error handling scenarios.
*/
