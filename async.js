/** @format */
/*
async function func() {
  console.log(`async function called 2`);
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(`async function called 4`);
  const data = await res.json();
  return data;
}
console.log(`outside but before call 1 `);
const data = func();
data.then((data) => console.log(`data 5`));
console.log(`outside and after call 3`);
*/
/*
function time_function(cb, a) {
  let num = 6;
  setTimeout(() => {
    num += a;
    cb(num);
  }, 500);
  return num;
}
const num = timer_function((data) => {
  console.log(data);
}, 4);
console.log(num);
*/

/*
const promise1 = Promise.resolve(3);
const promise2 = function (delay) {
  return new Promise((resolve, reject) => setTimeout(reject, delay, "error"));
};

const promise3 = function (delay) {
  return new Promise((resolve, reject) => setTimeout(resolve, delay, "foo"));
};

const handlePromise = async () => {
  const res1 = await promise1;
  let res = Promise.reject(5).catch((err) => err);
  console.log(res); //Promise { <pending> }
};
handlePromise();
*/

/*
async function myfunc() {
  console.log(`before await`);
  const res1 = await 5;
  console.log(`after await`);
  const res2 = await Promise.resolve(5);
  console.log(res1, res2, res1 === res2); //5 5 true
}
myfunc();
console.log(`console 2`);
*/
/*
(async () => {
  console.log(`1`);
  setTimeout(() => {
    console.log("4");
  }, 100);
  console.log("3");
})();
console.log(`2`);
// 1 3 2 4
*/

/*
(async () => {
  console.log(`1`);
  await setTimeout(() => {
    console.log("4");
  }, 100);
  console.log("3");
})();
console.log(`2`);
// 1, 2 3 4
*/
