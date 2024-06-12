/** @format */
/*
function foo() {
  return bar();
  function bar() {
    return "Hello";
  }
  function bar() {
    return "World";
  }
}
console.log(foo());
*/
/*
function outer() {
  let x = 10;
  function inner() {
    console.log(x);
    let x = 20;
  }
  inner();
}
outer();
*/

/*
function myFunction() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

var functions = myFunction();
functions[0]();
functions[1]();
functions[2]();

*/

/*
function myFunction() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    (function (i) {
      arr.push(function () {
        console.log(i);
      });
    })(i);
  }
  return arr;
}

var functions = myFunction();
functions[0]();
functions[1]();
functions[2]();
*/
/*
function foo() {
  let a = 1;
  setTimeout(function () {
    console.log(a);
  }, 1000);
  a = 2;
}

foo();
*/

/*
var x = 10;
function outer() {
  console.log(x);
  var x = 20;
}
outer();
*/
/*
function outer() {
  var x = 10;
  function inner() {
    console.log(x);
  }
  return inner;
}

var innerFunction = outer();
innerFunction();
*/
/*
function outer() {
  var x = 10;
  function inner() {
    var x = 20;
    console.log(x);
  }
  inner();
  console.log(x);
}

outer();
*/
/*
const arr = [1, 2, 3, 4, 5];

function multiplyByIndex() {
  const result = arr.map((value, index) => value * index);
  return result;
}

console.log(multiplyByIndex());
*/

/*
const person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

const getFullName = person.getFullName;
console.log(getFullName());
*/
/*
const myObj = {
  a: 10,
  b: 20,
  c: {
    d: 30,
    e: 40,
  },
};

const {
  a,
  b = 18,
  c: { d, e }, // re destructure c
  f = "default", // if f is not present assign default
} = myObj;

console.log(a, b, d, e, f);
*/
/*
let x = 4;
x = x++; //first increments value of x then returns previous value(value before inc) & ++x first increments value of x then returns incremented value
// console.log(x++);//4 output
console.log(x++ + ++x);//10
*/
/*
var a = 1;
function foo() {
  if (!a) {
    var a = 10;
  }
  console.log(a);
}
foo();
console.log(a);// final output 10,1
*/
/*
function foo() {
  bar = { a: "hello" };
  var baz = bar;
  baz.a = "world";
}

foo();

console.log(bar.a); //'world' bar is global variable as bar is not declared using variable declaration keyword like vae let or const
*/
/*
var a = 1;

function b() {
  a = 10;
  return;
  function a() {}
}

b();

console.log(a); //op 1 now it is your responsibility to check why
*/

/*
function outer() {
  var a = 1;

  function inner() {
    var a = 2;
    console.log(a);
  }

  inner();
  console.log(a);
}

outer();
*/
/*
function foo() {
  console.log(a);
  a = 1;
}

foo();
var a;
*/

/*
var a = 1;

function outer() {
  console.log(a);
  var a = 2;
  console.log(a);
}

outer();
console.log(a);
*/
/*
var a = 1;

function foo() {
  console.log(a);
  var a = 2;
}

foo();
console.log(a);
*/
/*
function outer() {
  var a = 1;

  function inner() {
    console.log(a);
  }

  a = 2;
  inner();
}

outer();
*/
/*
var a = 1;

function foo() {
  console.log(a);
  if (false) {
    var a = 2;
  }
}

foo();
console.log(a);
*/
/*
function outer() {
  var a = 1;

  function inner() {
    console.log(a);
  }
  a = 5;
  return inner;
}

var innerFunction = outer();
a = 10;
innerFunction();
*/
/*
var a = 1;

function foo() {
  console.log(a);
}

function bar() {
  var a = 2;
  foo();
}

bar();
// */
/*
var a = 1;

function foo() {
  a = 10; // first hoisting of declared variables and functions then assignment, here a is not declared so only hoisting of function a will take place and inside variable a a function will be stored (a new scope of a will be created) 
  console.log({ a });
  return;
  function a() {}
}

foo();

console.log(a);
*/

/*
function outer() {
  var a = [];

  function inner() {
    a.push("hello");
    console.log(a.length);
  }

  return inner;
}

var innerFunction1 = outer();
var innerFunction2 = outer();

innerFunction1(); //1
innerFunction2(); //1// a separate closer will be created in this case
innerFunction1(); //2
*/

/*
function outer() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    // ((i) => {
    arr.push(function () {
      console.log(i);
    });
    // })(i);
  }

  return arr;
}

var functions = outer();

functions[0]();
functions[1]();
functions[2]();
*/

/*
function outer() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (x) {
        return function () {
          console.log(x);
        };
      })(i)
    );
  }

  return arr;
}

var functions = outer();

functions[0]();
functions[1]();
functions[2]();
*/

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 100);
// }

/*
function outer() {
  function inner(i) {
    // var i = i;
    setTimeout(() => {
      console.log(i);
    }, i * 500);
  }
  return inner;
}
let inner = outer();
for (var i = 0; i < 3; i++) {
  inner(i);
}
*/ // 0 1 2, it is working like each time declaring a variable inside inner function like i commented
/*
for (var i = 1; i <= 5; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  })(i);
}
*/
/*
let tricky = { x: 1, y: 2 };
let copy = tricky;
copy.x = 5;
tricky.x = copy.x++; //copy.x ke value ko 1 se increment karo and then then return previous value, so finally copy.x remain same
// copy.x++;// copy.x ke value ko 1 se increment
console.log(tricky.x);
*/
/*
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[a-zA-Z\d!@#$%^&*()_+}{"':;?/>.<,]).{4,10}$/;
const result = strongPasswordRegex.test("f@1Ayuyyuy");
console.log(result);
*/
/*
var a = {};
var b = { key: "b" };
var c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 465
*/
/*
(function () {
  var x = (y = 1);
})();

console.log(typeof x);
console.log(typeof y);
*/

/*
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

const myObj = {
  value: 10,
  getValue: function() {
    return this.value;
  }
};
*/
/*
//moderate
const myObj = {
  value: 10,
  getValue: function () {
    return this.value;
  },
};

const getValue = myObj.getValue;

console.log(myObj.getValue()); // 1
console.log(getValue()); // 2
*/
/*
//easy
function myFunc() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

myFunc();
*/

/*
const x = (...args) => {
  console.log(args);
};

x(1, 2, 3);
*/
/*
let num = { 0: 1, 1: 2, 2: 3 };
for (let key in num) {
  console.log(num[key]);
}
*/
/*
let user = {
  name: "arid",
  email: "arif@gmail.com",
};

for (let key in user) {
  console.log(key);
  // console.log(user[key]);
  console.log(user.key);
}
*/
/*
function foo() {
  return bar;
  var bar = 10;
  function bar() {}
  function bar() {}
}

console.log(typeof foo());
*/

/*
var x = 1;
if (function f() {}) {
  f();
}
console.log(x);
*/
/*
addUptoThree = (a) => (b) => (c) => a + b + c;

console.log(addUptoThree(1)(2)(3));
*/
/*
var a = 1;
function b() {
   a = 10;
  return;
  function a() {}
}
b();
console.log(a);//1 inside function bv only function will be hoisted (it is only declared so suppose let a=function(){} , then a = 10 will modify this block scoped variable)
*/
/*
var a = 1;
function b() {
 let  a = 10;
  return;
  function a() {}
}
b();
console.log(a);// error a is already declared
*/
/*
var a = 1;
function b() {
  a = 1;
  function a() {}
  console.log(a);
  return;
}
b();
console.log(a)
*/

/*
function b() {
  // var a = 5;
  console.log(a);
  var a = 10;
  var a = 11; // This re-declares the variable a
  function a() {}
  // console.log(a()); //: a is not a function
  return;
}
b();
*/

// let obj1 = { name: "arid" };// this data is safe in memory and only this dat's ref is assigned to obj1 , if at any point of time a brand new data is assigned to obj1 this data will be safe new
// let obj2 = obj1;
// obj2.email = "EMAIL@GMAIL.COM";
// obj1 = {};// obj1 now referencing to a brand new empty object , but obj2 referencing to old one
// console.log(obj2.name); //?

/*
const obj = { name: "arif", address: { vill: "sihoriya" } };// address key of obj has stored address of {vill:"sihoriya "}
let b = obj.address;// that address assigned to b also 
obj.address = { vill: "badgawa" };// now address key of obj has stored address of {vill:"badgawa"} but b has still ref of {vill:"sihoriya"}, ref is changing or say breaking
console.log(b);//?
console.log(obj);//?
let c = obj.address
console.log(c)//?

*/
// in one word always check that address is changing  or data of address if data of address is being updated with . operator changes will reflect every where like in below code

/*
const obj = { name: "arif", address: { vill: "sihoriya" } };
let b = obj.address;
obj.address.vill = "badgawa";// data of same ref being change
console.log(b);
*/
/*
var a = 10;
var a;
console.log(a);//10
*/

//object.create
/*
const user = { name: "sdsfsd" };
let copy = Object.create(user);
console.log(copy); //{}
console.log(copy.name); //?
const keys = Object.keys(copy);
console.log({ keys });
*/
//to string on array and on object
/*
let arr = [1, "ab", 5];
let stringOfArr = arr.toString();
// console.log(stringOfArr);
const user = { name: "sdsfsd" };
let stringOfObj = user.toString();
console.log(stringOfObj); //'[object Object]'
*/

// console.log({} + []);
/*
const arr = ["str1", "str2", 5];
console.log(Object.keys(arr)); //['0,'1,'2]
*/
/*
let val;
let obj = { marks: val };
console.log(obj.marks ? obj.marks : "default"); // if obj.marks is a falsy then default
console.log(obj.marks || "default");
// The nullish coalescing operator (??) is designed for this purpose. It only considers null or undefined as nullish values.
console.log(obj.marks ?? "default"); // Output: 0, it will return default only and only if obj.marks is undefined or null , in case of empty string it will result empty string
*/

/*
let num;
// console.log(num.name); //error can not read properties of undefined reading name
//proto is only created after assignment (assignment should not be null or undefined), and if proto created we do not ge error
let num2 = "";
console.log(num2.name); // undefined
*/

/*
function anonymous() {}
console.log(anonymous.name); //anonymous
console.log(anonymous.name2); //undefined
*/

/*
const fruits = ["Apple", "banana"];
const result = fruits.join(", ");
console.log(result); // Output: "Apple, banana"
*/
/*
for (var i = 0; i < 5; i++) {
  ((i) => {
    setTimeout(() => {
      console.log(i);
    })(i);
    }, 100);

}
*/
/*
for (var i = 0; i < 5; i++) {
  setTimeout(
    (i) => {
      console.log(i);
    },
    100,
    i
  );
}
*/

//******************************************************* imp ***************************************************

/*
let perPage = " "; // space is a truthy value but it returns true in case of " " == 0  or ( "     " == 0 ) it also will return true
console.log(
  " " == 0, // true
  "" == 0, //true

  " " == null, // false
  "" == null, //false

  " " == undefined, //false
  "" == undefined // false
);

// all space (" "), multiple spaces ("   ") and empty ("") string are loosely equal to 0

//neither space (" ") nor empty string ("") are loosely equal to both ( undefined or null)

console.log(
  null === null, //true
  undefined === undefined, // true
  null == undefined, // true
  NaN == NaN, // false **
  NaN === NaN //false **
);

// if (perPage == 0 || perPage == null || perPage == undefined) {// it assigns 20 in case of space
//   perPage = 20;
// }
// perPage = perPage || 20; // in case of space it assigns perPage, but if assigns 20

perPage = (perPage != " " && perPage) || 20; // in case of space it assigns 20
console.log({ perPage });
*/

/*
let ids = ["1", "2", "3"];
const docPrefix = "user";
console.log(ids.join()); //1,2,3
console.log(ids.join(",")); //1,2,3
console.log(ids.join("")); //123
console.log(ids.join(docPrefix)); //1user2user3

// 'user::1', 'user::3' IT IS MY TARGET TO ACHIEVE

let idsInKeyForm = ids.map((id) => `${docPrefix}::${id}`); // [ 'user::1', 'user::2', 'user::3' ]
console.log(idsInKeyForm);
console.log(idsInKeyForm.join(", ")); // user::1, user::2, user::3

const data = {
  ids: ["1", "2", "3"],
};

*/
// imp******************
/*

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let freqObj = {};
for (item of fruits) {
  freqObj[item] = freqObj[item] ? freqObj[item] + 1 : 1;
  // in   freqObj[item] = freqObj[item] ? freqObj[item] + 1 : 1; left freqObj[item] represent key and right freqObj[item] represent value of that value 
  //left side is like creating dynamic key and right side is like accessing dynamic value
}
console.log(freqObj);//{ apple: 3, banana: 2, orange: 1 }
*/
//***********************************imp reduce method */
/*
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
//reduce methods  callback is executed for each elements of array and return value is accumulated in accumulator variable and when all elements are done in end accumulator is returned
// in first iteration cb returns 1+0 =1 now accumulator will be 1



console.log(sum); // Output: 15

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const freqObj = fruits.reduce((dummyObject, item) => {
  if (dummyObject[item]) {
    dummyObject[item] = dummyObject[item] + 1;
  } else {
    dummyObject[item] = 1;
  }
  return dummyObject; // if you do not return dummyObject (that is updated dummyObject nex time dummyObject will be undefined coz dummyObject is here accumulator and accumulator is assigned by returned value of callback)
}, {});
console.log(freqObj);
*/
