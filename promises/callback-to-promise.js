(async () => {
  let initial = null;
  function executeCb(data, cb) {
    setTimeout(() => {
      cb(data + 5);
    }, 1000);
  }

  //task is call executeCb and assign its response inside initial

  executeCb(5, (data) => {
    console.log(data);
  });

  const res = await new Promise((res) => {
    executeCb(5, res);
  });
  console.log(res);
  
  function promiseFunc(data) {
  return new Promise((res) => {
      setTimeout(res, 1000, data);
    });
}
const promiseArray = [
    promiseFunc(1),
    promiseFunc(2),
    promiseFunc(3),
    null,
    promiseFunc(null),
];
const filtered = promiseArray.map(async (p) => {
    const res = await p;
    if (res) {
        return res;
    } else {
    return null;
  }
});
console.log(filtered); // what will be output
let filteredArr = [];

//now your task is filter out null and null conataining promise
filteredArr =await Promise.all(promiseArray).then((data) => {
  if (data) {
      filteredArr.push(data);
  }
});
})();
