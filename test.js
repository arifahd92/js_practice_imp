/** @format */
/*
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Example usage:
let array = [12, 11, 13, 5, 6];
console.log("Original array:", array);
let sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
*/

/*
const user = {
  // name: "arif",
  email: "random@gmail.com",
};
const { name, email, address = "rtr" } = user;
console.log(name);
*/
/*
let obj = {
  key1: "value1",
  key2: "value2",
};

Object.prototype.inheritedKey = "inheritedValue"; // Adding an inherited property

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + ": " + obj[key]);
  }
}
// Output:
// key1: value1
// key2: value2
*/
/*
const obj = { a: 1, b: 2, c: 3 };

const transformed = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [key, value * 2]) //[ [a, 2],[b, 4], [c, 6]], Object.entries and Object.fromEntries has exactly apposite quality
  //  Object.entries(obj), object to nested array, Object.fromEntries nested array to object
);

console.log(transformed);
// Output: { a: 2, b: 4, c: 6 }
*/
/*
let nestedArr = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
for (let [key, val] of nestedArr) {
  console.log({ key, val }); //{ key: 'a', val: 1 } { key: 'b', val: 2 } { key: 'c', val: 3 }
}
*/
/*
let actualObj = {
  name: "arif",
  email: "arif@gmail.com",
  getName: function () {
    console.log(`detail : name=>${this.name}, email=>${this.email}`);
  },
};
let updatedObj = {
  name: "md arif",
  email: "arifmedianv@gmail.com",
};
let obj = {};
// actualObj.getName();
const updated = Object.assign(actualObj, updatedObj); // actualObj also got changed like updated
// const updated = Object.assign({}, actualObj, updatedObj);// in this actualObj is safe
console.log(updated); //{name: 'md arif',email: 'arifmedianv@gmail.com',getName: [Function: getName]}
console.log("actualObj", actualObj);
*/
/*
(function () {
  try {
    if (true) {
      const ids = [];
      const res = null;
      ids.push(res?.name);
      console.log(ids);
    }
  } catch (error) {
    console.log(error.message);
  }
})();
*/
