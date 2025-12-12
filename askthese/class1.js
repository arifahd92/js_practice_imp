const globalUser = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];
class User {
  users = [];
  addUser;
  removeUser;
  setHandler(adduser, removeUser) {
    this.adduser = adduser;
    this.removeUser = removeUser;
  }
  logUsers() {
    console.log(this.users);
  }
}
const user1 = new User();
console.log("goin set");
const addUser = function () {
  const random = Math.random();
  this.users.push({ id: random, name: "john" + random });
};
const removeUser = function () {
  this.users.pop();
};

user1.setHandler(addUser.bind(user1), removeUser.bind(user1));
console.log("has set");
user1.adduser();
user1.adduser();
user1.logUsers();
user1.removeUser();
user1.logUsers();
