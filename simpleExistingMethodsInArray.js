/** @format */

const array = [5, 12, 8, 130, 44];
const index = array.findIndex((element) => element > 10);
console.log(index); // Output: 1 , if not found returns -1

const found = array.find((element) => element > 10);
console.log(found); // Output: 12 else undefined

const hasEven = array.some((element) => element % 2 === 0);
console.log(hasEven); // Output: true, at least one passes the test

const allEven = array.every((element) => element % 2 === 0);
console.log(allEven); // Output: false, each and every element has to pass test
