/** @format */

// Promise.all

//Promise.all is a method in JavaScript that allows you to execute multiple promises in parallel and handle their results collectively. It takes an iterable of promises (e.g., an array) and returns a single promise that resolves when all of the input promises have resolved or rejects if any of the input promises rejects.

//Key Points:
//Parallel Execution: All promises are executed in parallel.
//Resolved Values: The resolved value of the returned promise is an array containing the resolved values of each input promise, in the same order as they were passed to Promise.all.
//Rejection Handling: If any promise rejects, Promise.all immediately rejects with the reason of the first promise that rejects, and subsequent promises' resolutions or rejections are ignored.
