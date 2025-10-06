// function Animal(type) {
//   this.type = type;
// }
// // for an object __proto__ refers to prototype of its producer function
// // but for an object constructor refers to function, from which the object is produced
// const dog = new Animal("Dog");
// const cat = new Animal("Cat");
// console.log(Animal.constructor); // Output: [Function: Function], not animal
// console.log(dog.constructor); // Output: [Function: Animal]
// console.log(cat.constructor); // Output: [Function: Animal]

// // Verifying the type of object using constructor
// if (dog.constructor === Animal) {
//   console.log("Dog is an Animal!"); // Output: Dog is an Animal!
// }

// // Creating a new instance using the constructor
// const anotherAnimal = new dog.constructor("Bird");
// console.log(anotherAnimal.type); // Output: Bird


/*
function asyncTimer(a) {
  setTimeout(() => {
    a *= 2
  }, 0)
  return a
}
//don't change any thing in "canYouProvideMeUpdatedA" 
const canYouProvideMeUpdatedA = (updatedA) => {
  console.log('im updated A', updatedA)
}
const res = asyncTimer(5)
console.log(res)
*/


/*
//solution 
function asyncTimer(a) {
  return new Promise((res) => {
    setTimeout(() => {
      a *= 2
      res(a)
    }, 0)
  })

  // return a
}
//don't change any thing in "canYouProvideMeUpdatedA" 
const canYouProvideMeUpdatedA = (updatedA) => {
  console.log('im updated A', updatedA)
  }
  const res = asyncTimer(5).then(canYouProvideMeUpdatedA)
  console.log(res)
  */

// (async () => {

//   function asyncTimer(a, cb) {
//     setTimeout(() => {
//       a *= 2
//       cb(a)
//     }, 0)
//     return a
//   }
//   //don't change any thing in "canYouProvideMeUpdatedA" 
//   const canYouProvideMeUpdatedA = (updatedA) => {
//     console.log('im updated A', updatedA)
//   }
//   // const res = asyncTimer(5)
//   // console.log(res)

//   const res = await new Promise((res) => asyncTimer(5, res));
//   canYouProvideMeUpdatedA(res)
//   console.log(`updated a ${res}`)
// })()


let arr = [1, 2, 3, 4, 5]

// let filtered = arr.filter((item) => item > 3)
// console.log(filtered)

/*
Array.prototype.myFilter = function (cb) {
  let answer = []
  for (let i = 0; i < this.length; i++) {
    let res = cb(this[i], i)
    res && answer.push(this[i])
  }
  return answer
}

const res = arr.myFilter((item, i) => i)
// console.log(res)
Array.prototype.myReduce = function (cb, accumulator = this[0]) {
  let i = 0
  accumulator === this[i] && i++
  console.log({ i })
  for (i; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i)
    console.log(accumulator, 'accumulator')
  }
  return accumulator
}
const reduceRes = arr.myReduce((acc, curr, ind) => {
  acc.push(acc + curr)
  return acc
}, [])
console.log(reduceRes)
*/
const multiplier = {
  factor: 2
};

const nums = [1, 2, 3];

const mapCb = (val) => {
  return val * this.factor;
}

const doubled = nums.map(function (val) {


  return mapCb(val)
}, multiplier);

console.log(doubled);