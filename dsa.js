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

const transactions = [
  { id: 1, amount: 100, type: "debit", date: "2024-05-10" },
  { id: 2, amount: 200, type: "credit", date: "2024-05-15" },
  { id: 3, amount: 50, type: "debit", date: "2024-06-01" },
  { id: 4, amount: 150, type: "credit", date: "2024-05-20" },
];

console.log(getMonthlyNetBalance(transactions, 2024, 5)); // Output: 150 (200 - 100)
console.log(getMonthlyNetBalance(transactions, 2024, 6)); // Output: -50 (0 - 50)
*/

/*
const finalStatus = [
  {
    count: 0,
    statusText: "CONFIRMED",
  },
  {
    count: 0,
    statusText: "COMPLETE",
  },
  {
    count: 0,
    statusText: "BROKEN",
  },
  {
    count: 0,
    statusText: "SCHEDULED",
  },
];

// ids mapping info
const dailyStatusData = {
  SCHEDULED: [
    "295",
    "256",
    "7",
    "6",
    "97",
    "312",
    "93",
    "1",
    "291",
    "296",
    "297",
    "252",
    "92",
    "247",
    "142",
    "23",
  ],
  CONFIRMED: ["2", "9", "21", "95", "292", "142", "20", "5", "10"],
  BROKEN: ["293", "98", "94", "0", "100", "99", "96", "19", "24", "4"],
  COMPLETE: ["-106", "8", "246", "3", "25", "22"],
};

//@ client data
const nullStatus = [
  { count: 2, statusId: "5", statusText: "1LMOM      Left Message On Machine" },
  { count: 2, statusId: "21", statusText: "Confirmed" },
  { count: 1, statusId: "2", statusText: "2FIRM      Appointment Confirmed" },
  { count: 3, statusId: "-106", statusText: "<COMPLETE>" },
  { count: 5, statusId: "3", statusText: "xPREMED    Premedication Req'd" },
  { count: 1, statusId: "95", statusText: "Patient Will Call Us" },
  { count: 5, statusId: "293", statusText: "Patient Will Call Us" },
  { count: 5, statusId: "293", statusText: "Patient Will Call Us" },
  { count: 10, statusId: "256", statusText: "Patient Will Call Us" },
  { count: 10, statusId: "256", statusText: "Patient Will Call Us" },
];
let statusIdObj = {};
let n = nullStatus.length;
for (let i = 0; i < n; i++) {
  const { statusId } = nullStatus[i];
  for (let key in dailyStatusData) {
    let index = dailyStatusData[key].indexOf(statusId);
    if (index != -1) {
      console.log(`${statusId} found inside ${key}`);
      for (item of finalStatus) {
        if (item.statusText == key) {
          item.count = item.count + nullStatus[i].count;
          break;
        }
      }
      break;
    }
  }
}
console.log(finalStatus);
*/

/*
const getKeyByValue = (object, value) => {
  for (const prop in object) {
    if (object.hasOwnProperty(prop)) {
      if (object[prop].includes(value)) return prop;
    }
  }
  return "UNKNOWN";
};

const dailyStatusData = {
  SCHEDULED: [
    "295",
    "256",
    "7",
    "6",
    "97",
    "312",
    "93",
    "1",
    "291",
    "296",
    "297",
    "252",
    "92",
    "247",
    "142",
    "23",
  ],
  CONFIRMED: ["2", "9", "21", "95", "292", "142", "20", "5", "10"],
  BROKEN: ["293", "98", "94", "0", "100", "99", "96", "19", "24", "4"],
  COMPLETE: ["-106", "8", "246", "3", "25", "22"],
};

const data = [
  {
    count: 4,
    statusId: "6",
    statusText: "1LMWORK    Left Message At Work",
  },
  {
    count: 2,
    statusId: "5",
    statusText: "1LMOM      Left Message On Machine",
  },
  {
    count: 1,
    statusId: "2",
    statusText: "2FIRM      Appointment Confirmed",
  },
  { count: 2, statusId: "4", statusText: " NA        No Answer" },
  { count: 3, statusId: "-106", statusText: "<COMPLETE>" },
  { count: 3, statusId: "21", statusText: "Confirmed" },
  {
    count: 3,
    statusId: "7",
    statusText: "xLMPERS    Left Message With Person",
  },
  { count: 1, statusId: "95", statusText: "Patient Will Call Us" },
  {
    count: 5,
    statusId: "3",
    statusText: "xPREMED    Premedication Req'd",
  },
  {
    count: 4,
    statusId: "1",
    statusText: "xSET       Appointment Set/ Not Conf",
  },
  { count: 3, statusId: "0", statusText: "<none>" },
];

data.forEach((item, index) => {
  if (item.statusId) {
    item.statusText = getKeyByValue(dailyStatusData, item.statusId);
  }
  const { statusId, ...newData } = item;
  data[index] = newData; // Directly update the original array
});

console.log(data);

const finalStatus = [
  {
    count: 0,
    statusText: "CONFIRMED",
  },
];
*/

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
const response = [];
let data = [
  { count: 4, statusText: "SCHEDULED" },
  { count: 2, statusText: "CONFIRMED" },
  { count: 1, statusText: "CONFIRMED" },
  { count: 2, statusText: "BROKEN" },
  { count: 3, statusText: "COMPLETE" },
  { count: 3, statusText: "CONFIRMED" },
  { count: 3, statusText: "SCHEDULED" },
  { count: 1, statusText: "CONFIRMED" },
  { count: 5, statusText: "COMPLETE" },
  { count: 4, statusText: "SCHEDULED" },
  { count: 3, statusText: "BROKEN" },
];

let n = response.length;
for (item of data) {
  const text = item.statusText;
  let found = false;
  for (var i = 0; i < n; i++) {
    if (response[i].statusText == text) {
      found = true;
      break;
    }
  }
  if (found) {
    response[i].count += item.count;
    found = false;
  } else {
    response.push({ ...item });
  }
}
// console.log(response);
// data = data.reduce((acc, curr) => {
//   const existing = acc.find((item) => item.statusText === curr.statusText);
//   if (existing) {
//     existing.count += curr.count;
//   } else {
//     acc.push({ ...curr });
//   }
//   return acc;
// }, []);
// console.log(data);

let op = data.reduce((acc, item) => {
  const exists = acc.find((resitem) => resitem.statusText == item.statusText);
  if (exists) {
    exists.count += item.count;
    return acc;
  } else {
    acc.push({ ...item });
    return acc;
  }
}, []);
console.log(op);
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
