/** @format */

/*

exports = { name: "arif", age: 20 };

//on requiring this module we will get empty object, reason exports has broken reference from module.exports

*/

exports.user = { name: "arif", age: 20 };
exports.add = (a, b) => {
  return a + b;
};
