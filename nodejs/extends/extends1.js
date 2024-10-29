/** @format */
let myObj = {
  name: "ee",
  email: "dd@gmail.com",
  greet: function () {
    console.log("Hello!");
  },
};

console.log(Object.keys(myObj)); // ["name", "email", "greet"]
Object.defineProperty(myObj, "greet", {
  enumerable: false,
});
console.log(myObj, "my object"); //{ name: 'ee', email: 'dd@gmail.com' } my object, greet is not showing now
console.log(Object.keys(myObj)); //[ 'name', 'email' ]
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first: first,
      last: last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log("Hi! I am", this.name.first);
  }

  farewell() {
    console.log(this.name.first, "has left the building. Bye for now!");
  }
}

let p = new Person("Jack", "Beanstalk", 201, "giant", [
  "crushing things",
  "stomping things",
]);

console.log("Person", Object.getOwnPropertyNames(Person));

console.log("p", Object.getOwnPropertyNames(p));

let p_prototype = Object.getPrototypeOf(p);
// let p_prototype = p.__proto__;//both (Object.getPrototypeOf(p) and p.__proto__) is same thing
console.log(
  "p_prototype === Person.prototype is ",
  p_prototype === Person.prototype
);

console.log(
  "Person.prototype",
  Object.getOwnPropertyNames(Person.prototype),
  "here"
);

function OldStyleClass() {
  this.someProperty = 1;
}
OldStyleClass.prototype.parentMethod = function () {}; // in style it is done automatically while we define methods in class, more over to this class also set enumerable false for methods
console.log(OldStyleClass.prototype); //{ parentMethod: [Function (anonymous)] }
class ChildClass extends OldStyleClass {}
//--------------------------------------------
console.log(`look from here`);
class ModernClass {
  someProperty = 1;
  parentMethod() {
    // this method will be added in prototype of ModernClass
    console.log(`i m being logged from modern class `);
  }
}
const instanceOfModernClass = new ModernClass();
console.log(Object.getOwnPropertyNames(ModernClass.prototype)); //[ 'constructor', 'parentMethod' ]

class AnotherChildClass extends ModernClass {
  someProperty = 2;
  myProperty = 3;
  myMethod() {
    console.log(`i'm defined inside AnotherChildClass `);
  }
} //AnotherChildClass has same property as modern class,someProperty = 1; but it can be overwritten
const instance = new AnotherChildClass();

console.log(instance); //{ someProperty: 2, myProperty: 3 }
console.log(AnotherChildClass.prototype.__proto__ == ModernClass.prototype); //true
instance.parentMethod(); //i m being logged from modern class, "parentMethod" will be accessed from modernClass.prototype (first it will be checked in AnotherChildClass.prototype , their it will not be found, and with help of ref of __proto__ of AnotherChildClass.prototype it will go to search in ModernClass.protoType, their it will be found)
//imp as we know methods are always added in prototype for memory efficiency (as we can call same method for different-different object instances and method will use this to distinguish object , on which object/instance method is being called )
console.log(Object.getOwnPropertyNames(AnotherChildClass.prototype), "imp"); //[ 'constructor', 'myMethod' ], not parent method
