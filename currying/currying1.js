function hasPermission(role, action) {
  const permissions = {
    admin: ["create", "edit", "delete", "view"],
    editor: ["edit", "view"],
    user: ["view"],
  };

  return permissions[role]?.includes(action) ?? false;
}
console.log(hasPermission("admin", "delete")); // true
console.log(hasPermission("editor", "delete")); // false
// can u enhance above function

function hasPermissionWithCurrying(role) {
  const permissions = {
    admin: ["create", "edit", "delete", "view"],
    editor: ["edit", "view"],
    user: ["view"],
  };
  return (action) => permissions[role]?.includes(action) ?? false;
}
const adminPermission = hasPermissionWithCurrying("admin");
console.log(adminPermission("delete"));
//

function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 5));
console.log(multiply(2, 3));

function multiplyWithCurrying(a) {
  return (b) => a * b;
}
// multiplyWithCurrying(2)//it can be named as getDouble
const getTriple = multiplyWithCurrying(3);
const tripleOfFive = getTriple(5);
console.log(tripleOfFive);

function hasPermission(role, action) {
  const permissions = [
    { admin: ["create", "edit", "delete", "view"] },
    { editor: ["edit", "view"] },
    { user: ["view"] },
  ];

  return permissions.find((p) => p[role])?.[role]?.includes(action) ?? false;
}
