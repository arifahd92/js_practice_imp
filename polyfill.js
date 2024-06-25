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

class User {
  name = "aear";
  constructor(fname, email, message) {
    // Correctly assign the parameters to instance variables
    this.fname = fname;
    this.email = email;
    this.message = message;
  }

  detail() {
    return "im detai";
  }
}

const user1 = new User("arif", "arif@gmail.com", "im fine");
// console.log(user1); // { name: 'aear', fname: 'arif', email: 'arif@gmail.com', message: 'im fine'}, method is in its prototype
console.log(Object.getPrototypeOf(user1));
console.log(Object.getPrototypeOf(user1).hasOwnProperty("detail"));
