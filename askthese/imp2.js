/*
const obj = {
  a: (x, cb) => cb(null, x * 2),
  nested: {
    b(y, cb) {
      setTimeout(() => cb(null, y + 5), 50);
    },
  },
};
// obj.a(10, (a, res) => console.log(res));
function recurseObj(obj) {
  let obj3 = {};
  for (const key in obj) {
    if (typeof obj[key] === "function") {
      obj3[key + "Async"] = (x) =>
        new Promise((resolve) => {
          obj[key](x, (a, b) => resolve(b));
        });
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      obj3[key] = recurseObj(obj[key]);
    } else {
      obj3[key] = obj[key];
    }
  }
  return obj3;
}
const obj3 = recurseObj(obj);
console.log(obj3);

obj3.aAsync(10).then((a) => console.log(a)); // 20
obj3.nested.bAsync(10).then(console.log); // 15

*/
const testObj = {
  name: "Calculator",
  version: 1,
  nums: [1, 2, 3], // should remain as-is

  // 1 argument
  double(x, cb) {
    cb(null, x * 2);
  },

  // multi parameter (2 params)
  add(a, b, cb) {
    cb(null, a + b);
  },

  // 3 params
  multiply(a, b, c, cb) {
    cb(null, a * b * c);
  },

  // uses "this"
  getName(cb) {
    cb(null, this.name);
  },

  // nested objects
  nested: {
    x: 5,

    inc(v, cb) {
      cb(null, v + 1);
    },

    deep: {
      y: 10,
      addToY(val, cb) {
        cb(null, val + this.y); // this binding test
      },
    },
  },

  // error test
  divide(x, y, cb) {
    console.log(x, y, cb, "im cb");
    if (y === 0) return cb("Divide by zero");
    cb(null, x / y);
  },
};

function generateObjAsync(testObj) {
  const objAsync = {};
  for (const key in testObj) {
    if (typeof testObj[key] === "function") {
      objAsync[key + "Async"] = function (...args) {
        return new Promise((res, rej) => {
          testObj[key](...args, (err, response) => {
            err ? rej(err) : res(response);
          });
        });
      };
    } else if (
      typeof testObj[key] === "object" &&
      !Array.isArray(testObj[key])
    ) {
      objAsync[key] = generateObjAsync(testObj[key]);
    } else {
      objAsync[key] = testObj[key];
    }
  }
  return objAsync;
}
const objAsync = generateObjAsync(testObj);
console.log(objAsync);
objAsync.divideAsync(1, 4).then((res) => console.log(res));
objAsync.getNameAsync().then((res) => console.log(res));
objAsync.nested.deep.addToYAsync(3).then((res) => console.log(res));





let arr = [1, 2, [3, 4, [5, 6]],[12,13]];

function unwrap(arr) {
  let ans = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      ans = [...ans, ...unwrap(item)];
    } else {
      ans.push(item);
    }
  }
  return ans
}
console.log(unwrap(arr))