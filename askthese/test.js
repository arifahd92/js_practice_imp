function connectToDatabase(connectionString, cb) {
  setTimeout(cb, 1000, { connected: false, db: {} });
}
(async () => {
  console.log("start");
  const { promise, resolve, reject } = Promise.withResolvers();
  connectToDatabase("http://localhost:8088", ({ connected, db }) => {
    if (connected) {
      resolve({ connected, db });
    } else {
      reject(new Error("could not connect to db"));
    }
  });
  const resolvedata = await promise;
  console.log(resolvedata);
  console.log("after connecting to db perform some task ");
})();
