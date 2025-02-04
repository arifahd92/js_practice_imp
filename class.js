/** @format */

//this inside a class is a top level object, inside which all declared properties and methods are associated and this "this" is returned to instances of the class

//remember *** methods are not directly associated to this but they are inherited you can think like inside prototype (by the way all methods will be accessible on each instances)

//no let no var no function keyword inside class

// what ever you write inside a class that is added inside this object

//inside a method exact js will be written i.e if you wanna declare a function function keyword will be used

//if you wanna use a method inside another method use this dot method name (all method and variable are associated inside this object)

let constant = 10000; // can be directly access inside class

// if you want to add a method in multiple classes
function globalMethod() {
  // console.log("this inside global method", this); //"this" will refer to global this in case of class, but in case of instance "this" will refer to that instance
  console.log(this.t, "true");
  return "returned value of global method";
}
// /*
class User {
  t = true;
  globalMethodVal = globalMethod();
  globalMethod = globalMethod;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.t = false; // imp: no matter where t is declared, if constructor overwrites, it will be updated
    //imp: in short class fields position does'nt matter (where class field is declared), constructor is last phase
    console.log(`this inside constructor,,,,,,,,,,,,,,,,`, this);
  }
  later = false;
  methodOne() {
    console.log(`im method 1`);
  }

  async methodTwo() {
    console.log(`im method 1`);
  }
  lastProperty = `it will also be added in this at top`;
  imConstant = constant;
}
//class end

const user1 = new User("arif", 26);
console.log(
  user1,
  "instance, i also do not associate methods directly (coz even this do not add methods directly)"
);
console.log(user1.globalMethod()); //returned value of global method
// console.log(user1.methodOne());

// */

/*
 class Dog {
  // console.log("abcd")//not allowed
  // true?1:4//not allowed
  user = true ? "true User" : "false user"; // allowed
  color = "red";
  constructor(breed, price) {
    this.breed = breed;
    this.price = price;
  }
  getPrice1 = function updatePrice() {
    console.log(this.price, "from getPrice1");
  };
  getPrice2() {
    // only this will act as method and both(assigned method will act as property ) so both will be associated in this directly
    console.log(this.price, "from getPrice2");
  }

  getPrice3 = () => {
    console.log(this.price, "from getPrice3");
    console.log("this from arrow function", this);
  };

  //adbhut, all above methods are same in context of this no one is pointing to global or module

  iife = (() => {
    // iife will store undefined because its callback is returning undefined
    console.log(`im iife`);
    return "im iife";
  })();
}
const dog1 = new Dog("american", 5000);
// console.log(dog1);
dog1.getPrice1();
dog1.getPrice2();
dog1.getPrice3();
*/

/*
class Random {
  data = (() => 4)();
  badMethod = function () {
    console.log(this?.data);
  };
  goodMethod = () => {
    // console.log(this);// class it self
    console.log(this?.data); // class act as parent for arrow function
  };
}
const random = new Random();
console.log(random.data); // 4
const method1 = random.badMethod; // random.badMethod just has passed the reference of badMethod to variable method1 except this it has no other meaning, one  functions reference can have to multiple variables and they will call to same function independently of other variables
method1(); // undefined

const method2 = random.goodMethod;
method2(); // 4
*/
//-----------------------------------------------------------------------------------
/*
class Random {
  data = (() => 4)();

  badMethod = function () {
    console.log(this?.data);
  };

  boundBadMethod = this.badMethod.bind(this);

  superMethod = () => {
    console.log(this?.data);
  };
}

const random = new Random();
console.log(random.data); // 4
const method1 = random.boundBadMethod;
method1(); // 4

const way2 = random.badMethod.bind(random);
way2(); // 4

const superMethod = random.superMethod;
superMethod();// 4

*/

// /*

const obj = {
  name: "arif",
  detail: function () {
    console.log(this?.name);
  },
};
setTimeout(obj.detail, 0);
setTimeout(obj.detail.bind(obj));

// */
