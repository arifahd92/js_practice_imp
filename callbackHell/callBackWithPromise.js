function getLatestCreatedUser() {
  return new Promise((res) => {
    setTimeout(res, 100, { id: 1, name: "sultan" });
  });
}
function getUsersPostByUserID(id) {
  console.log(`getUsersPostByUserID called with id ${id}`);
  return new Promise((res) =>
    setTimeout(res, 100, { id, postedOn: "2024-12-31" })
  );
}
function deletePostIfLastYearsPost(id) {
  console.log(`deletePostIfLastYearsPost ${id}`);
  return new Promise((res) => setTimeout(res, 100, null));
}
getLatestCreatedUser()
  .then((res) => res)
  .then((res) => getUsersPostByUserID(res.id).then((res) => res))
  .then((res) => deletePostIfLastYearsPost(res.id));
// getLatestCreatedUser()
//   .then((res) => getUsersPostByUserID(res.id))
//   .then((res) => deletePostIfLastYearsPost(res.id))
//   .catch(() => console.log(`err`));
const submittedOn = "2024-12-31";
const previousDate = new Date(submittedOn).setUTCHours(-72);
const previousDateString = new Date(previousDate).toISOString().slice(0, 10);
console.log(previousDateString);

const jsonData = JSON.stringify({
  displayUser: "arif",
  locationId: "3dfba57c",
  submittedOn: "2025-02-28",
});
console.log(jsonData)