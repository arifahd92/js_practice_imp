/**
 * imp **
 * // __proto__ is reference to prototype of the function (more precisely constructor function ) from which the object created
 * // in an object __proto__ is the thing inside which property is searched if not found in that object
 * // inside an object only __proto__ exists not prototype,
 *
 * //generally objects are created from Object constructor function
 *
 * //prototype of a function is {} so __proto__ of {} is equal to prototype of Object function as we know __proto__ of an object is
 * //ref. to the prototype of function from which the object was created
 *
 *  prototype is a property of a Function object. It is the prototype of objects constructed by that function.
 *
 *  __proto__ is an internal property of an object, pointing to its prototype. Current standards provide an equivalent Object.
 *  getPrototypeOf(obj) method, though the de facto standard __proto__ is quicker.
 *
 *  You can find instanceof relationships by comparing a function's prototype to an object's __proto__ chain, and you can break these
 *  relationships by changing prototype.
 *
 * @format
 */

function Point(x, y) {
  this.x = x;
  this.y = y;
}
console.log(Point.prototype); //{}
var myPoint = new Point();
var literalPoint = { x: "0,0", y: "1,0" };
// the following are all true
console.log(myPoint.__proto__ == Point.prototype); //myPoint is an object that is created from Point function so myPoint.__proto__ will be pointing to Point.prototype object
console.log(myPoint.__proto__.__proto__ == Object.prototype);
console.log(myPoint instanceof Point);
console.log(myPoint instanceof Object);
console.log(myPoint.__proto__.__proto__ == Object.prototype); // true
console.log(literalPoint.__proto__ == Object.prototype); //true
console.log(Point.__proto__ === Function.prototype); //true, every function object is crested from Function constructor function,
// thats why it is true
console.log(Function.prototype.__proto__ === Object.prototype); //true

console.log(Point.prototype == Function.prototype, "yes im false as expected"); //false, both are object ("{}") with different ref. but creator of both is Object
console.log(Point.prototype.__proto__ == Function.prototype.__proto__); //true

console.log(myPoint.__proto__.__proto__ == Point.prototype.__proto__); // both referencing to Object.prototype

console.log(myPoint.xyz, literalPoint.xyz); // in case of myPoint.xyz, first xyz will be searched in myPoint, then with the help of __proto__ xyz will be searched in Point.prototype (it will not be found) then again with help of __proto__(of Point.prototype that is "{}") xyz will be searched in Object.prototype
// but in case of literalPoint.xyz, xyz will be searched in Object.protoType if not found in literalPoint

/*
function Point(x, y) {
  this.x = x;
  this.y = y;
}
var myPoint = new Point();
console.log(Point.__proto__ === Object.prototype, "here"); //{}
console.log(myPoint.__proto__, "myPoint.__proto__"); //{}
var literalPoint = { x: "0,0", y: "1,0" };
// the following are all true
console.log(myPoint.__proto__ == Point.prototype); //It is the prototype of objects constructed by that function.
console.log(myPoint.__proto__.__proto__ == Object.prototype);
console.log(myPoint instanceof Point);
console.log(myPoint instanceof Object);
console.log(literalPoint);
*/

/*
//object.create always creates a brand new  empty object and its  __proto__ has reference of original object from which it created
const obj = { name: "dd", email: "dd@gmail.com" };
let newObj = Object.create(obj);
console.log(newObj); //{}
console.log(newObj.__proto__ == obj); //true
newObj.__proto__.name = "ee";
console.log(obj); //{ name: 'ee', email: 'dd@gmail.com' }
let arr = Object.keys(obj);
console.log(arr);

*/
/*

{
    "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
    },
    "adapter": [
        "xhr",
        "http",
        "fetch"
    ],
    "transformRequest": [
        null
    ],
    "transformResponse": [
        null
    ],
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": -1,
    "env": {},
    "headers": {
        "Accept": "application/json, text/plain, *",
        "Content-Type": "application/json",
        "Authorization": "d8e0b11fbfe76bc2f65f08406bee31"
    },
    "url": "http://dev-api.daily.local:30008/api",
    "data": "{\"query\":\"mutation MyMutation($page: Int , $perPage: Int , $search: String , $sortKey: String , $sortValue: String ) { PATIENT_SVC_PatientService_patientGroupList( input: {page: $page, perPage: $perPage, search: $search, sortKey: $sortKey, sortValue: $sortValue} ) { data { count groupListData { groupName id patientCount uniqueEmailCount uniqueNumberCount updatedAt } } error status } }\",\"variables\":{\"perPage\":20,\"page\":1,\"search\":\"\",\"sortKey\":\"groupName\",\"sortValue\":\"asc\"}}",
    "method": "post"
}
*/