/** @format */

//some imp methods are written in dsa here basic will be given
/*
let arr = [10, 20, 30];
const shifted = arr.shift();
console.log({ arr, shifted }); //{ arr: [ 20, 30 ], shifted: 10 }
*/

/*
let arr = [10, 20, 30];
let popped = arr.pop();
console.log({ arr, popped });//{ arr: [ 10, 20 ], popped: 30 }
*/

/*
let arr = [10, 20, 30];
let pushed = arr.push(40);
console.log({ pushed, arr });//{ pushed: 4, arr: [ 10, 20, 30, 40 ] }, pushed is updated length
*/

/*
let arr = [10, 20, 30];
let unShifted = arr.unshift(40);
console.log({ arr, unShifted });//{ arr: [ 40, 10, 20, 30 ], unShifted: 4 }, same as pop
*/

/*
let arr = [10, 20, 30];
let res1 = arr.join("");
console.log(res1); //102030
console.log(arr.join("::appt::"));
*/

/*
//         0   1    2  3   4
let arr = [10, 20, 30, 40, 50];
let sliced = arr.slice(2, 4);// second is exclusive 
console.log({ sliced, arr }); //{ sliced: [ 30, 40 ], arr: [ 10, 20, 30, 40, 50 ] }
console.log(arr.slice(2, -1)); //[ 30, 40 ] -1 representing to last index it is same as 4 here
console.log(arr.slice(1, -2)); //[20,30]
*/

//splice(a,b,c)// a index, b how many to delete, c what to insert at removed places

// let arr = [10, 20, 30, 40, 50];
// let spliced = arr.splice(1, 2); //{ spliced: [ 20, 30 ], arr: [ 10, 40, 50 ] }
// console.log({ spliced, arr });

// let arr = [10, 20, 30, 40, 50];
// let spliced = arr.splice(1, 2, 3, 5, 6); //{ spliced: [ 20, 30 ], arr: [ 10, 3, 5, 6, 40, 50 ] }
// console.log({ spliced, arr });
/*
const user = [
  { id: 1, name: "arif1", age: 26 },
  { id: 2, name: "arif2", age: 26 },
  { id: 3, name: "arif3", age: 26 },
];

// let index = 1;
// //update name and age
// let target = user[index];
// let updated = { ...target, name: "updated", age: "updated" };
// user[index] = updated;
// console.log(user);

let id = 3;
let index = user.findIndex((item) => item.id == id);
console.log({ index }); //2
*/

/*
let arr = [1, 2, 3, 4];
console.log(arr.includes(4)); //true
console.log(arr.find((item) => item > 2)); // 3
console.log(arr.findIndex((item) => item > 2)); // 2, index of 3
*/
