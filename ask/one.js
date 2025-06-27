function updateData(a) {
  setTimeout(() => {
    a *= 2;
  }, 0);
  return a;
}
const result = updateData(5);
console.log(result); // output

let res = false;
setTimeout(() => {
  res = false;
}, 0);
while (res) {
  console.log(res);
}

//what is return type of .then

async function func() {
  return 5;
}
console.log(func()); // what will be logged

async function func() {
  return Promise.resolve(5);
}

func().then((data) => console.log(data));

function getUser() {
  console.log(`i got called at `, new Date());
}
async function func() {
  console.log(new Date());
  getUser();
  //    i want call a get user only after waiting for 5 second
}
let number = 124
let reversed = 0
while (number > 0) {
  let last = number % 10
  number = Math.floor(number / 10)
  reversed = reversed * 10 + last
}
console.log(reversed)


function counter() {
  return {
    increment() { count++ },
    getCount: () => count
  }
}
const counter1 = counter()
counter1.increment()
counter1.increment()
console.log(counter1.getCount(), 'i logged')