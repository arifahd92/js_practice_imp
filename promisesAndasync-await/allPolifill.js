const promiseCreater = (delay, data = delay) => {
  return new Promise((res, rej) =>
    setTimeout(delay > 50 ? res : rej, delay, data)
  );
};
const delayArr = [100, 200, 300, 50];
const promisesArr = delayArr.map((delay) => promiseCreater(delay));

const myAll = (arrayOfPromises) => {
  const ans = [];
  const { promise, resolve, reject } = Promise.withResolvers();

  let count = 0;
  arrayOfPromises.map(async (promise) => {
    try {
      ans.push(await promise);
      count++;
    } catch (error) {
      reject(error);
    }
    if (count === arrayOfPromises.length) {
      resolve(ans);
    }
  });
  return promise;
};


(async () => {
  try {
    console.time("start");
    const result = await myAll(promisesArr);
    console.log(result);
    console.timeEnd("start");
  } catch (error) {
    console.timeEnd("start");
    console.log(error);
  }
})();
