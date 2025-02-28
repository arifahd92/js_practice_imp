/** @format */

function getLatestCreatedUser(callback) {
  setTimeout(callback, 100, null, { id: 1, name: "sultan" });
}
function getUsersPostByUserID(id, callBack) {
  setTimeout(callBack, 100, { id: 1, postedOn: "2024-12-31" });
}
function deletePostIfLastYearsPost(post, callBack) {
  setTimeout(callBack, 100, null);
}

getLatestCreatedUser((err, data) => {
  if (err) {
    return errorHandler({ id: null, name: "getLatestCreatedUser" });
  }
  getUsersPostByUserID(data.id, (err, res) => {
    if (err) {
      return errorHandler({ id: data.id, name: "getUsersPostByUserID" });
    }
    deletePostIfLastYearsPost(res.id, (err) => {
      if (err) {
        return errorHandler({ id: data.id, name: "deletePostIfLastYearsPost" });
      }
      successHandler();
    });
  });
});

function errorHandler(data) {
  console.log(`something went wrong in ${data.name} for id ${data.id}`);
}
function successHandler() {
  console.log(`hurrah successfully post deleted for matched`);
}
