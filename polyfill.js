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
