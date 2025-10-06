// function change(param, cb1, cb2=cb1) {
//   param += 10;
//   if (Math.random() > 0.5) {
//     cb1(null, param);
//   } else {
//     cb(new Error("sss"), param);
//   }
// }
// change.promise = function (param) {
//   return new Promise((res, rej) => {
//     this(param, res,rej);
//   });
// };
// change.promise(5).then((data)=>console.log(data));

// (async () => {
//   await Promise?.all([]);
// })();
// let timer =setTimeout(() => {
// // console.log(timer)
// clearTimeout(timer)
// console.log(timer)
// }, 1000);
const getPromise = (t) =>
  new Promise((res, reject) => setTimeout(reject, t, "err"));

const prom1 = getPromise(1000);
const prom2 = getPromise(2000);
const prom3 = getPromise(3000);
(async () => {
  console.time("start");
  await Promise.all([
    prom1.catch((e) => console.log(e)),
    prom2.catch((e) => console.log(e)),
    prom3.catch((e) => console.log(e)),
  ]).catch((e) => console.log(e));
  console.timeEnd("start");
})();
