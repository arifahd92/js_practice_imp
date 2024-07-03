/** @format */
/*
const getHighestScorer = ([...students]) => {
  let max = 0;
  let users = [];
  students.forEach((item) => {
    let scores = Object.values(item.scores);
    // console.log({ scores });
    let sum = scores.reduce((current, item) => item + current);
    console.log({ sum });
    if (sum > max) {
      users = [item.name];
      max = sum;
      sum = 0;
    } else if (sum === max) {
      users.push(item.name);
    }
  });
  return users;
};

const students = [
  {
    name: "John",
    scores: {
      math: 90,
      science: 85,
      english: 88,
    },
  },
  {
    name: "Alice",
    scores: {
      math: 85,
      science: 90,
      english: 85,
    },
  },
  {
    name: "Emma",
    scores: {
      math: 90,
      science: 85,
      english: 88,
    },
  },
];

console.log(getHighestScorer(students)); // Output: ["John", "Emma"]
*/

/*
const getSubjectAverage = (students, subject) => {
  let sum = 0;
  let count = 0;
  students.forEach((element) => {
    let subjectScore = element.scores[subject];
    if (subjectScore !== undefined) {
      sum += subjectScore;
      count++;
    }
  });

  return count > 0 ? sum / count : 0;
};

const students = [
  {
    name: "John",
    scores: {
      math: 90,
      science: 85,
      english: 88,
    },
  },
  {
    name: "Alice",
    scores: {
      math: 85,
      science: 90,
      english: 85,
    },
  },
  {
    name: "Emma",
    scores: {
      math: 80,
      science: 85,
      english: 90,
    },
  },
];

console.log(getSubjectAverage(students, "math")); // Output: 85 (average of 90, 85, and 80)
console.log(getSubjectAverage(students, "history")); // Output: 0 (no students have scores in history)
*/

/*
const getTotalPagesByAuthor = (books, author) => {
  let total_page = 0;
  books.forEach((element) => {
    if (element.author === author) {
      total_page += element.pages;
    }
  });
  return total_page;
};
const books = [
  {
    title: "Book 1",
    author: "Author A",
    year: 2020,
    pages: 200,
  },
  {
    title: "Book 2",
    author: "Author B",
    year: 2021,
    pages: 250,
  },
  {
    title: "Book 3",
    author: "Author A",
    year: 2022,
    pages: 300,
  },
];

console.log(getTotalPagesByAuthor(books, "Author A")); // Output: 500 (200 + 300)
console.log(getTotalPagesByAuthor(books, "Author B")); // Output: 250
console.log(getTotalPagesByAuthor(books, "Author C")); // Output: 0 (no books by Author C)
*/

/*
const getTotalValue = (products) => {
  let total = 0;
  products.forEach((element) => {
    total += element.price * element.quantity;
  });
  return total;
};
const products = [
  {
    id: 1,
    name: "Product A",
    price: 10,
    quantity: 2,
  },
  {
    id: 2,
    name: "Product B",
    price: 20,
    quantity: 3,
  },
];

console.log(getTotalValue(products)); // Output: 80 (10 * 2 + 20 * 3)
*/
/*
const getNetBalance = (transactions) => {
  let total = 0;
  transactions.forEach((element) => {
    if (element.type === "debit") {
      total -= element.amount;
    } else {
      total += element.amount;
    }
  });
  return total;
};

const transactions = [
  { id: 1, amount: 100, type: "debit" },
  { id: 2, amount: 200, type: "credit" },
  { id: 3, amount: 50, type: "debit" },
];

console.log(getNetBalance(transactions)); // Output: 50 (200 - 100 - 50)
*/

/*
const getMonthlyNetBalance = (transactions, year, month) => {
  let total = 0;
  transactions.forEach((element) => {
    let yearD = element.date.slice(0, 4);
    let monthD = element.date.slice(5, 7);
    if (year === parseInt(yearD) && month === parseInt(monthD)) {
      if (element.type === "debit") {
        total -= element.amount;
      } else {
        total += element.amount;
      }
    }
  });
  return total;
};





/*
var animal = "a";
if (1) {
  animal = "b";
  function animal() {}
  animal = "c";
}
console.log(animal);
*/

/*
let arr = [1, 2, 3, 4, 5];

let arrDoubled = arr.reduce((acc, curr) => {
  acc.push(curr * 2);
  return acc;
}, []);
console.log({ arrDoubled });
*/

/*
let num = 5;

function doSomething(n) {
  if (n <= 1) {
    return 1;
  }
  return n * doSomething(n - 1);
}
console.log(doSomething(num));
*/

/*
let arr = [1, [30, 40], 10];

function doSomething(arr) {
  let flattenArr = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      let res = 
      flattenArr = [...flattenArr, ...doSomething(item)];// inside this ...flattenArr is already copied now what ever do something will return will be concatenated
    } else {
      flattenArr.push(item);
    }
  }
  return flattenArr;
}

console.log(doSomething(arr));
*/

/*
const users = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
  { id: "2", name: "David" },
  { id: "1", name: "Eve" },
  { id: "4", name: "Frank" },
  { id: "3", name: "Grace" },
];
// let res = users.reduce((current, item) => {
//   let exists = current.find((a) => a.id == item.id);
//   if (!exists) {
//     current.push({ id: item.id, user: [item.name] });
//   } else {
//     exists.user = [...exists.user, item.name];
//   }
//   return current;
// }, []);

let res = [];
for (let i = 0; i < users.length; i++) {
  let item = users[i];
  let index;
  for (let j = 0; j < res.length; j++) {
    if (item.id == res[j].id) {
      index = j;
      break;
    }
  }
  if (index) {
    res[index].user.push(item.name);
    index = null;
  } else {
    res.push({ id: item.id, user: [item.name] });
  }
}

console.log(res);
*/

/*
let arr = [
  "mango",
  "Apple",
  "banana",
  "mango",
  "Apple",
  "mango",
  "Apple",
  "banana",
  "mango",
];

let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = (obj[arr[i]] || 0) + 1;
}
console.log(obj);
let res = arr.reduce((acc, item) => {
  // acc[item] ? (acc[item] += 1) : (acc[item] = 1);
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(res);
*/

/*
const arrayOfObjects = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
  { id: 4, name: "David Wilson", email: "david@example.com" },
  { id: 5, name: "Eve Davis", email: "eve@example.com" },
];

const objectOfObjects = arrayOfObjects.reduce((acc, item) => {
  const id = item.id;
  acc[id] = { name: item.name, email: item.email };
  return acc;
}, {});

console.log(objectOfObjects);
*/

/*
const factorsA = [2, 4, 8, 2, 8, 20];
const factorsB = [2, 4, 5, 10, 20, 20, 2];
//op arr [2, 4, 2, 20]
let op = [];
let n1 = factorsA.length,
  n2 = factorsB.length;
for (let i = 0; i < n1; i++) {
  let curr = factorsA[i];
  for (let j = 0; j < n2; j++) {
    if (factorsB[j] == curr) {
      factorsB[j] = "";
      op.push(curr);
      break;
    }
  }
}
console.log({ op });
*/
let str1 = `1" OR "1"="1`;
let str2 = "arif";

let strs = (anything) => {
  return `"${anything}"`;
};

console.log(strs(str1));
console.log(strs(str2));
