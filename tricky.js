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
    (function (i) {// a function has capability to remember the value of its parameter on which it was called, it is possible through closure
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
  }, 0);
  a = 2;
}

foo();
*/
/*
function foo() {
  let a = 1;
  setTimeout(
    function (a) {
      console.log(a);
    },
    0,
    a
  );
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
function outer(y) {//imp: y is a local variable, and y will not be over written by next call of outer function
  var x = 10;
  function inner() {
    console.log(x, y);
  }
  return inner;
}
let x = 20; // global variable
var innerFunction1 = outer(100);
var innerFunction2 = outer(200);
innerFunction1();
innerFunction2();
*/
//imp: when ever a function is called it captures all variable and creates a copy of them in its scope, that is isolated from other function calls, they are not shared between function calls, thus they are not over written by next call of function. this is called closure.
//imp: same thing happens when we create object using class or construtor function

// imp: function always runs in its defined scope, even if it's called from another scope
//imp: it will search variable in outer scope only when that variable is not present in its scope

/*
function outer(y) {
  function inner() {
    console.log(x);
  }
  return inner;
}
let x = 20; // global variable
var innerFunction = outer(100);
innerFunction();//imp: inner will look x in its own then in its parent scope and then in global scope.since when it will be looking in global scope at that time x will be 20 so it will print 20. 
*/

/*
function outer(y) {
  function inner() {
    console.log(x);
  }
  return inner;
}
var innerFunction = outer(100);
innerFunction();// error since x is in temporal dead zone when innerFunction is called
let x = 20; // global variable
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
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {//imp: this function is defined somewhere else in memory and ref is being stored in getfullNmae
    return `${this.firstName} ${this.lastName}`;
  },
};

//FYI: this inside a normal function depends on how the function is being called

const getFullName = person.getFullName;//imp: this is also returning reference of the function that is assigned to getFullName (not exactly function)
console.log(getFullName());//imp: thats is why here it is like a normal call to that function and `this` is window function rather than person object
*/

/*
const myObj = {
  a: 10,
  b: 20,
  c: {
    d: id,
    e: 40,
  },
};

const {
  a: p, // here we are assigning value of a to p, in simple word , a ki jo bhi value hogi wo p me store hogi, isi concept ka use hum nested object ke destructuring me karenge
  c: t, // here t is an object and it can be further destructured
  c: { d: u, e: v, f: g = "yuy" },
} = myObj;
console.log(u, v, g);

*/

/*
let x = 4;
x = x++; //first increments value of x then returns previous value(value before inc) & ++x first increments value of x then returns incremented value
// console.log(x++);//4 output
console.log(x++ + ++x); //10
*/

/*
var a = 1;
function foo() {
  if (!a) {
    let a = 10;
    // var a = 10;
  }
  console.log(a);
}
foo();
console.log(a); // final output 10,1
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
let a = 1;

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
    console.log(a); //? when this function is called, it searches for a in the inner scope first, then the outer scope, then the global scope.,
    //aur jis scope mein a milta hai use print karta hai, us scope me isF function ke just call se pahle a ki value kya hai wahi capture karta hai.
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
    // let a = 2;
  }
}

foo();
console.log(a);
*/

/////////////////////////////////////////////////////////////////////////////
//imp: imp scope based question,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
/*
function outer() {
  var a = 1;

  function inner() {
    console.log(a);
  }

  a = 5;
  return inner;
}

var a = 10;
var innerFunction = outer();
innerFunction();

//imp: inner function ko jab call kiya to wo `a` ko outer me dhoodhne gaya , now we have to think what is value of a in outer scope just before the call of inner function.
*/

/*
var a = 1;

function foo() {
  console.log(a);
}

function bar() {
  a = 2;
  foo();
}

bar();
*/

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

//imp:: whenever a function is called it creattes a copy of its scope and metain it seperately from new call
/*
function outer() {
  var a = []; // in second call of outer this a will be different from first call of outer(), and a will be completely isolated from first call of outer()
  //but this a will be shared accross all call of inner function of an outer() call

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
var arr = [];
function outer() {
  for (var i = 0; i < 3; i++) {
    arr.push(function () {// function is defined here, and when ever it will be called from any scope  it will run in defined scope, as we know function always run in its defined scope, and when it will search value of i it will find that i is 3 in its scope for each call of function
      console.log(i);
    });
  }

  return arr;
}

var functions = outer();

functions[0](); //
functions[1]();
functions[2]();
*/

/*
function outer() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    ((i) => {//this will make different different call of a function,  each  call of function  will create seperate seperate scope for all i and function written inside push will create a closer with functions called i
    arr.push(function () {
      console.log(i);
    });
    })(i);
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
*/

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
tricky.x = copy.x++; 

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

console.log(myObj.getValue()); // 10
console.log(getValue()); // undefined
*/

/*

function myFunc() {
  console.log(a);
  foo(); // jab foo call hua foo function chalega aur variable a ko apne parent me dekhega ki a ki value parent me just foo ke  call se pahle kya hai

  var a = 1;
  function foo() {
    console.log(a);
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
  var a = 10;
  function a() {}
  console.log(a); //  
}
foo(); //imp:: guess what will be the output of this code?

//imp: memory allocation phase
//sabse pahle function name ko memory allocate hota hai, usme function ka body  store hota hai, uske baad variable ko memory allocate hota hai
// so var a =10 will update value of a in memory by 10, 
//now you might think in execution phase `function a() {}` it will update value of a in memory , but it is not the case, function has no effect in execution phase it is ignored very cutely in execution phase ( untill it is invoked )
*/

/*

function foo() {
  var a;
  function a() {}
  console.log(a); //
}
foo(); // guess output in this case too

// concept is as in above only diffrence is that if a variable has got some value in memory then it will not be updatet by default value(that is undefined) of variable a, REMEMBER IF WE ASSIGN delibrately by undefined then it will be updated
*/

/*
function foo() {
  return bar;
  var bar = 10;
  function bar() {}
  function bar() {}
}

console.log(typeof foo());


//first of all memory allocation will take place then execution phase will take place
//in memory allocation phase function name will be allocated memory first then variable will be allocated memory, as we know bar already got a value so it will not be over written by default undefined of var bar

*/

/*
function foo() {
  var bar = 10;
  function bar() {}
  return bar;
  function bar() {}
}

console.log(typeof foo());//imp: guess the output of this code

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

const res1 = addUptoThree(1)(2)(3);
const res2 = addUptoThree(4);
const res3 = res2(5)(6);
const res4 = res2(7)(9);
console.log({ res1, res2, res3, res4 });
*/

// addUptoThree(1) this will return a function that will create closure with parent scope
//this is based on concept of  closure and seperate copy of a function call

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
  let a = 10;
  return;
  function a() {}
}
b();
console.log(a); 
*/

//imp: beautiful question based on memory allocation / hoisting

/*
let a = 1;
function b() {
  a = 10;
  function a() {}
  console.log(a);
  return;
}
b();
console.log(a);
*/

//imp:: beautiful question based on memory allocation / hoisting
/*
function b() {
  console.log(a);
  var a = 10;
  var a = 11;
  function a() {}
  console.log(a);
  return;
}
b();
*/

//variable declaration will not overwrite memory allocation until execution phase reaches to declared line, coz in memory allocation phase it is undefined and a has already got some real value from functions memory allocation so it will not be updated by default undefined

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
console.log(a);// guess output
*/
//imp: var a = 10;// always see it in two part var a;  a = 10, `var a` will be used only in memory allocation phase, it has nothing to do in execution phase
//imp:: and a = 10 will be used in execution phase only it has nothing to do in memory allocation phase , so in memory allocation phase var a is undefined

//object.create

/*
const user = { name: "sdsfsd" };
let copy = Object.create(user);
console.log(copy); //{}
console.log(copy.name); //?
const keys = Object.keys(copy);
console.log({ keys });
console.log(copy.__proto__, "im being logged here ");
*/

//to string on array and on object
/*
let arr = [1, "ab", "5"];
let stringOfArr = arr.toString();
console.log([stringOfArr]);
const user = { name: "sdsfsd" };
let stringOfObj = user.toString();
console.log([stringOfObj]); //'[object Object]'
*/

// console.log({} + []);
/*
const arr = ["str1", "str2", 5];
console.log(Object.keys(arr)); //['0,'1,'2]
*/

/*
let val = 0;
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
// imp,******************
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

/*

const userData = [
  { id: 1, name: "Alice", email: "dummy1" },
  { id: 2, name: "Bob", email: "dummy2" },
  { id: 3, name: "Charlie", email: "dummy3" },
];
//required output

// {  '1': { name: 'Alice', email: 'dummy1' },  '2': { name: 'Bob', email: 'dummy2' },  '3': { name: 'Charlie', email: 'dummy3' }}

//solution
const result = userData.reduce((dummyObj, item) => {
  //remember mutating item will mutate original data  inside userData like if we delete a key like id from item instead of destructuring id field also will be deleted from userData
  const { id, ...res } = item;
  dummyObj[id] = res;
  return dummyObj;
}, {});

console.log(result); 
console.log(userData);
*/
//imp:: use of in operator in objects
/*
let obj = { name: "abc", mark: 0 };

if (obj["mark"]) {
  // this is buggy code
  console.log("mark key exists in obj, checked by value");
}
if ("mark" in obj) {
  console.log("mark key exists in obj checked by key");
}
*/

// in operator is used in both array and object,
//in object it is used to check if a key exists in object or not irrespective of value
// and in array it is used to check if if an index has a value or not irrespective of (truthy and falsy nature of value )
//in operator in array is used to check if it is sparsed or not
/*

let arr = [1, , null, 4, undefined]; // Sparse array, no element at index 1
console.log(arr, "arr");
console.log(arr[1], "arr[1]");
console.log(arr.toString(), "to string"); //1,,,4, //  null and undefined are converted to empty string
let transformedArr = [];
for (let i = 0; i < arr.length; i++) {
  if (i in arr) {
    transformedArr.push(arr[i]);
  }
}
console.log(transformedArr, "transformedArr");
console.log(0 in arr); // true, there is an element at index 0
console.log(1 in arr); // false, no element at index 1
console.log(2 in arr); // true, there is an element at index 2
console.log(3 in arr); // true, there is an element at index 3
*/
// imp: related to `this`

//how to decide this  inside normal function
//first all all check how it is called
//if it is called with new keyword then this will a brand new object created from function itself (`this` objects __proto__ will be pointing to functions prototype that is empty object) and at the end of function execution `this will be returned`

//if it is called without new keyword then this will be pointing to the object  on which object the function is called and any modification done on `this` will be reflected on that object

/*
function user(name) {
  this.name = name;
  console.log(this.__proto__, "dyxgdxg");
}
const obj = new user("abc");

console.log(obj.__proto__ === user.prototype); // true
*/

//imp:: -------------------------------
/*
const obj = { method: user };

function user(name) {
  console.log(this === obj); // true
  this.name = name;
  console.log(this, "value of this");
}
obj.method("java script");
console.log(obj.name);
*/

/*
function myMethod() {
  this.userPassword = "123456";
  console.log(`my method called on  `, this);
}
const myObj = {
  userName: "ashif",
  myMethod,
};
// myObj.myMethod();
myObj["myMethod"]();
*/

/*
//Imp *******
var length = 20;
function count() {
  console.log(this.length);
}
const obj2 = [count, "A", 0]; //imp: at zero index count functions reference is stored
obj2[0](); //3, in js everything is object array is also an object 0 is key of method it is like obj2.method()
obj2?.[0]();//3
console.log(obj2["1"]); //A
*/

/*
//imp::  optional chaining

// whenever we try to access  accidentally a key on an undefined or null  it throws an error so to avoid this we use optional chaining
//if you try to access index value in a null or undefined array it will also throw an error so to avoid this we can use optional chaining

// examples
let obj = 9;
console.log(obj.__proto__, Object.getPrototypeOf(obj), "__proto__"); // {} {} __proto__

console.log(obj.name, obj[2]); //undefined undefined, not error as its prototype get created
obj = null;
// console.log(obj.__proto__, "__proto__");//error
// console.log(Object.getPrototypeOf(obj)); //Cannot convert undefined or null to object
// console.log(obj.name, obj[2]);// error

function getGrades() {
  return;
}
let grades = getGrades(); // expected array
// console.log(grades[0]); //Cannot read properties of undefined (reading '0')
console.log(grades?.[0]); // undefined rather than throwing error

//imp:: note option chaining can be used to access a method if exist on the object (but make sure if method exist it is function other wise calling will throw error)
const myObj = { name: "favorite" };
// console.log(myObj.printDetail()); // error
console.log(myObj.printDetail?.()); // undefined,myObj.printDetail was undefined so it returned undefined rather than continuing chain

myObj.printDetail = "im not function";
// console.log(myObj.printDetail?.());// threw error
*/

/*
let people = [
  { name: "John", age: id },
  { name: "Jane", age: 25 },
  { name: "Alice", age: 35 },
  { name: "Bob", age: 20 },
];
people.sort((a, b) => a.name.localeCompare(b.name)); // will fail for people2
console.log(people);
*/

/*

let people2 = [
  { name: "John", age: id },
  { name: "Jane", age: 25 },
  { name: "Alice", age: 35 },
  { name: null, age: 20 },
  { name: undefined, age: 40 },
  { age: 45 },
];

people2.sort((a, b) => {
  let nameA = a.name ?? ""; //handling null or undefined
  let nameB = b.name ?? "";
  return nameA.localeCompare(nameB);
});

console.log(people2);
*/

/*
// const grades = getData().grades
const grades = (Math.random() > 0.5 ? [id, 40, 50] : undefined) || [];

let newGrade = 80;

let updatedGrade = [newGrade, ...grades];

// let updatedGrade
// if(Array.isArray(grades)){
// updatedGrade=[...grades,6]
// }
// else{
//   updatedGrade=[6]
// }
*/

/*
const grades = Math.random() > 0.5 ? [id, 40, 50] : undefined;
console.log(grades);
let randIndex = Math.ceil(Math.random() * 10);
console.log(randIndex);
const grade = grades?.[randIndex]; // optional chaining in array
console.log(grade);
*/

/*
console.log(0 / 0); //NaN

console.log(Number.isNaN(0 / 0)); //true
*/

/*
function saveData(payload) {
  const { isNew, ...data } = payload;
  //here data has different ref than payload, and payload has same ref of  saveData called  with args
  data.address = "varanasi";
  payload.state="Uttar Pradesh"
  console.log(data);
}
const data = { isNew: false, name: "arif", age: 26 };
saveData(data);
console.log(data);
*/

/*
//handling isNew in single variable 
function saveData({ isNew, ...data }) {// here data has different ref as actual data on which this was called
  console.log({ isNew });
  data.address = "varanasi";
  console.log(data);
}
const data = { isNew: false, name: "arif", age: 26 };
saveData(data);
console.log(data);
*/
/*
//empty array and object are truthy value but conversion of empty  array  in string results empty string so inside if, it behave like truthy but when it is equated with false returns true , see below example

let arr = [];
// console.log(arr.toString()); //empty string
// console.log(!arr); //false
// console.log(!!arr); //true, boolean conversion is true as it directly converts not through string, other wise it returns false
// console.log(arr == true); //*** false ****
// console.log(arr == false); //*** true **** here both will be converted to number, arr=>""=>0, false=>""=>0 thats why true

let obj = {};
// console.log(obj.toString()); //empty string
// console.log(!obj); //false
// console.log(!!obj); //true
// console.log(obj == true); //*** false ****, here both will be converted to number, obj=>"Object object"=>NaN, true=>1 thats why false
// console.log(obj == false); //*** false ****, in array it was true
// console.log(arr == false); //*** true **** here both will be converted to number, arr=>""=>0, false=>""=>0 thats why true

console.log(arr == 0); //true
console.log(obj == 0); //false
console.log(arr == 1); //false
console.log(obj == 1); //false
//empty array ka number conversion 0 hota hai aur obj ka NaN
*/

/*
let arr = [1, 2, 3];
// arr.shift();
arr.unshift(8);
console.log(arr);
*/

/*
let num = 6;
let res1 = num.toString();
console.log({ num, res1 }); // num is number
let res2 = String(num);
console.log({  num, res2 });// still num is number
*/
/*
console.log(Boolean(-0)); //false
console.log(Boolean(-1)); // true
console.log(Boolean([])); //true
console.log(Boolean(String([]))); //false
*/

/*
//toString vs JSON.stringify()
let arr = [1, "2", [3, "4"]];
let message1 = ` my array is ${arr}`;// here actually concatenation taking place so in case of concatenation first both are being converted in string 
console.log(message1); //my array is 1,2,3,4
let message2 = ` my array is "${arr}"`;//same thing happened here
console.log(message2); //my array is "1,2,3,4"
//imp***********************
let message3 = `my array is ${JSON.stringify(arr)}`; 
console.log(message3);////my array is [1,"2",[3,"4"]]
*/

/*
let arr = [1, 2, 3, "a", "b", `c`];
let toStringStore = [];
let stringifyStore = [];
for (item of arr) {
  toStringStore.push(item.toString());
}
console.log(toStringStore); //[ '1', '2', '3', 'a', 'b', 'c' ], toString has no effect on strings values

for (item of arr) {
  stringifyStore.push(JSON.stringify(item));
}
console.log(stringifyStore); //[ '1', '2', '3', '"a"', '"b"', '"c"' ]
*/

/*
let user;
const name1 = user?.name || "default";
// const { name: name2 = "default" } = user; //error
const { name: name3 = "default" } = user ?? {};
console.log({ name1, name3 });
*/

/*
let isLoggedIn = false;
console.log(isLoggedIn ? "<h1>Welcome back!</h1>" : "<h1>Please sign up.</h1>");
// console.log(
//   if(isLoggedIn){
//     return "<h1>Welcome back!</h1>"
//   }
//   else{
//     return "<h1>Please sign up.</h1>"
//   }
// )
  */

/*
let arr = 9;
console.log(arr[0]);

let nameKey = "name";
const user = {
  email: "ag",
  [nameKey]: "arif",
};
console.log(user);
*/

//imp iife
/*
const res = (() => {
  return { name: "iife", email: "123" };
})();
console.log(res); //{ name: "iife", email: "123" };

const cachedAdder = (function () {
  let obj = {};
  return function MainCachedAdderFunctionCloserFormedWithObj(a, b) {
    let key = a + "" + b + "";
    if (obj[key]) {
      return obj[key];
    }
    console.log(`returning by calculating`);
    let sum = a + b;
    obj[key] = sum;
    return sum;
  };
})();
let a = 9,
  b = 10;
for (let i = 0; i < 5; i++) {
  if (i % 2 == 0) {
    a++;
  }
  let addedRes = cachedAdder(a, b);
  console.log(addedRes);
}
*/

/*
//IIFE and closure
let hiddenImportedCounter = (() => {
  let count = 0;
  const increMent = (a = 1) => {
    count += a * 5;
  };
  const decrement = (a = 1) => {
    count -= a * 3;
  };
  const getCount = () => count / 4;
  return { getCount, increMent, decrement };
})();
// IIFE is returning 3 methods now these all returned  methods will form  closure with
// there lexical scope (IIFE scope) and will be able to access realtime value of count
const counter = hiddenImportedCounter;
for (let i = 0; i < 5; i++) {
  counter.increMent(i);
}
console.log(counter.getCount());
*/

/*
const data = {};
let arr1 = [1, 2, 2, 3];
const unique = [
  ...new Set([...arr1, ...(Array.isArray(data.grade) ? data.grade : [])]),
];
console.log(unique); //[ 1, 2, 3 ]
*/

//obj destructuring and default assignment

/*
function useCounter({
  initialValue = 0,
  step = 1,
  min = -Infinity,
  max = Infinity,
} = {}) {
  console.log({ initialValue, step, min, max }); //{ initialValue: 0, step: 1, min: -Infinity, max: Infinity }
}
useCounter();
// but it will fail in case of useCounter(null) as null is valid argument for function and empty {} will not be assigned so now all data will be read from null (null has not prototype) so null.anything will throw error

useCounter(""); //only  in absence or undefined are invalid argument and default value s assigned  in case of function arguments empty string is also valid argument and "".anything returns undefined (as it has proto type )
*/

/*
function useCounter(data) {
  const {
    initialValue = 0,
    step = 1,
    min = -Infinity,
    max = Infinity,
  } = data ?? {};
  console.log({ initialValue, step, min, max });
}
useCounter(null); //{ initialValue: 0, step: 1, min: -Infinity, max: Infinity }
useCounter("");////{ initialValue: 0, step: 1, min: -Infinity, max: Infinity }
*/

/*
console.log(true.age); //undefined, only null and undefined throws error
*/

/*
function catchError() {
  try {
    getError();
  } catch (error) {
    console.log(error.message); //im error from get error function
  }
  // try catch of this function is enough to catch error of getError()
}
function getError() {
  throw new Error("im error from get error function");
}
catchError();
*/

/*
let arr = [];

let idsArr = ["1", "2", "3"];
console.log(idsArr.join());
let correctQuery = `select * from user where id in ${JSON.stringify(idsArr)}`;
let badQuery = `select * from user where id in ["${idsArr.join('", "')}"]`;
arr.push(correctQuery, badQuery);
console.log(arr);
*/

/*
var length = 1;
function checkThisConcept() {
  console.log(this);
  console.log(this.length);
}
let arr = [checkThisConcept, 1, 2, 3];
arr[0](); //4
*/

/*
var length = 1;
function checkThisConcept() {
  console.log(this);
}
let arr = { checkThisConcept: checkThisConcept, 1: 1, 2: 2, 3: 3 };
arr["checkThisConcept"](); //arr object
*/

/*
// console.log(!!NaN);//false,  Nan is a  falsy value
let arr = [1, 2, 5, 3, 4, 3, 5, 6];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = obj[arr[i]] + 1 || 1;
}
// console.log(obj);//{ '1': 1, '2': 1, '3': 2, '4': 1, '5': 2, '6': 1 }

for (let item of arr) {
  if (obj[item] > 1) {
    console.log(item);
    break;
  }
}
  */

/*
//sort an object by its key
const obj = {
  c: 3,
  a: 1,
  b: 2,
};
console.log({ obj });

let sorted = Object.keys(obj).sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
console.log(sorted);
sortedObject = sorted.reduce((acc, item) => {
  acc[item] = obj[item];
  return acc;
}, {});
console.log(sortedObject);
*/

/*
const obj = { 2: 2, 1: 2, 3: 4 };
console.log(obj);//{ '1': 2, '2': 2, '3': 4 } always if keys are number they will be sorted automatically 
*/

/*
const obj = { a: 1, c: 2, b: 3, d: 4 };
console.log(obj); //{ a: 1, c: 2, b: 3, d: 4 }
let sorted = Object.keys(obj)
  .sort()
  .reduce((acc, item) => {
    acc[item] = obj[item];
    return acc;
  }, {});
console.log(sorted); //{ a: 1, b: 3, c: 2, d: 4 }
*/

/*
function returnObj() {
  return { a: 1, c: 2, b: 3 };
}
console.log(returnObj());//{ a: 1, c: 2, b: 3 }, always
*/

/*
//tricky infinite loop
let flag = true;
setTimeout(() => {
  flag = false;
}, 0);
while (flag) {
  // flag will never be false cause this loop will not let be call stack empty ( that's why  event loop can not push call back in call stack )
  console.log(flag);
}
*/

/*
const sql1 = `select * from \`User\` ;`;
const sql2 = `select * from \`${"User"}\` ;`; //${"User"} this part is js and will be converted to string then will be concatenated so it is same as "user"+"user"=useruser
console.log(sql2); //select * from `User` ;
console.log(sql1 == sql2); //true
*/

/*
let a = { name: "abcd", age: 20 };
let b = a;
// now b can modify properties of a but if we reassign any value to b it will not affect to a
b.address = "up";
b = {};
console.log(a);//{ name: 'abcd', age: 20, address: 'up' }
*/

/*
//imp
// if b is referencing to a then assignment to either a or b both will break reference to each other
let a = { name: "abcd", age: 20 };
let b = a;
let newObj = {};
a = newObj;
//now a and b both are referencing to different different object , b is still referencing to old object but a is now referencing to new

b.address = "abcd"; // now this will not affect to a
*/

//imp async concept********************************
/*
function func1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("data1");
    }, 100);
  });
}

function func2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("data2");
    }, 200);
  });
}
function func3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("data3");
    }, id0);
  });
}
async function badResolver() {
  let start = new Date().getTime();
  const one = await func1();
  const two = await func2();
  const three = await func3();

  console.log(`${one}::${two}::${three}`);
  console.log(new Date().getTime() - start);
}

async function goodResolver() {
  let start = new Date().getTime();

  const dataOne = func1();
  const dataTwo = func2();
  const dataThree = func3();
  const one = await dataOne;
  const two = await dataTwo;
  const three = await dataThree;

  console.log(`${one}::${two}::${three}`);
  console.log(new Date().getTime() - start);
}
goodResolver(); // taking id0 millisecond only
// badResolver(); //600 milliseconds
*/

/*
const str1 = `LEFT JOIN \`${"AnyTable"}\``;// unnecessary ${}
const str2 = `LEFT JOIN \`AnyTable\``;
const arr = [];
arr.push(str1);
arr.push(str2);
console.log(arr); //[ 'LEFT JOIN `Patient`', 'LEFT JOIN `Patient`' ]
*/

/*
let arr1 = [1, 2, 3];
let arr2 = ["1", "2", "3"];
console.log([arr1.toString()]); //[ '1,2,3' ]
console.log([arr2.toString()]); //[ '1,2,3' ]

let user = {
  name: "asd",
};
console.log([JSON.stringify(user)]); //[ '{"name":"asd"}' ]
*/

// node js related concept *************************************************************************
/*
Key Differences between global and globalThis
Environment Compatibility:

global is specific to Node.js and will not work in browser environments.
globalThis works in both browsers and Node.js, making it a more versatile way to reference the global object.
Standardization:

globalThis was introduced in ECMAScript 2020 (ES11) to standardize the way the global object is accessed across different environments.
Usage in Code:

If you're writing code that is meant to run only in Node.js, you can use global to reference the global object.
If you aim for cross-environment compatibility, use globalThis to ensure your code works in both browsers and Node.js.
*/

/*
function myFunction() {
  //inside regular function this will point either global(object) or object on which the function is called
  console.log(globalThis === global); //true
  console.log(this === global); //true
  console.log((globalThis == this) == global); //false, now you have to find reason
}
myFunction(); // this inside function "myFunction" will refer to global(object) but in global scope this points to an empty object
console.log(this); //{}
*/

/*
var a = 50; // its scope is module scope not global
console.log(globalThis.a); // undefined

//reason
Node.js Module Scope: In Node.js, each file is treated as a separate module. Variables declared with var, let, or const at the top level of a module are scoped to that module and do not become global properties.
Global Object: Only explicitly assigned properties to global or globalThis will become global properties in Node.js.
*/

/*
const appleOnTheTree = {
  a: 100,
  print1: function () {
    console.log(this.a); //100
  },
  print2: () => {
    console.log(this); //50 in browser environment, but here in nodejs environment it is like this in global scope and in global scope this is {}
  },
  print3: function () {
    (() => {
      console.log(this.a); //100
    })();
  },
};

appleOnTheTree.print1();
appleOnTheTree.print2();
appleOnTheTree.print3();
*/

/*
let obj = {};
// obj ? console.log("obj is truthy") : console.log("obj is falsy");
// console.log(obj == true); //false, reason type coercing (finally comparing NaN==1)
// console.log(obj == false); //false, reason type coercing (finally comparing NaN==1)
// console.log(!!obj === true); //true, !! operator gives boolean equivalent of its operand
// console.log(NaN == obj, NaN == false, NaN == undefined, NaN == NaN);// all false
*/

//&& operator
/*
let find = false;
const res = true && "default"; // && operator searches for falsy value in a chain as it is it found falsy value it return that if not found last one is returned without check so last one is like a fallback
console.log(res); // "default"

let arr = [];
console.log({} && false && "default"); //false
const res2 = true && arr.push(5);
console.log({ arr, res2 }); //{ arr: [ 5 ], res2: 1 }, arr.push returns length of arr after pushing
*/

/*
let str = "im string";
let flag = true;
flag ? (str += " true") : (str += " false");
console.log({ str }); //{ str: 'im string true' }
*/

/*
function getUpdatedData(num) {
  setTimeout(() => {
    num = num * 5;
    return num;
  }, 200);
}
console.log(getUpdatedData(3)); // undefined
*/

/*
let arr = [1, 2, 3, 4];
let res = arr.filter((item, ind) => ind);
console.log(res); // [ 2, 3, 4 ]
*/

/*
let arr = [1, 2, 3, 4];
let res = arr.map((item, ind) => ind);
console.log(res); //[ 0, 1, 2, 3 ]
*/
/*
let arr = [1, 2, 3, 4];
let res = arr.map(async (item, ind) => ind);
console.log(res); //[ 0, 1, 2, 3 ]
*/

////////////////////////////////imp
/*
let arr = [1, 2, 3, 4];
let res = arr.filter(async (item, ind) => ind);//[ 1, 2, 3, 4 ]
//cb 'async (item, ind) => ind' (its return value is a promise for each item and promise is being treated as truthy value
console.log(res);
*/

/*
//now your task is that even it is a promise based on resolve value you have to filter elm
let arr = [1, 2, 3, 4];
let res = arr.filter(async (item, ind) => {
  return ind;
}); //[ 1, 2, 3, 4 ]

console.log(res);
*/
/*
function doSomething(q) {
  console.log(`done`, q);
}
let flag = true;
let met = (() => {
  console.log(`ran 1`);
  flag = false;
  return doSomething;
})();
console.log(`ran2`);
flag || met(6);

*/
/*
function add() {
  let a = (b = 5);
}
add();
console.log(b); //5
console.log(a);
*/

/*
const user = {
  name: "",
  email: 123,
};
let res = user.name === "" && delete user.name; //delete user.name; it returns true
console.log(res);
console.log(user);
*/

/*
const user = {
  name: "",
  email: 123,
};
user.name || delete user.name; //delete user.name; it returns true
console.log(user);
*/

/*
(() => {
  let arr = []; //possibility of null and undefined
  const isNew = arr?.length > 0 ? false : true;
  const betterIsNew = !arr?.length;
  console.log({ isNew, betterIsNew }); //{ isNew: true, betterIsNew: true }
  console.log(!!arr); //true
  console.log(arr == true); //false
})();

let myfunc = (() => {
  let count = 0;
  return () => {
    count++;
    console.log({ count });
  };
})();

myfunc();
*/

// proto types

/*

// constructor function , can not use arrow function

function UserFunc(name, email) {
  this.name = name;
  this.email = email;
}
console.log(Function.prototype === Function.__proto__); //true, it is like module.exports and exports, both pointing same object
console.log(UserFunc.__proto__); //{}, same as prototype of Function
const funcUser1 = new UserFunc("a", "a@gmail.com"); // false
console.log(funcUser1); //{ name: 'a', email: 'a@gmail.com' }
console.log(funcUser1.__proto__ === Function.prototype); //false, funcUser1.__proto__ deep copy of Function.prototype, same in value but not in reference
*/

/*
// classes can be used in place of constructor function
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
console.log(User.__proto__, User.prototype); //{},{} but not same by reference
const user1 = new User("a", "a@gmail.com");
console.log(user1.__proto__); //{}, like it created fom a function
console.log(user1); //{ name: 'a', email: 'a@gmail.com' }
// */

/*
const literalUser = {
  name: "a",
  email: "a@gmail.com",
};
console.log(literalUser); //{ name: 'a', email: 'a@gmail.com' }
console.log(literalUser.__proto__ === Object.prototype, "from here"); // true, both hasa same ref
console.log(Object.prototype); //[Object: null prototype] {}
console.log(literalUser.__proto__);
console.log(Object.keys(literalUser));
*/

/*
const user1 = { name: "a", email: "a@gmail.com " };
const user2 = { name: "b", email: "b@gmail.com " };
function printDetail() {
  console.log("my detail  ", "name =>", this.name, "email=>", this.email);
}
printDetail.call(user1);
*/

// destructuring***************
/*
let list1 = [1, 2, 3];
let list2 = [list1[0], list1[1]]; //destructuring does this and nothing
let list3 = [...list1]; // it is same as let list3=[] then list1.forEach(item=>list3.push(item))// and now if item is reference type so list3 will hold the same reference that list one holds
let list4 = list1;
console.log(list1 === list4, list1 === list2, list1 === list3); //true false false
*/

/*
const arr1 = [
  { name: "arif", email: "arif1@gmail.com" },
  { name: "taslim", email: "taslim@gmail.com" },
];
const arr2 = [...arr1];
arr2[0] = {};
arr2[1].age = 33;
console.log(arr1);                                           //[{ name: 'arif', email: 'arif1@gmail.com' },{ name: 'taslim', email: 'taslim@gmail..com', age: 33 }]
console.log(arr2);                                           //[ {}, { name: 'taslim', email: 'taslim@gmail.com', age: 33 } ]

// explanation arr1 has a reference of an array and its index has also stored reference not value
//arr2= [...arr1], here destructuring broken the reference of array, not elements so both array has different array reference but both arrays element has references of same elements, if ones modified element it will be modifying same element
*/

/*
const arr1 = [
  { name: "arif", email: "arif1@gmail.com" },
  { name: "taslim", email: "taslim@gmail.com" },
];
const arr2 = [...arr1]; // arr2[0]=arr1[0], arr2[1]=arr1[1]

arr2[0] = { name: "shama", email: "shama@gmail.com" }; // arr2[0] has got  a brand new object with completely new ref

arr2[0].age = 25; // it is not going to affect arr1[0] element

arr2[1].name = "updated"; // arr2[1] has same reference as arr1[0], coz object are referenced type, so it will update arr1[0] element too

console.log(arr1[0]); //{ name: 'arif', email: 'arif1@gmail.com' }

console.log(arr1[1]); //{ name: 'updated', email: 'taslim@gmail.com' }
*/

//imp=> basic rule of destructuring, if you are destructuring an array then use array and if you are destructuring an object literal then use object literal, use : to rename variable = to provide default parameters

//? ex
/*
let user = [
  { status: "success", value: 1 },
  { status: "fail", reason: "rejected" },
]; // destructure value from user, if value not present use default value and rename value1 , value2 respectively

const [
  { status: status1, value: value1 = "default" },
  { status: status2, value: value2 = "default" },
] = user;
//explanation user was an array so made an array for destructuring, now inner destructuring , user[0] is an object so used object for inner destructuring
console.log({ status1, value1, status2, value2 }); //{ status1: 'success', value1: 1, status2: 'fail', value2: 'default' }
*/

/*
(async () => {
  const [{ value }, { value: value2 }] = await Promise.allSettled([
    Promise.resolve(3),
    Promise.reject(3),
  ]); //[  { status: "fulfilled", value: 3 },  { status: "rejected", reason: 3 }]; this was returned by await
  console.log(value,value2);//2 undefined
})();
*/

/*
const order = [
  { id: 1, count: 10, price: 50 },
  { id: 3, count: 1, price: 0 },
];
const user = [
  { id: 1, name: "user1" },
  { id: 2, name: "user1" },
  { id: 3, name: "user1" },
];
task insert total field in user from order
// M1=> nested loop
user.forEach(({ id }, ind) => {
  const index = order.findIndex(({ id: userId }) => id === userId);
  const { count, price } = order[index] ?? {};
  const total = count * price || 0;

  user[ind].total = total;
});

m2, we will leverages objects O(1) search capability
in m1, two loops were nested so time complexity for m1 is O(n squire) and for m2 it is O(n)

learning whenever an array say  array A is searching some elements in an another array say array B 
by looping on array A, just create an object of array be and find via key

const orderIdObject = order.reduce((acc, { id, ...curr }) => {
  acc[id] = { ...curr };
  return acc;
}, {});

user.forEach((item, ind) => {
  const { price, count } = orderIdObject[item.id] ?? {};
  item.total = price * count || 0;
});
console.log(user);
*/

//?: thumb rule of try catch

//imp: until and unless thrown error or promise rejection is not brought in try catch scope it will not handle that error

//? rejection of a promise or error thrown by promise is not handled by try catch block
//? but both (rejection or thrown error by promise) is handled by .catch method over that promise
//imp: (without await rejection of a promise can not be brought inside try catch of a promise ),
// imp,: rejection of a promise can be handled by try catch only and only if await is used before that promise(await will bring rejection in to  try catch scope)

//? example 1
/*
const prom = new Promise((res, rej) => {
  // throw "hbh";
  rej("message")
}).catch((e) => console.log(e)); //hbh
*/

//? example 2
/*
(() => {
  try {
    const prom = new Promise((res, rej) => {
      throw "hbh";
      // rej("message")
    });
  } catch (error) {
    console.log(`i can not handle error thrown by prom`);
    // imp,: i can not handle error thrown by prom coz error is not being brought in my (try catch ) scope
    //IMP : NOTE async functions await before a promise brought error in my(try catch) scope so that works
  }
})();
*/

/*
(async () => {
  try {
    const prom = await new Promise((res, rej) => {
      throw "hbh";
      //rej("message")
    });
  } catch (error) {
   //now i can  handle error thrown by prom coz await will bring error in my scope 
    console.log(
     error.message
    );
  }
})();
*/

/*
(() => {
  function errorFunction() {
  let user 
    user.age;// error will be thrown
    // throw "error thrown by inner";
  }

  function outerFunc() {
    try {
      let user = "wert";
      errorFunction(); //? this call brings error of errorFunction in try catch scope
      //?: so easily error thrown by errorFunction will be  caught by outerFuncs try catch block
    } catch (error) {
      console.log(error.message); //? Cannot read properties of undefined (reading 'age')
    }
  }

  outerFunc();
})();
*/

// (() => {
//   function errorFunction() {
//     undefined.data;
//   }

//   function outerFunc() {
//     try {
//       let user = "wert";
//       errorFunction(); //? this call brings error of inner function  in try catch scope
//     } catch (error) {
//       console.log(`i ran`);
//       console.log(error);
//     }
//   }

//   outerFunc;
// })();

/*
(() => {
  const data = Promise.resolve("resolved");
  console.log(data); //? Promise { 'resolved' }
})();
*/

// (() => {
//   const data = Promise.reject("rejected");
//   console.log(data); //? error
// })();

/*
(() => {
  const data = Promise.reject("rejected").catch((e) => e);//?error handled by .catch and now returned value of catch as a promise will be returned
  console.log(data); //Promise { <pending> }
})();
*/

/*
(async () => {
  const data = await Promise.reject("rejected").catch((e) => e);
  console.log(data); //rejected
})();
*/

/*
(async () => {
  try {
    const data = await Promise.reject("rejected");
    console.log(data, "i will not execute");
  } catch (error) {
    console.log(error); //rejected
  }
})();
*/

/*
(async () => {
  try {
    const data = await Promise.reject("rejected").catch((e) => {
      //? if await is used then returned value of catch is achieved in data
      //? otherwise promise of returned value of catch
      console.log(
        `i handled catch and did'nt returned any thing so you will get undefined 1`
      );
    });
    console.log(data, "5th");
  } catch (error) {
    //?will not execute
  }
})();
*/

/*
(async () => {
  try {
    const data = Promise.reject("rejected").catch((e) => {
      //? if await is used then returned value of catch is achieved in data
      //? otherwise promise of returned value of catch
      console.log(
        `i handled error using .catch and catch  did'nt returned any thing so you will get promise containing undefined as i don't used await`
      );
    });
    console.log(data, ",abc 2nd"); // Promise { <pending> } ,abc 2nd
  } catch (error) {
    // will no execute
  }
})();
*/

/*
  // imp, let me guess order of console  for both  function
  (async () => {
    try {
      Promise.reject("rejected").catch((e) => {
        console.log("1");
      });
      const res = await Promise.reject(
        "after starting my execution  control will go out, thats why 10 is being printed before 4"
      ).catch((e) => {
        console.log("10");
        return 20;
      });
      console.log(res);
      console.log("2");
    } catch (error) {}
  }
)();

console.log(`3`);

(async () => {
  try {
    Promise.reject("rejected").catch((e) => {
      console.log("4");
    });
    console.log("5");
  } catch (error) {}
})();
*/

/*
async function asyncFunc() {
  throw new Error("error thrown by asyncFunc");
  //note:- if an async function throws error it is equivalent to
  // return Promise.reject(new Error("error thrown by asyncFunc"));
}
asyncFunc().then(null, (e) => console.log(e.message));
*/

/*
// imp, async callback inside map
async function asyncMap() {
  try {
    const arrOfArr = [["1"], ["3"], ["4"], ["5"]];
    const updated = arrOfArr.map(async ([item]) => {
      const res = await Promise.resolve(2);
      if (item % res === 0) {
        throw new Error("throwing error ");
        //note:- if an async function throws error it is equivalent to Promise.reject("threw error")
      }

      return item + 1;
    });
    const updatedRes = await Promise.allSettled(updated);
    console.log(updatedRes);
  } catch (error) {
    console.log(` successfully caught threw error`);
    console.log(error.message);
  }

  // as per my experience try catch don't handle promise rejection (it handles only with await )
  //if there is an array of promise and it contains some rejected promise and not any promise method (except that auto handle rejection like all settled , race) is used with await  then catch of try catch block will fail to handle error and it will break all our code 
}
asyncMap();
*/

/*
async function asyncReduce() {
  try {
    const arrOfArr = [1, 2, 3, 4, 5];
    const updated = arrOfArr.reduce(async (acc, curr) => {
      let res = await acc;
      res += curr;
      return res; 
      // return value of an async function is always a promise
      // async function returns promise so no need of promise.resolve(res), and if an async func returns promise that also behave same or you can say converting a promise in promise has no effect
    }, Promise.resolve(0));
    // note inner async and outer async has no relation ship both are totally independent
    await Promise.resolve(7);
    console.log("i will be logged before completing loop "); //coz there is no await before me on outer async that waits loop to be completed
    const updatedRes = await updated;
    console.log({ updatedRes });
    console.log("i will be logged after completing loop "); // coz await of outer waits till loop completed
  } catch (error) {
    console.log(` successfully caught threw error`);
    console.log(error.message);
  }
}
asyncReduce();
*/

/*
const myPromise = new Promise((res) => {
  setTimeout(res, 1000, 5);
});
Promise.resolve(myPromise).then((data) => {
  console.log(data); //5,
  //rather than getting myPromise (as data of .then ) we will get resolved value of myPromise coz Promise.resolve will be resolved by resolved value of myPromise, rather than myPromise

  //this same concept is applied in case of async function when we return a promise
});
async function asyncFunc() {
  return new Promise((res) => {
    setTimeout(res, 100, 10);
  });
}
asyncFunc().then((data) => console.log(data)); //10
*/

/*
//imp => if .catch is applied on a promise then await is applied on return value of .catch if promise rejected

//imp => if .then is applied on a promise then await is applied on return value of .then if promise resolved

(async () => {
  const res = await Promise.resolve(5).then((data) => data + 5); // here await is applied on return value of .then (thats why we get 10 rather than 5) rather than Promise.resolve, and we know .then returns a promise,
  console.log({ res }); //{ res: 10 }

  const res2 = await Promise.reject(5).catch((e) => "rejected");
  console.log(res2); //rejected
})();
*/

/*
//imp error thrown by promise is equivalent to rejecting the promise

const promise = new Promise((res, rej) => {
  throw "error thrown by promise"; // equivalent to   rej("error thrown by promise");
});
promise.then(null, (e) => console.log(e)); //error thrown by promise
*/

// imp, => if an async function throws error , and this async is being called (without await) inside try block of try-catch , catch will not handle error coz threw error of async will be returning a rejected promise , while a normal function throwing error is called inside try block of try-catch, catch gracefully  will catch error

//? example
/*
async function asyncFunc() {
  throw "async threw error";
}
(async () => {
  try {
    asyncFunc();
  } catch (error) {
    console.log(error);
  }
})(); //UnhandledPromiseRejection
*/

/*
function normalFunc() {
  throw "normal func threw error";
}

(() => {
  try {
    normalFunc();
  } catch (error) {
    console.log(error); //normal func threw error, gracefully caught by catch
  }
})();
*/

/*
function normalFunc() {
  const inner = () => {
    throw "inner of normal threw error";
  };
  inner();
  return 5;
}

(() => {
  try {
    let res = normalFunc();
    console.log({ res });// will not run 
  } catch (error) {
    console.log(error); //inner of normal threw error, gracefully caught by catch
  }
})();
*/
/*
function normalFunc() {
  setTimeout(() => {
    throw "error thrown by set timeout"; // this is not return of inner
  }, 100);
}

(() => {
  try {
    let res = normalFunc();
    console.log({ res }); //{ res: undefined }
  } catch (error) {
    console.log(error); // wil not handle
  }
})();
*/

/*
try {
  function normalFunc() {
    try {
      setTimeout(() => {
        throw "error thrown by set timeout"; // this is not return of inner
      }, 100);
    } catch (error) {
      console.log(error); // it will also not handle
    }
  }

  (() => {
    try {
      let res = normalFunc();
      console.log({ res }); //?{ res: undefined }
    } catch (error) {
      console.log(error); //? wil not handle
    }
  })();
} catch (error) {
  console.log(error)//? it is also not handling
}
*/

/*
try {
  function normalFunc() {
    try {
      setTimeout(() => {
        try {
          throw "error thrown by set timeout"; // this is not return of inner
        } catch (error) {
          console.log(`from here `); //? from here  , only this is capable to handle error of set time out
        }
      }, 100);
    } catch (error) {
      console.log(error); //? it will also not handle
    }
  }

  (() => {
    try {
      let res = normalFunc();
    } catch (error) {
      console.log(error); // wil not handle
    }
  })();
} catch (error) {
  console.log(error); // it is also not handling
}
*/

/*
function normalFunc() {
  const inner = () => {
    setTimeout(() => {
      return 5;//? this is not return of inner function 
    }, 100);
  };
  return inner();
}

(() => {
  try {
    let res = normalFunc();
    console.log({ res }); //{ res: undefined }
  } catch (error) {
    console.log(error); 
  }
})();
*/

/*
const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise resolved");
  }, 100);
  throw "error thrown by promise"; // equivalent to   rej("error thrown by promise");
});
promise.then(
  (data) => console.log(data), // will not execute
  (e) => console.log(e) //? error thrown by promise
);

let listCond = "ORDER BY NAME";
let dataLimit = Math.random() > 0.5 ? 10 : undefined;
listCond += ` LIMIT ${dataLimit ?? 1}`;

console.log(listCond);
*/

/*
(async () => {
  const res = await Promise.all([1, 2, Promise.resolve(6), null, undefined]);
  console.log(res);//[ 1, 2, 6, null, undefined ]
})();
*/

// ?,  .catch method on a promise is not needed in case of try catch with await keyword

// imp, => use of .catch method on a promise with await (inside async function with try catch)
// imp, => suppose u have 3 promises to resolve now requirement is that you want that if second one is rejected, do not move control to catch block and in res of second promise store undefined or something else, then use .catch on second promise and return any desired value (that you want to store in res of second promise)

/*
const promFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(reject, 100, "rejected");
  });
};

(async () => {
  try {
    await promFunc();
    console.log({ res }); // will not logged
  } catch (error) {
    console.log(error, "=> without catch");
  }
})();

(async () => {
  try {
    const res = await promFunc().catch((e) => e);
    console.log({ res }); // only this one will be logged
  } catch (error) {
    console.log(error, "=> catch with return "); // will not run, coz await will be applied on return value of .catch (.catch returns a promise)
  }
})();

(async () => {
  try {
    const res = await promFunc().catch((e) => {
      throw e;
    });
    console.log({ res }); // will not logged
  } catch (error) {
    console.log(error, "=> catch with throw");
  }
})();

*/

/*
(async () => {
  try {
    const prom = Promise.reject("rejected");
    const res = await Promise.all([prom]);
    console.log(res);
  } catch (error) {
    console.log(
      `if on promise any other method like all or allSettled are used then try catch will handle error without await or catch on actual promise`
    );
  }
})();
*/

/*
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

// arrays are object in js (a special type of object)

// here i'm doing same, borrowing filter method from "[]" object then calling that method for obj "iterable"
let iterable = [1, 2, 3, 4, 5];
let res = [].filter.call(iterable, (a, i) => {
  return a % 2;
});
console.log(res);
*/

//imp related to this
/*
function printDetail() {
  console.log(`${this.name} :: ${this.email}`);
}
let user = {
  name: "qa",
  email: "qa@email.com",
  printDetail,
};
// this depends on final invocation of function
user.printDetail(); //qa :: qa@email.com
*/

/*
function printDetail() {
  console.log(`${this.name} :: ${this.email}`);
}
let user = {
  name: "qa",
  email: "qa@email.com",
  printDetail() {
    console.log(`${this.name} :: ${this.email}`);
  },
};
// this depends on final invocation of function
user.printDetail(); //qa :: qa@email.com
const storedDetail = user.printDetail;
storedDetail(); //undefined :: undefined
// user.storedDetail(); //TypeError: user.storedDetail is not a function,
const storedAndBindDetail = user.printDetail.bind(user);
storedAndBindDetail(); //qa :: qa@email.com

storedAndBindDetail.call({ name: "ab", email: "ab@email.com" }); //?qa :: qa@email.com, interesting bound can not be referenced with other this
let stored = storedAndBindDetail.bind({ name: "ab", email: "ab@email.com" });
stored(); //? qa :: qa@email.com
*/
//imp
/*
// indexOf vs  findIndex
// indexOf is used when element is known , findIndex when element is not known and element has to pass a test (like greater than 5)
//example 
let arr = [1,2,3]
// if some one says find index of 2 we will use indexOf , if some one says find index of element that is greater than 1 in that case findIndex
*/

/////////////////////////////////////////////////////////////////////////////////

//imp about promise .then
/*
const myPromise = new Promise((res) => {
  setTimeout(res, 100, "success");
});

// immediateResOfThenOnAPromise is derived promise from `myPromise` whose resolve time and value is same as original promise (myPromise) with extra feature
const immediateResOfThenOnAPromise = myPromise.then((res) => {
  console.log(`res inside .then => ${res}`);
  return res;
});
console.log(immediateResOfThenOnAPromise);
// result will be same for immediateResOfThenOnAPromise.then and myPromise.then (means both are like same promise) but `immediateResOfThenOnAPromise` giving us utility to do some extra thing just before resolve then returning same promise with same resolve value

immediateResOfThenOnAPromise.then((data) =>
  console.log(`res from immediateResOfThenOnAPromise=> ${data}`)
);
myPromise.then((data) => console.log(`res from simple promise=> ${data}`));
// immediateResOfThenOnAPromise, it will resolve (or say its .then will be pushed in task que) just after .then of myPromise is pushed and invoked inside call stack from micro task que
// that's why it's (immediateResOfThenOnAPromise) .then running after complete execution of .then of myPromise (call stack should be empty to push .then of immediateResOfThenOnAPromise ) irrespective  order in which they are written
*/

//imp Promise
//? except passing array of promise inside Promise.all pass mapped array of same promise inside promise.all it will provide utility to add some  extra feature on resolving each promise
/*
function promiseCreator(timer, resVal) {
  return new Promise((res) => setTimeout(res, timer, resVal));
}
function allWithMap(proms) {
  return Promise.all(proms.map((prom) => prom.then((res) => res)));
}
const proms = [
  promiseCreator(100, "val1"),
  promiseCreator(id0, "val2"),
  promiseCreator(200, "val3"),
];

allWithMap(proms).then((res) => console.log(res)); //[ 'val1', 'val2', 'val3' ]
*/

/*
console.time("total execution time"); // it will create a reference for time end
function promiseCreator(timer, resVal) {
  return new Promise((res) => setTimeout(res, timer, resVal));
}

function allWithMap(proms, timeTracker) {
  let count = 0;
  return Promise.all(
    proms.map((prom) => {
      return prom.then((res) => {
        // return in this line is for map method
        count++; // this is extra thing im incrementing count whenever any promise is resolving
        timeTracker(count, proms.length);
        return res; // return here is for .then so that newly created promise (using .then) has exactly same resolve value for each  promise of proms from which it is being created
      });
    })
  );
}
const proms = [
  promiseCreator(1000, "val1"),
  promiseCreator(id00, "val2"),
  promiseCreator(2000, "val3"),
];
const timeTracker = function trackCountOfResolvedPromise(count, promsLength) {
  const completePercent = ((count / promsLength) * 100).toFixed(2) + "%";
  console.log(completePercent);
};
allWithMap(proms, timeTracker).then((res) => {
  console.log(res);
  console.timeEnd("total execution time");
}); //[ 'val1', 'val2', 'val3' ]
*/

/*
function promiseCreator(timer, resVal) {
  return new Promise((res) => setTimeout(res, timer, resVal));
}
function allWithMap(proms) {
  return Promise.all(proms.map((prom) => prom.then((res) => res)));
  //working 
  //map will call (dhadaa dhad) to its call back function for each promises of proms & immediate return value (that is promise) of map's cb will be stored in an array and the same array will be returned as result of map thus Promise.all has exactly same thing what it expects 
  //each invoked callback of map will call promise api of web that will push .then in callback que of micro task (which one will resolve first), thus these promises (actual promises) will run concurrently and as soon as .then will run of a  promise, inside array of promise.all respective promise (whose .then was invoked )will also get resolved
}
const proms = [
  promiseCreator(100, "val1"),
  promiseCreator(id0, "val2"),
  promiseCreator(200, "val3"),
];

allWithMap(proms).then((res) => console.log(res)); //[ 'val1', 'val2', 'val3' ]
*/

/*
//closure
function Adder(addBy) {
  return {
    sum: () => arguments[0] + addBy, //this sum method is creating closure over Adder due to arguments and addBy variable
  };
}

const myAdder1 = new Adder(2);
const myAdder2 = new Adder(5);
console.log(myAdder1.sum(6)); //4, sum method will run in its declared environment and will access addBy and arguments from Adder Function due to closer
console.log(myAdder2.sum(6)); //10

let myObj = {
  sum: () => arguments[0],
};
console.log(myObj.sum.bind(6)());
*/
// Array.prototype.filter = function (cb) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     let res = cb(this[i]);
//     arr.push(this[i]);
//   }
//   return arr;
// };
/*
let func1 = async (data) => {
  try {
    let c = data.xyz;
  } catch (err) {
    console.log(err.message);
  }
  return true;
};

let func2 = async (data) => {
  try {
    let c = data.xyz;
    return true;
  } catch (err) {
    console.log(err.message);
    return true;
  }
};

func1().then((val) => {
  console.log(val);
});
func2().then((val) => {
  console.log(val);
});
*/

/*
let func = async (data = {}) => {
  try {
    let c = data.xyz;
    const res = await Promise.reject("rejected").catch((err) => err);
    console.log({ res });
  } catch (err) {
    console.log(err.message);
  }
  return "out";
};
func().then((val) => {
  console.log(val);
});
*/

/*
// imp Nested Destructuring
//https://najm-eddine-zaga.medium.com/top-javascript-best-practices-cf897022b6fd
//? You can destructure nested objects or arrays, which can simplify accessing deeply nested data.
const user = { profile: { name: "Md arif", age: 25 } };
const { profile: data } = user; //here data will be ref of { name: "Md arif", age: 25 } and this (means data ) further can be  destructured

// extract name as userName and age  from user  object
const {
  profile: { name: userName, age },
} = user;
console.log({ userName, age }); // { userName: 'Md arif', age: 25 }
*/

// imp prototype based task
/*
function Bird() {}
Bird.prototype.printLeg = function () {
  console.log(`it has two log`);
};
function Owl() {}
const owlInstance = new Owl();
//task=> owlInstance.printLeg(); should access the printLeg function from Bird's prototype (if it is not present in Owl's prototype), basically inheritance (without using class concept)
// ex, owlInstance.printLeg(); // it should print `it has two log`, ie call  the printLeg function of Bird constructor function,at this moment throwing error

// console.log(Owl.prototype.__proto__ === Object.prototype);//true
// Owl.prototype.__proto__ = Bird.prototype;
// owlInstance.printLeg(); // it has two log
// console.log(Owl.prototype.__proto__ === Object.prototype); //false
// console.log(Owl.prototype.__proto__.__proto__ === Object.prototype); //true


// some random approaches

//attempt1
// Owl.prototype = Bird.prototype;// failed, in prototype obj we  can modify / add properties and methods, we cant change the ref or say cant assign brand new object
// owlInstance.printLeg();

// attempt-2
// Owl.prototype = function printLeg() {
//   console.log(`it has two log`);
// };
// owlInstance.printLeg(); // doing same mistake

// attempt-3
// Owl.prototype.printLeg = function printLeg() {
//   console.log(`it has two log`);
// };
// owlInstance.printLeg();
//any how  attempt 3 worked, but it is not  good and scalable

//attempt-4
// Owl.prototype.__proto__ = Object.create(Bird.prototype);
// owlInstance.printLeg(); // it has two log
// this is the good and scalable way to do it, but it is not recommended in modern js

// attempt-5
// console.log(Owl.prototype.__proto__ === Object.prototype);//true
// Owl.prototype.__proto__ = Bird.prototype;
// owlInstance.printLeg(); // it has two log
// console.log(Owl.prototype.__proto__ === Object.prototype); //false
// console.log(Owl.prototype.__proto__.__proto__ === Object.prototype); //true
*/

//recursion
/*
function printNumberRecursively(n) {
  if (n === 0) return;
  console.log(n);
  printNumberRecursively(n - 1);
  console.log(`i will be running in reverse order ${n}`);
}
printNumberRecursively(5);
*/

/*
5
4
3
2
1
i will be running in reverse order 1
i will be running in reverse order 2
i will be running in reverse order 3
i will be running in reverse order 4
i will be running in reverse order 5
*/
/*
function printNumberRecursively(n) {
  if (n === 0) return;
  console.log(n);
  console.log(`start`);
  printNumberRecursively(n - 1);
  console.log(`middle`);
  printNumberRecursively(n - 1);
   console.log(`last`);
}
printNumberRecursively(3);
*/

//imp .catch on promise inside  async/await with and without try catch block and with and without await

(async () => {
  /*
  let res = await Promise.reject("rejected deliberately").catch(
    (e) => "from catch"
  );
  //await applied on .catch
  console.log(res); //from catch
*/
  /*
  res = await Promise.resolve("resolved deliberately").catch(
    (e) => "from catch"
  );
  console.log(res); //resolved deliberately
  // await applied on promise, not on catch
*/
  // res = await Promise.reject("rejected deliberately").catch((e) => {
  //   throw new Error();
  // });
  //broken code
  /*
  try {
    res = await Promise.reject("rejected deliberately").catch((e) => {
      throw new Error("tufted");
    });
    console.log(`i will not be running ${res}`); //did'nt execute
  } catch (error) {
    console.log(error.message); //Error: tufted
  }
    */
  //await applied on .catch on above snippet
  /*
  try {
    res = Promise.reject("rejected deliberately").catch((e) => {
      throw new Error("tufted");
    });
    console.log(`i will  be running ${res}`); //i will be running [object Promise], .catch of promise is not awaited (or say will be executed async way , before that try catch will get executed)
  } catch (error) {
    console.log(error.message); // imp did'nt execute, reason is .catch is not awaited, it will be pushed in microtask que bu .catch Api, call stack will execute its next peace of code , so this will end execution of complete code (including try catch )and then cb of .catch will be pushed in call stack now try catch isn't available so its thrown error  will not be handled and  will break code
  }
    //this is breaking our code even we used try catch
  */
})();

//Imp this keyword in constructor function and in class and in normal function //////////////////////////////////////////
//imp  this inside a Normal function completely depend on how the function is being invoked /////////////////////////////
/*
function spFunction(a) {
  return this;
}
const this1 = spFunction(); // global window
const this2 = spFunction(); // global window
console.log(this1 === this2); // true

const this3 = new spFunction(); //
const this4 = new spFunction(); //
console.log(this3 === this4); // false

// for instances this3 and this4, 'this' of spFunction will be different different
// for each instances, constructor function has different different `this`
//imp when a function is invoked with new keyword, it creates separate-separate  this for each invocation of that function and  adds all properties and method in `this`and return that this, same thing happens in class 
function User(name) {
  this.name = name;
  this.printName = () => console.log(this.name);
  this.printName2 = function () {
    console.log(this.name);
  };
}
const user1 = new User("abc"); // this inside User will be user1 object, for user1 instance, now if any method (arrow method ) of user1 is called, this inside that method will be user1 object coz this will be inherited from User function and User function's this is user1 object for user1 instance
const user2 = new User("def");

const pr = user1.printName;
// for user1 and user2 this of User will be different different
pr(); // int this case `this` will be user1 object for User function, when print detail will look this inside User function it will found that object as this

// user1.printName2(); //abc, inside printName2 user1 object is specified as this

const tr = user1.printName2;
tr(); //imp undefined, printName 2 is normal function so here the function was expecting specified this but it did'nt get, so it will not look this in its parent scope, it will look global scope and will print undefined
*/

/*
// rest and spread
// rest parameter is used to pass variable number of arguments to a function
//if you are not sure with how many arguments function will be called , you can use rest parameter
//it will take all arguments and store them in an array
let arr = [1, 2, 3, 4];
function rest1(...rest) {
  //rest concept applied, one array of all passed args, so it made array of array as array was passed
  console.log(rest, "rest1"); //
}
rest1(arr);
//--------------
function rest2(...rest) {
  //rest concept applied, one array of all passed args, so it made array of all passed args
  console.log(rest, "rest1"); //
}
rest2(...arr);
//--------------

let scores = [1, 2, 3];

let [a, ...excludedFirstFromScoreAndMadeNewArr] = scores;
console.log(excludedFirstFromScoreAndMadeNewArr); //[2,3]

let completeNewFromScore = [...scores];
console.log(completeNewFromScore); //[1,2,3]

const [...completeNewFromScore2] = scores;
console.log(completeNewFromScore2); //[1,2,3]

function rest3([...rest]) {
  // array destructring concept will be applied
  // it is like, var [...rest] = arr

  console.log(rest, "rest3");
}
rest3(arr);
*/
/*
//imp: rest, spread & destructuring
let obj = { name: "arif", age: 26, email: "ab@gmail.com" };
let { ...newObj1 } = obj;//destructuring with rest syntax
let newObj2 = { ...obj };
console.log(newObj1, newObj2); //{ name: 'arif', age: 26, email: 'ab@gmail.com' } { name: 'arif', age: 26, email: 'ab@gmail.com' }
console.log(newObj1 === newObj2); //false,

let { name: fName, ...newobj3 } = obj;
console.log({ fName, ...newobj3 }); //{ fName: 'arif', age: 26, email: 'ab@gmail.com' }

//imp:
// ... it act as both spread and rest operator
//it is used at time of assignment
//if it is used in left side it act as rest
//if it is used in right side of assignment, it act as spread
//if rest is used with array , it will create array of spreded

function acceptObj({ ...newObj }) {
  //it is same as var {...newObj} = passed obj
  console.log(newObj, "from acceptObj"); //{ name: 'arif', age: 26, email: 'ab@gmail.com' } from acceptObj
}
acceptObj(obj);

function acceptObj2(...newObj) {
  console.log(newObj, "from acceptObj2"); //[ { name: 'arif', age: 26, email: 'ab@gmail.com' } ] from acceptObj2
}
// acceptObj2(...obj);//error
acceptObj2({ ...obj });
*/

/*
//imp; smart swapping of values
function destructring() {
  let a, b;
  [a, b] = [1, 2];
  // in [a,b]=[1,2], left side is assignment by destructurring an array, right side is simple array (who is being de structured)
  console.log(a, b); //1,2
}

function swappingTwoNum() {
  let a = 10;
  let b = 20;
  [b, a] = [a, b];
  console.log(a, b);
}
swappingTwoNum();

let arr = [1, 2, 3, 4, 5];
function swapIthWithJth(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
swapIthWithJth(arr, 1, 4);
console.log(arr); //[ 1, 5, 3, 4, 2 ]
*/
/*
let objType = [
  100,
  [1, 2, 3],
  "arif",
  { name: "arif", email: "gdt@gmail" },
  null,
  undefined,
];
const index = Math.floor(Math.random() * 5);
console.log({ index });
let obj = objType[index];

for (const key in obj) {
  console.log(`${key} ==> ${obj[key]} `);
}
//for (const key in obj) , is working well with string array and object but not with number and null and undefined, but not throwing error in any case
*/

/*
//imp:: Object.keys(), and values

console.log(Object.keys(100)); //[]
console.log(Object.keys([1, 2, 3])); //[ '0', '1', '2' ]
console.log(Object.values("arif")); //[ 'a', 'r', 'i', 'f' ]
console.log(Object.values("")); //[]
console.log(Object.keys(null)); //imp:: null and undefined will throw error
console.log(Object.keys(null??{})); //imp:: handle it like this
*/

/*
let age = { min: 5, max: 10 };
let data = age ?? {};

function verifyAge({ min, max }) {
  if (!min && !max) {
    return true;
  }
  if (min && !max) {
    throw new Error("max should not be empty");
  }
  if (max && !min) {
    throw new Error("min should not be empty");
  }
  if (min < 0 || max < 0) {
    throw new Error("age cant be negative");
  }
  if (max > 200) {
    throw new Error("age cant be greater than 200");
  }
  if (min > max) {
    throw new Error("min cant be greater than max");
  }
}
// this function failed for 0,0 min and max
*/

/*
let age = {
  a: null,
  b: undefined,
  c: "",
  d: 0,
};
let arr = ["a", "b", "c", "d"];
arr.forEach((item) => {
  console.log(item in age);
});
// all true
*/

/*
function validateAge(age) {
  let { min, max } = age;
  if (!("min" in age) && !("max" in age)) {
    return true;
  }
  if ("min" in age && !("max" in age)) {
    throw new Error("max age should not be empty while min is non empty");
  }
  if ("max" in age && !("min" in age)) {
    throw new Error("min age should not be empty while max is non empty");
  }
  if (min > max) {
    throw new Error("min age cant be greater than max");
  }
}
//this handled 0,0 case
// imp: but will fail in case of null and undefined
*/

/*
async () => {
  console.time();
  const arr = [];
  let n = 5;

  for (let i = 1; i <= n; i++) {
    const primer = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
      }, 2000);
    });
    arr.push(primer);
  }
  const res = await Promise.all(arr);
  console.log(res);
  console.timeEnd();
};


let x = "",
  y = "";
console.log((x || y) && "ab");
*/
/*
let min = "10",
  max = "0";
let res =
  (max || min) &&
  (min && ` AND B.${"key"} >${min && max ? "=" : ""} ${min} `) +
    (max && ` AND B.${"key"} <${min && max ? "=" : ""}  ${max} `);
console.log(res);

*/

/*
//imp::  date related

const dateRegex =
  /[1-9][0-9][0-9]{2}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1])/gm;
let num = 8;
console.log(num.match?.(dateRegex));

function validate(date) {
  return new Date(date) >= new Date(new Date().toDateString());
}
console.log(validate("2025-01-05"));

console.log(new Date()); //2025-01-16T09:24:24.225Z object

console.log(new Date().toISOString()); //2025-01-16T09:24:24.225Z

console.log(Date.now(), "Date.now()"); //1737024176893 Date.now()

console.log(new Date(Date.now()), "new Date(Date.now())"); //2025-01-16T10:43:58.345Z new Date(Date.now())

console.log(new Date(Date.now()), new Date()); //2025-01-16T10:45:23.377Z 2025-01-16T10:45:23.377Z

console.log(new Date("2025-01-16"), "custom start"); //2025-01-16T00:00:00.000Z custom start

console.log(new Date().setUTCHours(0, 0, 0, 0), "ggg"); //1736985600000

const startToday = new Date(new Date().setUTCHours(0, 0, 0, 0));
const endToday = new Date(new Date().setUTCHours(23, 59, 59, 999));
console.log(startToday, endToday);

const anyDysEndDate = new Date(
  new Date("2024-12-01").setUTCHours(23, 59, 59, 999)
);
console.log(anyDysEndDate);

const offset = "-05:30";
const [hors, min] = offset.split(":");
console.log(hors, min);

console.log(parseInt("-05")); //-5
console.log(parseInt("+05")); //-5
console.log(parseInt("+0.5")); //0
console.log(+"+0.5"); //0.5

const anyDysEndDateWithSubtractedTimeZone = new Date(
  new Date("2024-12-01").setUTCHours(
    23 - parseInt(hors),
    59 - parseInt(min),
    59,
    999
  )
);
console.log(
  `anyDysEndDateWithSubtractedTimeZone`,
  anyDysEndDateWithSubtractedTimeZone
);

*/

/*
//imp:: try catch without await
async function func() {
  try {
    console.log("try");
    Promise.reject("6t").catch((e) => {
      console.log(
        `from promises catch, i will be executed after event loop pushes in call stack `
      );
      return 5;
    });
    return "from try"; //this return will not block  execution of finally
  } catch (error) {
    console.log(`catch block`);
  } finally {
    console.log(`outside try catch or say from finally`);
    return "returned from outSide / finally";
  }
}
console.log(func()); //Promise { 6 }
console.log(`i will be executed before .catch of rejected promise`);
*/

/*
async function func() {
  try {
    console.log("try");
    Promise.reject("6t").catch((e) => {
      console.log(
        `from promises catch, i will be executed after event loop pushes in call stack `
      );
      return 5;
    });
    return "from try"; //this return will  block  execution of code written after catch
  } catch (error) {
    console.log(`catch block`);
  }
  console.log(`outside try catch or say from finally`);
  return "returned from outSide / finally";
}
console.log(func()); //Promise { 6 }
console.log(`i will be executed before .catch of rejected promise`);
*/

/*
const returnPromise = (timer, val) => {
  return new Promise((res) => setTimeout(res, timer, val));
};
const promiseArr = [1, 2, 3, 4, 5].map((item) =>
  returnPromise(item * 1000, item * 1000)
);
function enhancedPromiseDotAll({ promiseArr }) {
  let count = 0;
  const percentageCB = (percentage) => {
    console.log(`execution ${percentage}% completed`);
  };
  const promiseArrLength = promiseArr.length;
  const res = promiseArr.map(async (item) => {
    const res = await item;
    count++;
    const percentage = (count / promiseArrLength) * 100;
    percentageCB(percentage);
    return res;
  });
  return Promise.all(res);
}
enhancedPromiseDotAll({ promiseArr }).then((data) => {
  console.log(data);
});
*/
//map , forech or any other method triggers promise parallely, despite await , only await changes return
//value and nothoingh else

// example
/*
console.log(promiseArr);
console.time('a')
const executedParallely = promiseArr.map(async (item) => await item);
console.log(executedParallely,'executedParallely')
console.timeEnd('a')// 0 ms , promise.map completes loop noremally without considering await
console.time('b')
Promise.all(promiseArr).then((item)=>{
  console.timeEnd('b')//only 5 sec
  console.log(item)
})
  */

//imp:
//  now suppose i have an array of id we want make api call for each id parallely
/*
const promiseFunc = (id) => {
  return new Promise((res, rej) => {
    if (id === 2) {
      setTimeout(rej, 1000, "something went wrong");
    }
    setTimeout(res, 1000, id * 2);
  });
};
const cbOfMap = async (id) => {
  try {
    const res = await promiseFunc(id);
    return { id, res };
  } catch (error) {
    return { id, res: error };
  }
};
(async () => {
  let ids = [1, 2, 3];

  promiseOfFetchResults = ids.map(cbOfMap);
  console.time();
  Promise.all(promiseOfFetchResults)
    .then((item) => {
      console.log(item);
      console.timeEnd(); // 1 second
    })
    .catch((e) => console.log(e));
})();
*/

/*
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject("due to some reason");
let promiseArr = [promise1, promise2];
async function fromllToAllSettled(arr) {
  const mapped = arr.map(async (item) => {
    try {
      const res = await item;
      return { status: true, value: res };
    } catch (error) {
      return { status: false, reason: error };
    }
  });
  return  Promise.all(mapped);
}
fromllToAllSettled(promiseArr).then((item)=>console.log(item))
console.log("i will be printed early")
*/
/*
Promise.resolve("first")
  .then((a) => console.log(a))
  .then((a) => console.log("second"))
  .then(() => console.log("third"));
Promise.resolve("fourth")
  .then((a) => console.log(a))
  .then((a) => console.log("fifth"))
  .then(() => console.log("sixth"));

const promise1 = new Promise((res) => setTimeout(res, 1000, "one"));
const promise2 = new Promise((res) => setTimeout(res, 1000, "two")).then(
  (res) => res
);
promise1.then((res1) => console.log(res1));
promise2.then((res2) => console.log(res2));
// here we can say promise2 has unnecessary .then it has no effect
// the only diffrence is that on 2nd  promise actual code will run on definition
//same things happens in map function with await it has no effect
let arr = [1, 2];
// let promiseArr = arr.map(async (item) => {
//   return new Promise((res) => setTimeout(res, 5000, item));
// });
let promiseArr = arr.map(async (item) => {
  return await new Promise((res) => setTimeout(res, 5000, item));
});
function printPercentage(a) {
  console.log(a, "mmmmmmmmmmmmmmmmmmm");
}
console.log(promiseArr);
Promise.all(promiseArr).then((item) => console.log(item));
function AllWithPercentage(arr) {
  let res = arr.map(async (item) => {
    const res = await item;
    printPercentage("yy");
  });
  return Promise.all(res);
}
AllWithPercentage(promiseArr);
//----------------------------------------
const min = "2025-01-24T00:00:00Z";
const max = "2025-01-24T05:15:00Z";
console.log(new Date(new Date(max).setUTCHours(0, 0, 0)), new Date(min));
console.log(
  new Date(min).toDateString() === new Date(new Date(max)).toDateString()
);
*/
//imp: if an async function throws error it mens the function is returning rejected promise
/*
async function throwErrorByAsyncFunction() {
  throw new Error("threw error");
}
throwErrorByAsyncFunction().catch((e) => {
  console.log(`e`, e.message);
});
*/

/*
//imp: if you call an async function that returns a rejected promise and still you want to process further and do not want go execution in catch of try catch block
//imp: use .catch on rejected promise
async function throwErrorByAsyncFunction() {
  throw new Error("threw error");
}

(async () => {
  try {
    await throwErrorByAsyncFunction();
    console.log(`i will nt be executed 1`);
  } catch (error) {
    console.log(`error 1`, error.message);
  }
})();
(async () => {
  try {
    await throwErrorByAsyncFunction().catch((e) => e.message);
    console.log(`i will  be executed 2`); //
  } catch (error) {
    console.log(`error 2`, error.message);
  }
})();
*/

/*
//imp:: finally is finally, execution will go inside that even if try / catch has return statement
function testTryCatch() {
  try {
    console.log(w.y);
    return "try";
  } catch (error) {
    console.log(`inside catch`);
    return "catch";
  } finally {
    return "finally";
  }
}
console.log(testTryCatch()); // amazing, finally was returned
*/
/*
let count = 0;
let arr = [1, 2, 3, 4];
let res = arr.reduce((acc, curr) => {
  count += 1;
  return acc + curr;
});
console.log(`res`, res, count); //res 10 3
// imp:: if default value of acc is not assigned , first element is assigned to acc and loop start from second element, thats why here count was 3
*/

/*

let count = 0;
let arr = [1, 2, 3, 4];
let res = arr.reduce((acc, curr) => {
  count += 1;
  return acc + curr;
}, 0); // assigned default value
console.log(`res`, res, count); // imp:: res 10 4
*/

let arr = [1, 2, 3, 4, 6, 9];
let res = arr.reduce(
  (acc, curr) => {
    curr > 5 ? acc.greater.push(curr) : acc.smaller.push(curr);
    return acc;
  },
  { greater: [], smaller: [] } //in single loop found both
);
const { greater, smaller } = res;
console.log({ greater, smaller });
console.log(
  `${new Date(
    new Date("2025-02-04T09:53:46.063Z").setUTCHours(-72)
  ).toISOString()}`
);
