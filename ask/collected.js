// let vs const
//temporal dead zone
//hoisting
// how will you check a variable holds an array

let count = 0;
const formObj = (subjectName, marks) => {
  return {
    userId: ++count,
    [`sub_${subjectName}`]: marks ?? 40,
  };
};
const obj1 = formObj("maths", 100); //{userId:1, sub_maths:100}
const obj2 = formObj("english", 80); //{userId:2, sub_english:100}
const obj3 = formObj("english"); //{userId:3, sub_english:40}
// marks can be only 3 types any positive number including 0 , null and undefined
// if marks value is 0 consider 0 but in case of null and undefined default passing mark that is 40
console.log(obj1, obj2, obj3); //

//why a normal function can be called but not arrow function
const arr = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
  { id: 4, name: "David", email: "david@example.com" },
  { id: 5, name: "Eve", email: "eve@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }, // duplicate
  { id: 8, name: "Zara", email: "zara@example.com" },
  { id: 5, name: "Eve", email: "eve@example.com" }, // duplicate
  { id: 10, name: "Sam", email: "sam@example.com" },
];
let copyArray; //without duplicate

// this key word

//if you want declare a method inside object , will you chose normal function or arrow function and why

// what is object.create, when should we use that

//we do not define map reduce filter methods on array but still we get that why

// can we stop forEach loop like we use break in normal loop

//shallow copy vs deep copy

// try catch vs .catch

//how to handle uncaught exception

// what is use of clearTimeout / clearInterval

// what are middlewares

// what do require in nodejs

//write a function that accept another function and returns debounced version of that
/*
function asyncTimer(a) {
  setTimeout(() => {
    a *= 2
  }, 0)
  return a
}
//don't change any thing in "canYouProvideMeUpdatedA" 
const canYouProvideMeUpdatedA = (updatedA) => {
  console.log('im updated A', updatedA)
}
const res = asyncTimer(5)
console.log(res)// what will be printed
*/

//suppose in our project i want use a counter at multiple places how will u handle that
//draw back of closure
// call bind apply
async function foo() {
  return 5;
}
console.log(foo());

const user1 = {
  name: "abcd",
  email: "abcd@gmail.com",
  userDetail: () => {
    return `name: ${this.name} and email:${this.email}`;
  },
};
console.log(user1.userDetail()); //output
const user2 = {
  name: "abcd",
  email: "abcd@gmail.com",
};

/*
let res = false;
setTimeout(() => {
    res = false;
    }, 0);
    while (res) {
        console.log(res);
        }
        */

/*
let count = 0
import React, { useState, useEffect } from "react";

function Counter() {


useEffect(() => {
 console.log("Count changed:", count);
}, [count]);

return (
 <button onClick={() => setCount(count + 1)}>
     Count: {count}
 </button>
);
}
*/

/*
function toBeDebounced() {
  console.log('i called')
}
const debounce = (fn, t) => {
  let timer

  return () => {

    clearTimeout(timer)
    timer = setTimeout(fn, t)
  }

}
const prom = (t) => {
  return new Promise((res) => setTimeout(res, t))
}
let debounced = debounce(toBeDebounced, 1000);
(async () => {

  await prom(200)


})()

*/

/*
//hard 
class Counter {
  static instantiated = null
  constructor() {
    if (Counter.instantiated) {
      return Counter.instantiated
    }

    Counter.instantiated = this
  }
  count = 0
  increment() {
    this.count++
    console.log(this.count)
  }
}
const counter1 = new Counter
const counter2 = new Counter
counter1.increment()
counter1.increment()
counter2.increment()
*/

function getPromise(data) {
  console.log("getPromise called");
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (data) {
        res("success");
      } else {
        rej("fail");
      }
    });
  });
}
async function handleWithRetry(fn, ...args) {
  let count = 1;
  async function retry() {
    try {
      return await fn(...args);
    } catch (error) {
      if (count <= 3) {
        count++;
        return await retry();
      }
      throw new Error(error);
    }
  }

  return retry();
}
async function resolePromise() {
  try {
    const res = await handleWithRetry(getPromise); //await handleWithRetry(getPromise, 4)
    console.log("value of res==>>", res);
  } catch (error) {
    console.log("inside catch");
  }
}
resolePromise();

function updateData(a, cb) {
  setTimeout(() => {
    a *= 2;
    cb?.(a);
  }, 0);
  return a;
}
let result = 5;
setTimeout(() => {
  result = updateData(5);
  console.log(result);
}, 100);

// console.log(result)

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
// promise1.then((data) => {
// console.log(data, 'data1')
// }).then(() => promise2.then((data) => console.log(data, 'data2')))

function user(...arr) {
  console.log(arr);
}

user([1, 2, 3]);

function constructQuery(userIds) {
  let str = "[";
  for (const item of userIds) {
    str = str + `${item},`;
  }
  console.log(str, "im str,,,,,,,,,,,");
  return `select * from "user" where in ${str}`;
}
let userIds = [1, 2, 3];
const query = constructQuery(userIds); //select all from "User" where id in [1,2,3]
console.log(query);

// imp counter
function counter(count = 0) {
  return {
    increment() {
      count++;
    },
    getCount: () => count,
  };
}
const counter1 = counter();
counter1.increment();
counter1.increment();
console.log(counter1.getCount(), "i logged");

const user = {
  groupAddition: {
    privacy: "everyOne",
  },
};

// i want a function that will accept two parameter an async cb and isWait if isWait true will return awaited result other wise with .catch
const controlAsync = async (cb, isWait) => {
  if (isWait) {
    return await cb();
  } else {
    return cb().catch();
  }
};
let dateString = new Date().toISOString();
console.log(`dateString`, dateString);
