/** @format */

// let obj = {
//   name: "abcd",
//   email: "abcd@gmail.com",
//   age: 25,
//   printDetail1: function () {
//     console.log(this.name);
//   },
//   printDetail2: () => {
//     console.log(this.email);
//   },

//   printDetail3: function () {
//     console.log(this.age);
//     this.printDetail1();
//     this.printDetail2();
//   },
// };
// obj.printDetail3();

//map reduce filter methods in js

//shallow copy , deep copy

const checkIsEven = (item) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 0, item % 2 === 0);
  });
};

// const arr = [1, 2, 3];
const existing = [];
// arr.forEach(async (item) => {
//   const isExist = await checkUserById(item);
//   isExist && existing.push(item);
// });
// console.log(existing);

// (async () => {
//   for (const item of arr) {
//     const isExist = await checkUserById(item);
//     isExist && existing.push(item);
//   }
//   console.log(existing);
// })();

// const res = arr.filter(async (item) => {
//   const isExist = await checkUserById(item);
//   console.log(isExist);
//   return isExist;
// });
// console.log(res);

/*
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values
//  from arrays, or properties from objects, into distinct variables.

const array = ["John", "Doe", null];

const fname = array[0];
const lname = array[1];
const age = array[2] ?? 20;

const [FNAME, LNAME, AGE = 20] = array;
console.log({ FNAME, LNAME, AGE, age });

*/

/*

let user = { name: "John", age: 50 };

const userName = user?.name;
const userAge = user?.age;

const { name: userNameD, age: userAgeD } = user;

*/

/*
//Nullish coalescing operator (??)
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand //side operand is null or undefined, and otherwise returns its left-hand side operand.

 let amount = null ?? undefined ?? 0 ?? user.name;
*/

/*
// OR operator=>returns first truthy value, if no truthy value is present then last one
//order
let user = "" || 0 || null;

let userName = "" || "default" || user.name;

if (func1() || func2()) {
  console.log(found);
}
*/

/*
//Template literals (Template strings)

let grades = [60, "80"];
let res = `my grades are => ${grades}`; 
console.log({ res });
*/

//promise.all,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
/* 
//in case of  promise.all total time taken  is max (P1,P2,P3... ) but it is true only if all settled other wise min(rejected(P1,P2,...) )
//nepotism (acts different way in case of resolve and reject)


console.log(`before promise i will be executed coz all methods of promise are async`);
*/

// const arr = [1, 2, 3, 4];

// const filteredData = arr.filter((item, ind) => ind);
// console.log(filteredData);

// const asyncFilteredData = arr.filter((item, ind) => ind);
// console.log(asyncFilteredData);

// const mappedData = arr.map(async (item, index) => item * 2);
// console.log({ mappedData });

// const obj = arr.reduce((acc, curr) => {
//   acc[curr] = curr * 10;
//   return acc;
// }, {});
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(reject, 100, "reject100");
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "resolve2000");
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 10, "reject10");
// });

// Promise.allSettled([promise1, promise2, promise3])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((e) => console.log(e));

var uniqueInOrder = function (iterable) {
  return;
};
// let iterable = "aaaaaBBBDSJJJJ";
// let res = [].filter.call(iterable, function (a, i) {
//   return iterable[i - 1] !== a;
// });
// console.log(res);
//
/*
Array.prototype.myFilter = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.myFilter called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  var result = [];
  var array = Object(this);
  var len = array.length >>> 0; // Convert to an unsigned 32-bit integer

  for (var i = 0; i < len; i++) {
    if (i in array) {
      var element = array[i];
      if (callback.call(thisArg, element, i, array)) {
        result.push(element);
      }
    }
  }

  return result;
};
*/

//call method is used to borrow a method (from an object) for our own object (more precisely to set this  this keyword if method is defined with normal function )
// call's first param specifies object (this) (on which we want to call borrowed method) do not confuse it with first param of borrowed method
let obj = {
  name: "arif",
  email: "ab@gmail.com",
  printDetail() {
    console.log(this.name);
    console.log(this.email);
  },
};
let objTwo = { name: "razvi", email: "ab@gmail.com" };

obj.printDetail(); // here printDetail is being called for obj Object
// if i want to call same (printDetail) method of obj1 for objTwo can use call method
obj.printDetail.call(objTwo);

// arrays are object in js (an special type of object)

// here i'm doing same, borrowing filter method from "[]" object then calling that method for obj "iterable"
let iterable = [1, 2, 3, 4, 5];
let res = [].filter.call(iterable, (a, i) => {
  return a % 2;
});
console.log(res);
