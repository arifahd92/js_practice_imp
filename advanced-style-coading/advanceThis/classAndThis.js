/*
class MyClass {
  name = "Arif";
  age = 24;
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  mapArrToName() {
    // console.log("im this ", this);
    return this?.name ?? "defaultValue";
  }
}
const obj = new MyClass();
const res1 = obj.arr.map(obj.mapArrToName); // here obj.gateNames reference is being passed to map now map will call mapArrToName , so get name is not being called on obj here
console.log(res1, "im res1");
const res2 = obj.arr.map(() => obj.mapArrToName()); // now mapArrToName is being called on obj directly
console.log(res2, `im res2`);
*/

/*
class MyClass {
  name = "Arif";
  age = 24;
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  mapArrToName() {
    // console.log("im this ", this);
    return this?.name ?? "defaultValue";
  }
}
const obj = new MyClass();
const mapper = obj.mapArrToName;

const res1 = obj.arr.map(mapper); 
console.log(res1, "im res1");
const res2 = obj.arr.map(() => mapper()); 
console.log(res2, `im res2,,,,,,,,`);
*/
class MyClass {
  name = "Arif";
  age = 24;
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  mapArrToName = () => {
    // console.log("im this ", this);
    return this?.name ?? "defaultValue";
  };
}
const obj = new MyClass();
const mapper = obj.mapArrToName;

// const res1 = obj.arr.map(mapper);
// console.log(res1, "im res1");
// const res2 = obj.arr.map(() => mapper());
// console.log(res2, `im res2,,,,,,,,`);

const res3 = obj.arr.map(mapper, { name: "Not Arif" });
console.log(res3, "im res3");
// ! this cant be changed in arrow function even if we pass second argument to map
// ! call, bind apply also cant change this in arrow function
// ! map internally uses call to call the function, thats why this cant be changed in arrow function
