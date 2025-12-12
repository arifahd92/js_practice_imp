const promiseCreater = (delay, data = delay) => {
  return new Promise((res, rej) =>
    setTimeout(delay < 250 ? res : rej, delay, data)
  );
};
const delayArr = [100, 200, 300, 50];
const promises = delayArr.map((delay) => promiseCreater(delay));

// till now i found array of promises

const customPromiseAllSettled = (promises) => {
  const resOfAllSetteled = promises.map(async (promise) => {
    let res = {
      status: true,
      value: null,
    };
    try {
      const promiseVal = await promise;
      res.value = promiseVal;
    } catch (error) {
      res.status = false;
    }
    return res;
  });
  //   return Promise.all(resOfAllSetteled),
  // just return here and yeah you acheived what you want

  // what is i do not have to use promise.all
  // without using Promise.all

  const { promise, resolve, reject } = Promise.withResolvers();
  let ans = [];
  let count = 0;
  resOfAllSetteled.map(async (promise, index) => {
    const res = await promise;
    ans.push(res);
    count++;
    if (count === resOfAllSetteled.length) {
      console.log("resolved");
      resolve(ans);
    }
  });
  return promise;
};
(async () => {
  console.time("start");
  const toWait = customPromiseAllSettled(promises);
  console.log(toWait, "im to wait,,,,,,,");
  const result = await toWait;
  console.log(result);
  console.timeEnd("start");
})();
