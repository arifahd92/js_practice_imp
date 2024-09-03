/** @format */
/*
function myMap(cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    let currentMapped = cb(this[i]);
    arr.push(currentMapped);
  }
  return arr;
}
let arr = [1, 2, 3, 4];
Array.prototype.myMap = myMap;
const mapped = arr.myMap((i) => {
  return i * 5;
});
console.log(mapped);
*/

/*
let arr = [1, 2, 3, 4, 5, 6, 7];

function myFilter(cb) {
  let filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
}

// Attach myFilter to the Array prototype

Array.prototype.myFilter = myFilter;

let num = [1, 2, 3, 4, 5, 6];

let res = num.myFilter((item, i) => i != 4);
console.log(res);

*/
/*
function myFilter(cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    let returnedVal = cb(this[i], i, this);
    if (returnedVal) {
      res.push(this[i]);
    }
  }
  return res;
}

Array.prototype.myFilter = myFilter;

let arr = [1, 2, 3, 4];
const even = arr.myFilter((item, ind, arr) => item % 2 == 0);
// console.log(even);
*/

//revision
// function myFilter(cb) {
//   let resArr = [];
//   for (let i = 0; i < this.length; i++) {
//     let res = cb(this[i], i, this);
//     res && resArr.push(this[i]);
//   }
//   return resArr;
// }
// Array.prototype.myFilter = myFilter;

// let arr = [1, 2, 3, 4, 5];
// let res = arr.myFilter((item, ind, arr) => item % 2 == 0);// myFilter name ka ek method prototype me hona chahiye jo iske callback ko har element ke liye call kar sake
// console.log(res);

/*
function myReduce(cb, acc = 0) {
  // if (typeof acc === "object") {
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }
  // }

  return acc;
}
Array.prototype.myReduce = myReduce;
let arr = [1, 2, 3, 4];
let res = arr.myReduce((acc, curr) => {
  acc.push(curr);
  return acc;
}, []);
console.log(res);
res = arr.myReduce((acc, curr) => {
  acc[curr] = acc[curr] + 1 || 1;
  return acc;
}, {});
console.log(res);
res = arr.myReduce((acc, curr) => {
  return acc + curr;
});
console.log(res);
*/
//
function myReduce(cb, acc = this[0]) {
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }
  return acc;
}
Array.prototype.myReduce = myReduce;
let arr = [1, 2, 3, 4];
let res = arr.myReduce((acc, curr) => {
  acc[curr] = curr;
  return acc;
}, {});
console.log(res);

const res2 = arr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(res2);
