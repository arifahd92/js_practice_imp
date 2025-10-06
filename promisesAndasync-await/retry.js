//retry mechanism
function retry(resValue = "resolved", rejValue = "rejected") {
  console.log(`retry called`);
  return new Promise((res, rej) => {
    setTimeout(() => {
      const rand = Math.random();
      console.log({ rand });
      rand > 0.5 ? res(resValue) : rej(rejValue);
    }, 1000);
  });
}

function doSomeTaskReturn() {
  setTimeout(async () => {
    for (let i = 1; i <= 5; i++) {
      if (i !== 1) {
        console.log(`waiting for five second...`)
        await new Promise((res) => setTimeout(res, 5000))
      }
      const data = await retry()
        .then(() => true)
        .catch(() => false);
      console.log({ data });
      if (data) {
        break;
      }
    }
  }, 0);
  return 5;
}
// doSomeTaskReturn();
async function retryAsync(cb, retryCount = 5) {

  return async (...args) => {

    for (let i = 1; i <= retryCount - 1; i++) {
      const data = await cb(...args).catch(() => false);
      await new Promise((res) => setTimeout(res, 1000));
      if (data) {
        return data
      }
    }
    return cb(...args);
  }
}
const retryAble = retryAsync(retry, 5);
retryAble("Arif", 'taslim').then(console.log).catch(console.error);

function retryAsync(cb, retryCount = 5, delayMs = 1000) {
  console.log(`lower function called with retryCount: ${retryCount} and delayMs: ${delayMs}`);
  return async (...args) => {
    for (let i = 1; i < retryCount; i++) {
      try {
        return await cb(...args);
      } catch (err) {
        // Optional logging:
        console.warn(`Retry ${i} failed: ${err.message}`);
        await new Promise((res) => setTimeout(res, delayMs));
      }
    }
    // Final attempt — let it throw if it fails
    return cb(...args);
  };
}
