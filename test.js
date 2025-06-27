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

let arrOfObj = [];
for (let [key, val] of nestedArr) {
  //similar to item of nestedArr and item or say key will get each element one by one that is being destructured here it is like let [key, val]=["a",1]
  arrOfObj.push({ key, val });
}
console.log(arrOfObj); //[ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]

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

/*
const rateLimitWindowMs = 1000;
const maxRequests = 10;
const requestCounts = {};
let ip1 = "12345";
const rateLimiter = (req) => {
  const userIp = req.ip1; // Use the user's IP address as the key
  //check if user already has made any request or not with this ip
  let currentTime = Date.now();
  let timeGap = currentTime - requestCounts[userIp]?.startTime;
  if (!requestCounts[userIp] || timeGap > rateLimitWindowMs) {
    // new user
    console.log(userIp);
    requestCounts[userIp] = {
      count: 1,
      startTime: Date.now(),
    };
    console.log(`smooth`);
    // next();
  } else {
    requestCounts[userIp].count += 1;
    if (requestCounts[userIp].count > maxRequests) {
      console.log(`limit reached `);
    } else {
      console.log(`smooth from else`);
    }
  }
};

for (let i = 0; i < 11; i++) {
  rateLimiter({ ip1 });
}
console.log(requestCounts);
*/
// var t = 7;
// console.log(3 - (undefined ?? 1));
// console.log(3 - (undefined || 1));

// var t = 9;
// console.log(globalThis.t);

/*
const person = {
  name: "John",
  age: 30,
  occupation: "Engineer",
};

const keyArr = [];

for (key in person) {
  if (person.hasOwnProperty(key)) {
    keyArr.push(key);
  }
}
console.log(keyArr);
*/

/*
const proto = {
  nationality: "American",
  gender: "Male",
};

const person = Object.create(proto);
person.name = "John";
person.age = 30;
person.occupation = "Engineer";

console.log(person, "person object");
console.log(Object.getOwnPropertyNames(person));
const keyArr = [];
console.log(Object.keys(person));
for (let key in person) {
  keyArr.push(key);
}

console.log(keyArr); // Output: ["name", "age", "occupation", "nationality", "gender"]
*/
// const dayjs = require("dayjs");
// const utc = require("dayjs/plugin/utc");
// const timezone = require("dayjs/plugin/timezone");
// dayjs.extend(utc);
// dayjs.extend(timezone);
// const res = dayjs("2013-11-18T11:55:20")
//   .tz("Asia/Kolkata")
//   .format(" YYYY-MM-DDTHH:mm:ssZ.SSS[Z]");
// console.log(res);
// var date = new Date(res); // Or the date you'd like converted.
// var isoDateTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
/*
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);
const res = dayjs("2013-11-18T11:55:20").tz("Asia/Kolkata");
// console.log(res);

const convertFromUTC = (utcTime, targetTimeZone) => {
  return dayjs
    .utc(utcTime)
    .tz(targetTimeZone)
    .format("YYYY-MM-DDTHH:mm:ss.SS[Z]");
};

// Example usage:
console.log(convertFromUTC("2013-11-18T06:25:20.000Z", "Asia/Kolkata")); // 2013-11-18T11:55:20
*/

//   let {page, perpage, search = '', callStatus = ["y",'t'], callType = ['o','i']} = {page:1, perpage :20};
//   const searchQuery = search && `&search=${search}`;
//   const callStatusQuery =
//     callStatus.map(item => `&callStatus=${item}`).join('') ?? '';
//   const callTypeQuery =
//     callType.map(item => `&callType=${item}`).join('') ?? '';

//   let queryParam = `?page=${page}&perpage=${perpage}${callStatusQuery}${callTypeQuery}`;
// console.log(queryParam)

const time = Date.now()
const rs=  time-10
console.log(time, time-10, time>rs, typeof rs, typeof time)

console.log(new Date(time-190))