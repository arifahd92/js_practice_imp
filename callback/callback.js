function getUser(userId, callback) {
    setTimeout(() => {
        console.log("Fetched user data");
        callback(null, { id: userId, name: "John Doe" });
    }, 1000);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        console.log("Fetched orders for user");
        callback(null, [{ id: 1, item: "Laptop" }, { id: 2, item: "Phone" }]);
    }, 1000);
}

function getOrderDetails(orderId, callback) {
    setTimeout(() => {
        console.log(`Fetched details for order ${orderId}`);
        callback(null, { id: orderId, price: 1000, status: "Shipped" });
    }, 1000);
}

// Callback Hell
getUser(1, (err, user) => {
    if (err) {
        console.error("Error fetching user");
        return;
    }
    getOrders(user.id, (err, orders) => {
        if (err) {
            console.error("Error fetching orders");
            return;
        }
        getOrderDetails(orders[0].id, (err, orderDetails) => {
            if (err) {
                console.error("Error fetching order details");
                return;
            }
            console.log("Final Order Details:", orderDetails);
        });
    });
});
