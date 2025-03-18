function Animal(type) {
  this.type = type;
}
// for an object __proto__ refers to prototype of its producer function
// but for an object constructor refers to function, from which the object is produced
const dog = new Animal("Dog");
const cat = new Animal("Cat");
console.log(Animal.constructor); // Output: [Function: Function], not animal
console.log(dog.constructor); // Output: [Function: Animal]
console.log(cat.constructor); // Output: [Function: Animal]

// Verifying the type of object using constructor
if (dog.constructor === Animal) {
  console.log("Dog is an Animal!"); // Output: Dog is an Animal!
}

// Creating a new instance using the constructor
const anotherAnimal = new dog.constructor("Bird");
console.log(anotherAnimal.type); // Output: Bird
