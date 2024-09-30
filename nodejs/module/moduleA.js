/** @format */

module.exports = {
  name: "abcd",
  age: 20,
};
exports.add = (a, b) => {
  return a + b;
};
// on requiring i got only  { name: "abcd", age: 20,} did not get add method , think why ?

/*
// we can think it like 
module.exports={}
exports=module.exports 
// then 
module.exports = {// assigned brand new object to this now it will break the reference from exports
    name: "abcd",
    age: 20,
  };
  exports.add = (a, b) => {
    return a + b;
  };

//imp
// if b is referencing to a then assignment to either a or b both will break reference to each other
let a = { name: "abcd", age: 20 };
let b = a;
let newObj = {};
a = newObj;
//now a and b both are referencing to different different object , b is still referencing to old object but a is now referencing to new

b.address = "abcd"; // now this will not affect to a 
*/
