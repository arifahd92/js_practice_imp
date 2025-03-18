// The prototype.constructor is an important property that helps maintain the link between an object, its prototype, and the function that constructed it

function Animal(type) {
  this.type = type;
}

// for an object __proto__ refers to prototype of its producer function
// but for an object constructor refers to function, from which the object is produced
//function ka instance object aur function ka prototype dono ka constructor producer function ko point karta hai
//jabki instance ka __proto__ producer function ke prototype ko aur function ke prototype ka __proto__ Object function ke prototype ko point karta hai

console.log(Animal.__proto__ === Function.prototype); // true
console.log(Animal.constructor === Function); // true

console.log(Animal.prototype.__proto__ === Object.prototype); // true
console.log(Animal.prototype.constructor === Object); //imp: false
console.log(Animal.prototype.constructor === Animal); // imp: true

const dog = new Animal("Dog");
const cat = new Animal("Cat");
console.log(Animal.constructor); // Output: [Function: Function], not animal
console.log(Animal.prototype.constructor); // [Function: Animal], not Function
console.log(dog.constructor); // Output: [Function: Animal]
console.log(cat.constructor); // Output: [Function: Animal]

// Verifying the type of object using constructor
if (dog.constructor === Animal) {
  console.log("Dog is an Animal!"); // Output: Dog is an Animal!
}

// Creating a new instance using the constructor
const anotherAnimal = new dog.constructor("Bird");
console.log(anotherAnimal.type); // Output: Bird


//imp: ek object kis function se produce hua hai ye janane ke liye .constructor ko call kar sakte hai 
//imp: ek prototype object kis function ka hai ye bhi janane ke liye .constuctor ko call kar sakte hain