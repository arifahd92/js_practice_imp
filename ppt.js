/** @format */

// let obj = {
//   name: "abcd",
//   email: "abcd@gmail.com",
//   age: 25,
//   printDetail1: function () {
//     console.log(this.name);
//   },
//   printDetail2: () => {
//     console.log(this.email);
//   },

//   printDetail3: function () {
//     console.log(this.age);
//     this.printDetail1();
//     this.printDetail2();
//   },
// };
// obj.printDetail3();

//map reduce filter methods in js

//shallow copy , deep copy

const checkIsEven = (item) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 0, item % 2 === 0);
  });
};
const arr = [1, 2, 3, 4];
const data = arr.map(async (item, index) => {
  const isEven = await checkIsEven(item);
  return isEven ? item * 2 : item;
});
console.log(data);

// const arr = [1, 2, 3];
const existing = [];
// arr.forEach(async (item) => {
//   const isExist = await checkUserById(item);
//   isExist && existing.push(item);
// });
// console.log(existing);

// (async () => {
//   for (const item of arr) {
//     const isExist = await checkUserById(item);
//     isExist && existing.push(item);
//   }
//   console.log(existing);
// })();

// const res = arr.filter(async (item) => {
//   const isExist = await checkUserById(item);
//   console.log(isExist);
//   return isExist;
// });
// console.log(res);
