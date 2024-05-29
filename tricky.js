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
// */
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
function foo() {// no binding
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
*/
/*
var a = 1;

function foo() {
  a = 10;
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
    arr.push(function () {
      console.log(i);
    });
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
copy.x =copy.x++;
// copy.x++;
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

console.log(a[b]);// 465
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

var user = "arif";
console.log(globalThis.user);
