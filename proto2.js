// Key Points About __proto__:
// Reference to the Prototype:

// __proto__ points to the prototype object of the constructor function that created the given object.

// Used in the Prototype Chain:

// When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it’s not found, the interpreter traverses up the __proto__ chain (or prototype chain) to check for the property in the prototype. This continues until it reaches the top of the chain (null).

// __proto__ vs prototype:

// Every object has a __proto__, but prototype is a property of constructor functions only. The prototype property defines what will be set as __proto__ for all objects created by that constructor.

//imp: har function ka ek prototype hota hai ( objects ka nhi ), jo ki {} hota hai
//imp: har object ka ek __proto__ hota hai

//imp:  ek object/function ka __proto__ us object ke producer (constructor function) ke prototype ko point karta hai
//imp suppose maine ek test name ka  function define kiya to ye function ka producer hua Function constructor, so test.__proto__, Function.prototype ke equal

function Test() {}
Test.prototype.greet = () => console.log(`hello ${this.name}`);
console.log(Test.prototype); //{ greet: [Function (anonymous)] }
console.log(Test.__proto__); //{}
console.log(Test.prototype.__proto__); //[Object: null prototype] {}

console.log(Test.__proto__ === Test.prototype); // false
console.log(Test.__proto__ === Function.prototype); // true, since test is created from Function

//imp: har function ka ek prototype hota hai ( objects ka nhi ), jo ki {} hota hai
// is function ne agar koi object produce kiya to, us object ka __proto__ , is function ke prototype ko refer karega
//means us object par agar koi method access kiya aur wo method us object me exist nhi karta to is function ke prototype tak laane ka kaam __proto__ karega, aur method yaha se access hoga
//suppose iske prototype me bhi nhi mila wo method to ab Function ke prototype me nhi balki Object constructor function  ke prototype me check hoga
//kyon ki hamare function ka prototype {} , iska producer Object so hamare function ke prototype object ka __proto__ Object constructor ke prototype object ko point karega

console.log(Test.prototype.__proto__ === Object.prototype); // true
// agar aap is function pe (not on prototype of this function , directly on function) koi method access karoge to ab wo Function ke prototype me check hoga na ki Object ke
console.log(Test.__proto__ === Object.prototype); // false
console.log(Test.__proto__.__proto__ === Object.prototype); // true

const obj1 = { a: 1 };
const obj2 = { b: 2 };

// Changing the prototype of obj2 to obj1
obj2.__proto__ = obj1;

console.log(obj2.a); // Output: 1 (property is inherited from obj1), other wise ye Object ke prototype object me check hota

Object.prototype.sayHello = function () {
  console.log("Hello from Object.prototype!");
};

const obj = {};
obj.sayHello(); // Output: Hello from Object.prototype!

for (const key in obj) {
  console.log(key); //sayHello, dangerous
}

// YOU can  modify to prototype of any constructor function
//you can not reassign values to constructors prototype

// Array.prototype = null;
console.log(Array.prototype);
const newArr = [1, 2, 3];
newArr.forEach((item) => console.log(item)); //works fine

//imp:  you can reassign/ update to __proto__ of an object easily

//  agar aap chahte ho ki ek object sirf usi object ke properties aur method ko access kare outside na jaaye  ya say inheritance na ho to us object ke  __proto__ ko null kar do

let myObj = {}
myObj.sayHello()//Hello from Object.prototype!
/*
myObj.__proto__=null
myObj.sayHello()//err, myObj.sayHello is not a function 
*/
//null ke alawa aap kuchh bhi assign karoge to chain , Object.prototype tak pahunch jayegi au sayHellow method access ho jayega
myObj.__proto__=undefined
myObj.sayHello()