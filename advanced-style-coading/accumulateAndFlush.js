async function dbFunction(ids) {
  console.log(`dbFunction called with ids to write in db  `, ids);
  await new Promise((resolve) => setTimeout(resolve, 600));
}
const idsSet = new Set();
let timer;
const handleUser = (id) => {
  idsSet.add(id);
  if (timer) {
    return;
  }
  timer = setTimeout(bulkFlushDataInDb, 400);
};

const bulkFlushDataInDb = () => {
  timer = null;
  const ids = [...idsSet];
  idsSet.clear();
  dbFunction(ids);
};

let acc = 0;
const timersInMs = [100, 150, 200, 400, 500, 1000, 100, 200];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < timersInMs.length; i++) {
  acc += timersInMs[i];

  setTimeout(handleUser, acc, ids[i]);
}

