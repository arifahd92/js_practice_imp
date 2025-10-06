/*
function send() {
    console.log(this == res)
    return this.status;
}
const res = {
    status: 200,
    message: "success",
    send
}
res.send(100);


let originalSend = res.send;
originalSend
*/
// (function () {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(function () {
//             console.log('A:', i);
//         }, 0);

//         (function (j) {
//             setTimeout(function () {
//                 console.log('B:', j);
//             }, 0);
//         })(i);
//         console.log('C:', i);
//     }

// })();

/*
globalThis.name = "Global";

const obj = {
  name: "Object",
  getNameRegular: function () {
    console.log("Regular:", this.name);
    return function () {
      console.log("Inner Regular:", this.name);
    };
  },
  getNameArrow: function () {
    console.log("Arrow Parent:", this.name);
    return () => {
      console.log("Inner Arrow:", this.name);
    };
  }
};

const regular = obj.getNameRegular(); // Line A//regular: object
regular();                            // Line B//Inner Regular:Global

const arrow = obj.getNameArrow();     // Line C//Arrow Parent: Object
arrow();                              // Line D//Inner Arrow: Object

const { getNameRegular, getNameArrow } = obj;

getNameRegular()();                   // Line E// global, global
getNameArrow()();                     // Line F// Arrow Parent: Global, Inner Arrow: Global
*/

/*
globalThis.title = "Global Title";

function printTitle() {
  console.log("Title:", this.title);
}

const book = {
  title: "Book Title",
  printTitle: printTitle,
  getBoundTitle: function () {
    return function () {
      console.log("Bound Title:", this.title);
    }.bind(this);
  },
  getArrowTitle: function () {
    return () => {
      console.log("Arrow Title:", this.title);
    };
  }
};

const detachedPrint = book.printTitle;
detachedPrint(); // Line A

book.printTitle(); // Line B

const boundFn = book.getBoundTitle(); // Line C
boundFn(); // Line D

const arrowFn = book.getArrowTitle(); // Line E
arrowFn(); // Line F

const { getBoundTitle, getArrowTitle } = book;

getBoundTitle()(); // Line G
getArrowTitle()(); // Line H
*/
// var a = 10;
// let b = 20;
// console.log(globalThis," globalThis");
// console.log(this)
// console.log(this == globalThis, "this == globalThis");
// console.log(this.a, "this.a");
// console.log(this.b, "this.b");
// console.log(globalThis.a, "globalThis.a");
// console.log(globalThis.b, "globalThis.b");

function outer() {
  console.log(u);
}
let u = 10;

let dateString = new Date().toISOString();
console.log(`dateString`, dateString);
console.log(new Date(null));
console.log();
