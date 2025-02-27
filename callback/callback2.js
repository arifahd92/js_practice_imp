function getUserById(userId, callback) {
  setTimeout(() => {
    callback(null, { id: userId, name: "abcd" });
  }, 100);
}
function getOrderById(userId, callback) {
  setTimeout(callback, 100, null, { id: 101, userId });
}

function getOrderDetails(orderId, callback) {
  setTimeout(callback, 100, null, { id: orderId, price: 100, quantity: 100 });
}

getUserById(1, (error, data) => {
  if (error) {
    console.log("found error whil4e fertchimg user");
    return;
  }
  getOrderById(data.id, (error, data) => {
    if (error) {
      console.log("error encounterd while fetching order by user id ");
      return;
    }
    getOrderDetails(data.id, (error, data) => {
      if (error) {
        console.log("encountered errore while gewtttimng order details");
        return;
      }
      console.log(data);
    });
  });
});
