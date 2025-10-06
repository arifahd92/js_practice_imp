
function promiseFunc(data, t = 1000) {
  if (data === 0) {
    return new Promise((res, rej) => {
      setTimeout(rej, t, data);
    });
  }
  return new Promise((res, rej) => {
    setTimeout(res, t, data);
  });
}
const promiseArray = [
  promiseFunc(1, 100),
  promiseFunc(2),
  promiseFunc(0, 500),
  promiseFunc(3),
];
let count = 1;
(async () => {
  try {
    await Promise.all(
      promiseArray.map(async (p) => {
        console.log("count", count++);
        const res = await p;
        console.log(res, "res");
      })
    );
  } catch (error) {
    console.log("inside error");
    console.log(error);
  }
})();


// [1, 2, 3].forEach(async (item) => {
//   console.log(item);
//   throw new Error('ww')
// });
