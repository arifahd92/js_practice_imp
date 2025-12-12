// when ever a class is created first of all this is created {}
// then all methods are attached in its prototype chain
//then line by line assignment happens
// and at end constructor runs and if constructor do not return any thing this is returned other wise return of constructor, and this return is assigned to instance object

function userDetail(ref) {
  console.log(ref, "im ref...........s");
  console.log(ref.getUsers);
}
class manageUser {
  users = [];
  static instance;
  constructor() {
    console.log("constructor called,,,,,,,,,,,");
    console.log(this, "im this ");
    console.log(this.getUsers);
    if (!manageUser.instance) {
      manageUser.instance = this;
    }
    return manageUser.instance;
  }
  name = [];
  a = userDetail(this);

  removeUse(id) {
    this.users = this.users.filter((user) => user.id === id);
  }
  getUsers() {
    return this.users;
  }
  isUserInUsers(id) {
    return !!this.users.find((user) => user.id === id);
  }
}
const manageUser1 = new manageUser();

// manageUser1.addUsers({ id: 11, name: "arif11" });
// const manageUser2 = new manageUser();
// manageUser1.addUsers({ id: 12, name: "arif12" });
// manageUser2.addUsers({ id: 21, name: "arif21" });

// const usersFrom1 = manageUser1.getUsers();
// const usersFrom2 = manageUser2.getUsers();
// console.log({ usersFrom1, usersFrom2 });
