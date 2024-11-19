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

/*
let str1 = `1" OR "1"="1`;
let str2 = "arif";
let arr = [];
let strs = (anything) => {
  arr.push(`"${anything}"`);
  console.log(`"${anything}"`); 
};

strs(str1);
strs(str2);
console.log(arr);
*/

/*
let data = [
  {
    count: 2,
    month: 6,
  },
  {
    count: 1,
    month: 6,
  },
  {
    count: 1,
    month: 4,
  },
  {
    count: 62,
    month: 6,
  },
  {
    count: 7,
    month: 2,
  },
  {
    count: 8,
    month: 3,
  },
  {
    count: 314,
    month: 5,
  },
  {
    count: 175,
    month: 6,
  },
  {
    count: 30,
    month: 4,
  },
];
let objArr = [];
// for (item of data) {
//   let index = objArr.findIndex((item2) => item2.month == item.month);
//   if (index == -1) {
//     let obj = {
//       month: item.month,
//       count: item.count,
//     };
//     objArr.push(obj);
//   } else {
//     objArr[index].count += item.count;
//   }
// }

//now using reduce method
const res = data.reduce((acc, curr) => {
  let index = acc.findIndex((item) => item.month == curr.month);
  if (index != -1) {
    acc[index].count += curr.count;
  } else {
    acc.push({ month: curr.month, count: curr.count });
  }
  return acc;
}, []);
console.log(`before`);
console.log(res);

let arr = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11];
for (items of arr) {
  let index = res.findIndex((item) => item.month == items);
  if (index == -1) {
    res.push({ month: items, count: 0 });
  }
}
console.log("after");
res.sort((a, b) => +a.month - +b.month);
console.log(res);
*/

/*
const currentDate = new Date();
const isoString = currentDate.toISOString();
console.log(isoString);
*/

/*
function getToFromDate(month) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();
  console.log({ currentDay });
  const toDate = new Date(Date.UTC(currentYear, month, 9));
  const fromDate = new Date(Date.UTC(currentYear, month, 1));
  const toDateIsoString = toDate.toISOString();
  const fromDateIsoString = fromDate.toISOString();
  return {
    fromDateIsoString,
    toDateIsoString,
  };
}
console.log(getToFromDate(-1));
// const currentMonth = new Date().getMonth();

function daysInMonth(year, month) {
  // month is 0-indexed (0 for January, 11 for December)
  return new Date(year, month + 1, 0).getDate();
}

// Example usage
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

const days = daysInMonth(currentYear, currentMonth);
console.log(
  `The month ${currentMonth + 1} in the year ${currentYear} has ${days} days.`
);
*/

/*
const today = new Date();
const dayOfWeek = today.getDay(); // Get the current day of the week (0-6)
const startOfWeek = new Date(today); // Clone today's date
const endOfWeek = new Date(today); // Clone today's date

// Adjust startOfWeek to the previous Monday
startOfWeek.setDate(
  today.getDate() - 1 - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)
);

// Adjust endOfWeek to the next Monday
endOfWeek.setDate(
  today.getDate() + (7 - dayOfWeek) + (dayOfWeek === 0 ? 0 : -1)
);

// Format dates to ISO strings
const startOfWeekISO = startOfWeek.toISOString();
const endOfWeekISO = endOfWeek.toISOString();

console.log({ startOfWeekISO, endOfWeekISO });
*/

/*
const today = new Date();
const dayOfWeek = today.getDay();
const startOfWeek = new Date(today);
const endOfWeek = new Date(today);

startOfWeek.setDate(today.getDate() - dayOfWeek - 7);

endOfWeek.setDate(today.getDate() - dayOfWeek - 1);

const startOfWeekISO = startOfWeek.toISOString();
const endOfWeekISO = endOfWeek.toISOString();

console.log({ startOfWeekISO, endOfWeekISO });
*/
/*
function getToFromOfWeek(prev) {
  const today = new Date(); //current date
  const dayOfWeek = today.getDay(); // 4 as of it is  thursday,(0 for sunday), getDate() gives actual date day 1 to 31
  const startOfWeek = new Date(today); // current date hi hai as today
  const endOfWeek = new Date(today); // aaj ka date hi is week ka end
  console.log(today.getDate(), "today.getDate()");
  startOfWeek.setDate(today.getDate() - dayOfWeek); //ajj ki tarikh se utne din subtract kar diya jitna sunday se jyada hai

  // const startOfWeekISO = startOfWeek.toISOString();
  // const endOfWeekISO = endOfWeek.toISOString();
  console.log(typeof (endOfWeek + ""));
  return { startOfWeek, endOfWeek };
}

getToFromOfWeek(false); // Current week: from Sunday to today
// getToFromOfWeek(true); // Previous week: from previous Sunday to previous Saturday
*/

// const date = new Date();
// const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
// console.log(endDate);

// let getRowData= getPatient?.row?.[0];

// const{name,email}=getRowData
/*
const dayjs = require("dayjs");
const weekday = require("dayjs/plugin/weekday");

dayjs.extend(weekday);

// Helper function to get custom week range
function getCustomWeekRange(date) {
  const startOfWeek = date.weekday(1); // Monday
  const endOfWeek = date.weekday(6); // Saturday
  return {
    start: startOfWeek.toDate(),
    end: endOfWeek.toDate(),
  };
}

// Get the start and end dates of the current week (Monday to Saturday)
const currentWeekRange = getCustomWeekRange(dayjs());
console.log("Current week start (Monday):", currentWeekRange.start);
console.log("Current week end (Saturday):", currentWeekRange.end);

// Get the start and end dates of the previous week (Monday to Saturday)
const previousWeekRange = getCustomWeekRange(dayjs().subtract(1, "week"));
console.log("Previous week start (Monday):", previousWeekRange.start);
console.log("Previous week end (Saturday):", previousWeekRange.end);
*/

/*
let monthName = {
  1: "jan",
  2: "feb",
  3: "march",
  4: "apr",
  5: "may",
  6: "june",
  7: "july",
  8: "aug",
  9: "sep",
  10: "oct",
  11: "nov",
  12: "dec",
};
let data = [
  {
    count: 3,
    monthCount: 8,
    wayOfBooking: "way2",
    year: 2023,
  },
  {
    count: 3,
    monthCount: 9,
    wayOfBooking: "way2",
    year: 2023,
  },
  {
    count: 7,
    monthCount: 10,
    wayOfBooking: "way2",
    year: 2023,
  },
  {
    count: 4,
    monthCount: 12,
    year: 2023,
  },
  {
    count: 8,
    monthCount: 1,
    year: 2024,
  },
  {
    count: 4,
    monthCount: 1,
    wayOfBooking: "way3",
    year: 2024,
  },
  {
    count: 3,
    monthCount: 1,
    wayOfBooking: "way5",
    year: 2024,
  },
  {
    count: 4,
    monthCount: 1,
    wayOfBooking: "way4",
    year: 2024,
  },
  {
    count: 10,
    monthCount: 1,
    wayOfBooking: "way1",
    year: 2024,
  },
  {
    count: 24,
    monthCount: 2,
    year: 2024,
  },
  {
    count: 6,
    monthCount: 2,
    wayOfBooking: "way3",
    year: 2024,
  },
  {
    count: 10,
    monthCount: 2,
    wayOfBooking: "way2",
    year: 2024,
  },
  {
    count: 25,
    monthCount: 3,
    wayOfBooking: "way3",
    year: 2024,
  },
  {
    count: 19,
    monthCount: 3,
    wayOfBooking: "way2",
    year: 2024,
  },
  {
    count: 1,
    monthCount: 4,
    wayOfBooking: "way3",
    year: 2024,
  },
  {
    count: 6,
    monthCount: 4,
    wayOfBooking: "way2",
    year: 2024,
  },
  {
    count: 6,
    monthCount: 5,
    wayOfBooking: "way1",
    year: 2024,
  },
  {
    count: 16,
    monthCount: 5,
    wayOfBooking: "way3",
    year: 2024,
  },
  {
    count: 9,
    monthCount: 5,
    wayOfBooking: "way2",
    year: 2024,
  },
  {
    count: 5,
    monthCount: 6,
    wayOfBooking: "way3",
    year: 2024,
  },
  {
    count: 37,
    monthCount: 6,
    wayOfBooking: "way1",
    year: 2024,
  },
  {
    count: 7,
    monthCount: 6,
    wayOfBooking: "way2",
    year: 2024,
  },
  {
    count: 67,
    monthCount: 7,
    wayOfBooking: "way1",
    year: 2024,
  },
];

let res = data.map((item) => {
  let key = item.monthCount;
  item.monthCount = monthName[key];
  let sum = 0;
  for (item2 of data) {
    if (
      item2["monthCount"] == item["monthCount"] &&
      item2["year"] == item2["year"]
    ) {
      sum += item2["count"];
    }
  }
  // item.total = sum;
  let modified = { ...item, total: sum };
  sum = 0;
  return modified;
});
console.log(res);
*/

/*
const Data = [
  {
    count: 1,
    date: 7,
    origin: "eeee",
  },
  {
    count: 3,
    date: 7,
    origin: "wwwww",
  },
  {
    count: 1,
    date: 12,
    origin: "eeee",
  },
  {
    count: 20,
    date: 13,
    origin: "wwwww",
  },
  {
    count: 12,
    date: 14,
    origin: "dddddd",
  },
  {
    count: 8,
    date: 14,
    origin: "wwwww",
  },
  {
    count: 5,
    date: 14,
    origin: "eeee",
  },
  {
    count: 10,
    date: 17,
    origin: "dddddd",
  },
  {
    count: 4,
    date: 18,
    origin: "dddddd",
  },
  {
    count: 3,
    date: 19,
    origin: "dddddd",
  },
  {
    count: 2,
    date: 20,
    origin: "dddddd",
  },
];
let formatted = {};
Data.forEach(({ date, count, origin }, ind) => {
  const key = date;
  if (formatted[key]) {
    let { countArr, originArr } = formatted[key];
    countArr.push(count);
    originArr.push(origin);
    formatted[key].total += count;
  } else {
    formatted[key] = { countArr: [count], originArr: [origin], total: count };
  }
});
console.log(formatted);
*/

// const apiData = require("./data.js");
// const { data, sources } = apiData;
// console.log(data);
// console.log(sources);
// const obj = {};
// data.forEach((item) => {
//   const { count, name, year, source } = item;
//   if (!obj[name]) {
//     obj[name] = {
//       totalCount: count,
//       details: {
//         ...sources,
//         [source]: count,
//       },
//     };
//   } else {
//     obj[name].totalCount += count;
//     obj[name].details[source] += count;
//   }
// });
// console.log(obj);

/*
const aggregateArr = data.reduce((acc, curr) => {
  const { count, name, year, source } = curr;
  const index = acc.findIndex((item) => item.name == name);
  if (index == -1) {
    const brandNew = {
      name,
      totalCount: count,
      detail: { ...sources, [source]: count },
    };
    acc.push(brandNew);
  } else {
    acc[index].totalCount += count;
    acc[index].detail[source] += count;
  }
  return acc;
}, []);
console.log(aggregateArr);
// const makeUpObj = { name: [name], totalCount: 0, detail: { ...sources } };
*/

/*
const mapperObj = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};
const { threeMonthData } = apiData;
// console.log(sources);
const start = 2,
  end = 7;

const obj = {};
const mapped = threeMonthData.reduce((acc, item) => {
  const { name, count, source, year } = item;
  if (!acc[name]) {
    acc[name] = {
      name: mapperObj[name],
      year: year,
      count: { ...sources, [source]: count },
    };
  } else {
    acc[name].count[source] += count;
  }
  return acc;
}, {});

for (i = start; i <= end; i++) {
  let year;

  if (!mapped[i]) {
    mapped[i] = {
      name: mapperObj[i],
      count: { ...sources },
      year: NaN,
    };
  }
}
console.log(mapped);

// 15 1
let k = 1;
let arr = [7, 6, 7, 10, 3, 2, 8, 9, 4, 7, 2, 5, 2, 8, 4];

function firstElement(arr, n, k) {
  //your code here
  const obj = {};
  for (const item of arr) {
    obj[item] = obj[item] + 1 || 1;
  }
  let res = -1;
  console.log(obj);
  for (const item of arr) {
    console.log({ item, val: arr });
    if (obj[item] === k) {
      res = item;
      break;
    }
  }
  return res;
}
console.log(firstElement(arr, arr.length, k));
*/

// let opIdFromService = ["1", "a", "3"];
// let opIdFromRequest = ["3", "1", "e"];

// let isOpIdFromRequestSubsetOfOpIdFromService = opIdFromRequest.every((item) =>
//   opIdFromService.includes(item)
// );
// console.log({ isOpIdFromRequestSubsetOfOpIdFromService });

/*
const arrOfArr = [["1"], ["a"], ["3"]];
try {
  const updated = arrOfArr.reduce((acc, curr) => {
    let flag = true;
    acc.push(...curr);
    curr.forEach(async (item) => {
      console.log({ item });
      if (item == "a") {
        flag = false;
        // console.log(`going to threw error`);
        // throw new Error();
        //due to async nature this throw is not being handled through try catch that's why I i used flag and threw error from non async function and got handled by try catch
      }
    });
    console.log({ flag });
    if (!flag) {
      throw new Error("custom threw error");
    }
    return acc;
  }, []);
  console.log({ updated });
} catch (error) {
  console.log(` successfully caught threw error`);
  console.log(error.message);
}
  */

/*
async function asyncMethod() {
  return "3";
}
try {
  const arrOfArr = [["1"], ["a"], ["3"]];
  const updated = arrOfArr.reduce((acc, curr) => {
    acc.push(...curr);
    curr.forEach(async (item) => {
      let res = await asyncMethod();
      console.log({ item, res });
      if (item == res) {
        // throw new Error();
      }
    });
    console.log(curr);
    return acc;
  }, []);
  console.log({ updated });
} catch (error) {
  console.log(` successfully caught threw error`);
  console.log(error.message);
}
*/

//chatgpt code
/*
async function asyncMethod() {
  return "3";
}

(async () => {
  try {
    const arrOfArr = [["1"], ["a"], ["3"]];

    const updated = await arrOfArr.reduce(async (accPromise, curr) => {
      const acc = await accPromise; // Wait for the previous accumulation
      acc.push(...curr);

      await Promise.all(
        curr.map(async (item) => {
          let res = await asyncMethod();
          console.log({ item, res });
          if (item == res) {
            throw new Error("Item matches asyncMethod result");
          }
        })
      );

      console.log(curr);
      return acc;
    }, Promise.resolve([]));

    console.log({ updated });
  } catch (error) {
    console.log("Successfully caught threw error");
    console.log(error.message);
  }
})();
*/

/*
let arr = [1, 2, 3, 4];
let res = arr.filter(async (item, ind) => {
  console.log({ item });
});
console.log(res); // [1, 2, 3, 4 ]
*/

/*
const user = [{ id: 1, name: "user1" }, { id: 2 }];

// const [a, b] = user;
// const { id: id1, name: name1 } = a;
// const { id: id2, name: name2 = "default" } = b;
// console.log({ id1, id2, name1, name2 }); //{ id1: 1, id2: 2, name1: 'user1', name2: 'default' }

const [{ id: id1, name: name1 }, { id: id2, name: name2 = "default" }] = user;
console.log({ id1, id2, name1, name2 }); //{ id1: 1, id2: 2, name1: 'user1', name2: 'default' }
*/

/*
function format(amount = 0.01) {
  const arr = amount.toString().split(".");
  let decimalPart = "00";
  if (arr[1]?.length >= 2) {
    decimalPart = arr[1];
  } else if (arr[1]?.length == 1) {
    decimalPart = arr[1] + "0";
  }
  return arr[0] + "." + decimalPart;
}
// console.log(format(0.1999));
*/

/*
// imp => Avoid `include` method  in js it makes O(N^2) Time complexity

const statuses = {
  confirm: [1, 2, 3],
  unConfirm: [4, 5, 6],
};

let data = [
  { statusId: 1, user: "a" },
  { statusId: 3, user: "b" },
  { statusId: 5, user: "c" },
];
// task is in data array in each element add one more key name status whose value will be taken from statuses key based on its statusId

//expected output , [{ statusId: 1, user: "a", status:"confirm" },{ statusId: 3, user: "b", status:"confirm" },{ statusId: 5, user: "c", status:"unConfirm" }];

//? bad solution  with `include`

// data.forEach((item) => {
//   for (const key in statuses) {
//     if (statuses[key].includes(item.statusId)) {
//       item.status = key;
//       break;
//     }
//   }
// });
// console.log(data);//? got correct output

// ? M2 without include
let obj = {};
for (const key in statuses) {
  for (const item of statuses[key]) {
    obj[item] = key;
  }
}

data.forEach((item) => {
  item.status = obj[item.statusId];
});
console.log(data);
*/

/*
//? common in two arrays

const arr1 = [1, 2, 3, 2, 4, 3, 5, 6, 9];
const arr2 = [9, 5, 2, 2, 3, 2, 4, 4];
//? op [2,3,2,4,5,9]

const mappedObj1 = arr1.reduce((acc, curr) => {
  acc[curr] = (acc[curr] ?? 0) + 1;
  return acc;
}, {});
const mappedObj2 = arr2.reduce((acc, curr) => {
  acc[curr] = (acc[curr] ?? 0) + 1;
  return acc;
}, {});
// console.log(mappedObj2);
let arr = [];
for (const key in mappedObj1) {
  if (mappedObj2[key]) {
    count = Math.min(mappedObj1[key], mappedObj2[key]);
    while (count-- > 0) {
      arr.push(+key);
    }
  }
}
console.log(arr);

*/
/*
const user = {
  name: "arif",
  age: 20,
  address: {
    current: { village: "thaltej", post: "ahmedabad" },
    local: "abcd",
  },
};

let obj = {};
function createDeepCopy(obj, newObj = {}) {
  for (const key in obj) {
    let run = {};
    if (typeof key === "object") {
      createDeepCopy(key);
    } else {
      run[key] = obj[key];
    }
    deep = { ...deep, ...run };
  }
  return deep;
}
let res = createDeepCopy(user);
res.local = "hju";
console.log(user);
*/
/*
let arr1 = [1, 2, 3];
let updated = [4, 3, 2];
//common in both, newElm in updated ,discarded by arr 2
const obj1 = arr1.reduce((acc, curr) => {
  acc[curr] = (acc[curr] ?? 0) + 1;
  return acc;
}, {});
const common = updated.filter((item) => obj1[item]); //[3,2]

const newElm = updated.filter((item) => !obj1[item]); //4

const discarded = arr1.filter((item) => !updated.includes(item));
console.log({ common, newElm, discarded }); //[1]
*/
/*
let str = `A.createdBy`;
str = str.replaceAll("A.createdBy", "A.createdBy.id");
console.log(str);
*/
/*
let start = 0;
function handlePressNum(num) {
  numToAdd = num / 100;
  start = (start * 10 + numToAdd).toFixed(2);
  console.log(start);
}

handlePressNum(7); // === 0.07
handlePressNum(5); // === 0.75
handlePressNum(6); //=== 7.56
handlePressNum(8); //=== 75.68
handlePressNum(0); // === 756.80
*/
//imp flatten array
/*
let arr = [1, 2, 3, 3, [2, [7, [5, 6, [4]]]]];

function flattenedArr(arr, res = []) {
  for (const item of arr) {
    if (!Array.isArray(item)) {
      res.push(item);
    } else {
      flattenedArr(item, res);
    }
  }

  return res;
}
console.log(flattenedArr(arr));
*/

/*
// first repeating character
let arr = [1, 3, 2, 4, 2, 3];
const freqObj = arr.reduce((acc, curr) => {
  acc[`${curr}a`] = acc[`${curr}a`] + 1 || 1;
  return acc;
}, {});
console.log(freqObj);
*/

/*
// unique and duplicate 
let arr = [1, 3, 2, 4, 2, 3];//unique 1,4;duplicate 3,4
let tempObj = arr.reduce((acc, curr) => {
  acc[`${curr}a`] = acc[`${curr}a`] + 1 || 1;
  return acc;
}, {});
let unique = [],
  duplicate = [];
for (const key in tempObj) {
  tempObj[key] > 1
    ? duplicate.push(+key.replace("a", ""))
    : unique.push(+key.replace("a", ""));
}

console.log(duplicate, unique);
*/
/*
let arr = [1, 3, 2, 4, 2, 1];
let duplicate = arr.filter((item, ind) => {
  return arr.indexOf(item) !== ind;
});
console.log(duplicate);
*/

/*
var twoSum = function (numbers, target) {
  let i = 0,
    j = numbers.length - 1,
    res = [];
  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      res = [i, j];
      i = j + 1;
    } else if (numbers[i] + numbers[j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return res;
};
console.log(twoSum([2, 7, 11, 15], 9));
*/
//find interval for a given number interval is 5 ,
//example for number from 1 to 5 interval will be 1 , 6 to 10 will be 2, 11 to 15 will be 3
/*
function findInterval(num, interval = 5) {
  let res1 = Math.ceil(num / interval);
  console.log({ res1 });
}
findInterval(1); //1
findInterval(10); //2
*/
// 123;

/*
const mydata = [
  {
    data: [
      {
        count: 0,
        quarter: 1,
      },
      {
        count: 0,
        quarter: 2,
      },
      {
        count: 0,
        quarter: 3,
      },
      {
        count: 0,
        quarter: 4,
      },
      {
        count: 0,
        quarter: 5,
      },
      {
        count: 0,
        quarter: 6,
      },
    ],
    realData: [
      {
        count: 4,
        quarter: 5,
      },
      {
        count: 5,
        quarter: 1,
      },
      {
        count: 11,
        quarter: 4,
      },
      {
        count: 12,
        quarter: 3,
      },
    ],
    source: "source1",
  },
  {
    data: [
      {
        count: 0,
        quarter: 1,
      },
      {
        count: 0,
        quarter: 2,
      },
      {
        count: 0,
        quarter: 3,
      },
      {
        count: 0,
        quarter: 4,
      },
      {
        count: 0,
        quarter: 5,
      },
      {
        count: 0,
        quarter: 6,
      },
    ],
    realData: [
      {
        count: 2,
        quarter: 2,
      },
      {
        count: 4,
        quarter: 4,
      },
      {
        count: 4,
        quarter: 5,
      },
    ],
    source: "source2",
  },
];
const mapped = mydata.map(({ data, realData, source }) => {
  let updated = [];
  data.forEach(({ count, quarter }) => {
    const index = realData.findIndex((item) => item.quarter == quarter);
    index === -1
      ? updated.push({ count, quarter })
      : updated.push(realData[index]);
  });
  return { updated, source };
});
*/

// target: generate a four digit number ( 1000 to 9999)
let rand = Math.random() * 9999; // 0 to 9999 with point
// discard 0 to 999 by adding 1000
rand = rand + 1000;
// now the problem is when rand will generate  9999, it will be 9999+1000
//

const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
console.log(randomNumber);

const wish = (additionalMessage = "") => {
  const bDate = Date.now();
  const bEnd = new Date("2024-11-06T00:00:00.000Z").getTime();
  const message =
    bEnd > bDate
      ? `Happy Birthday! @Anup 🎂. Let all your wishes come true ✨ ${additionalMessage}`
      : "happy birthday belated ";
  console.log(message);
};
wish();

/*

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
  }
];
const getHighestScorer = (students) => {
  let max = 0;
  sumArr = students.map(({ scores }) => {
    return Object.values(scores).reduce((acc, item) => acc + item, 0);
  });
  max = Math.max(...sumArr);
  let maxScorer = students
    .filter(({ scores }) => {
      return Object.values(scores).reduce((acc, item) => acc + item, 0) === max;
    })
    .map(({ name }) => name);
  return maxScorer;
};

console.log(getHighestScorer(students)); // Output: ["John", "Emma"]
*/

// imp dsa
/*
const students = [
  {
    name: "John",
    scores: {
      math: 90,
      science: 85,
      english: 88,
      hindi: 60,
    },
  },
  {
    name: "Alice",
    scores: {
      math: 85,
      science: 90,
      english: 85,
      urdu: 50,
    },
  },
  {
    name: "Emma",
    scores: {
      math: 90,
      science: 85,
      english: 88,
      urdu: 90,
    },
  },
  {
    name: "DEmma",
    scores: {
      science: 85,
      english: 88,
      art: 70,
      arabic: 50,
    },
  },
];

//check fail pass for  each student in each subject based on average of mark by all student in that subject, subject  may be inconsistent

function failPass(student) {
  const subjects = [
    ...new Set(student.flatMap(({ scores }) => Object.keys(scores))),
  ];
  // console.log(subjects);
  const average = subjects.reduce((acc, item) => {
    let sum = 0;
    count = 0;
    student.forEach(({ scores }) => {
      for (let key in scores) {
        if (key === item) {
          count++;
          sum += scores[key];
        }
      }
    });
    acc[item] = { averageMark: sum / count, noOfStudentOptedThisSub: count };
    return acc;
  }, {});
  console.log(`average of all subjects `);
  console.log(average);

  let finalRes = student.reduce((acc, { name, scores }) => {
    let data = [];
    for (let key in scores) {
      const criteria = average[key]?.averageMark;

      const status = criteria > scores[key] ? "fail" : "pass";
      data.push({ subject: key, status });
    }
    acc[name] = data;
    return acc;
  }, {});
  return finalRes;
}

console.log(failPass(students));
*/

/*
//merge two sorted array
let arr1 = [1, 2, 6, 7];
let arr2 = [3, 4, 5, 8, 9, 10];
let res = [];
let i = 0,
  j = 0;
while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    res.push(arr1[i++]);
  } else {
    res.push(arr2[j++]);
  }
}
while (i < arr1.length) {
  res.push(arr1[i++]);
}
while (j < arr2.length) {
  res.push(arr2[j++]);
}
console.log(res);
*/
/*
//binary search
let arr = [1, 4, 4, 4, 4, 6, 8, 8, 8],
  target = 8;
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1; //not found
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target && (arr[mid + 1] > target || mid + 1 == arr.length)) {
    return mid;
  }
  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  }
  if (arr[mid] <= target) {
    return binarySearch(arr, target, mid + 1, end);
  }
}
console.log(binarySearch(arr, target));
*/

/*
const generatePromise = (message, time = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
};
let promArr = [1, 2, 3, 4, 5].map((item) => {
  return generatePromise(item, item * 1000);
});
const customPromiseAll = (CB) => {
  //basic rule promise.then returns a promise , whose resolve value is return of .then
  let count = 1;
  let newPromArr = promArr.map(async (prom) => {
    const data = await prom;
    CB(count++, promArr.length);
    return data;
  });
  console.log(newPromArr);
  return Promise.all(newPromArr);
};

const calculatePercentage = (a, b) => {
  console.log(a + "out of " + b + " completed", (a / b) * 100 + "%");
};
customPromiseAll(calculatePercentage).then((data) => {
  console.log(data);
});
*/

// const set = new Set([1, 2, 2, { a: 4 }, { a: 4 }, 1]);
// set.add([8]);
// set.add([8]);
// console.log(set);

//--------------------------------------------
/*
let m = 3,
  n = 4;
let t = Array(m)
  .fill(0)
  .map(() => Array(n).fill(0));
console.log(t);
for (let i = 0; i < m; i++) {
  for (let j = 0; j < t[i].length; j++) {
    console.log(t[i][j]);
  }
}
 */
/*
let arr = [24, 12, 12, 24, 1, 4, 5, 2, 1, 1, 1, 4, 5, 100];
let target = 24;
let n = arr.length;
let maxLength = 0;

// for (let i = 0; i < n; i++) {
//   let sum = 0;
//   for (let j = i; j < n; j++) {
//     sum += arr[j];
//     if (sum === target) {
//       maxLength = Math.max(j - i + 1, maxLength);
//       break;
//     } else if (sum > target) {
//       break;
//     }
//   }
// }

// console.log(maxLength);

// Using Knapsack
function myFunc(arr, n, w) {
  if (n === 0 || w === 0) {
    return 0;
  }
  if (arr[n - 1] > w) {
    return myFunc(arr, n - 1, w);
  } else {
    return Math.max(
      myFunc(arr, n - 1, w),
      myFunc(arr, n - 1, w - arr[n - 1]) + 1
    );
  }
}
console.log(myFunc(arr, n, target), "from hrre");
*/

/*
let arr = [1, 4, 5, 2, 1, 1, 4, 15, 5];
function insertLast(sortedArr, temp) {
  if (sortedArr.length === 0 || sortedArr[sortedArr.length - 1] <= temp) {
    sortedArr.push(temp);
    return;
  }
  let val = sortedArr.pop(); // if i have taken out the last element from sorted array, then i have to put it back
  insertLast(sortedArr, temp);
  sortedArr.push(val); // put the last element back
}
function sortArr(arr) {
  if (arr.length <= 1) {
    return;
  }
  let temp = arr.pop();
  sortArr(arr);
  insertLast(arr, temp);
}
sortArr(arr);
console.log(arr);
*/

/*
let arr = [1, 2, 3, 4, 5];

function reverseArr(arr) {
  if (arr.length <= 1) {
    return;
  }
  let temp = arr.pop();
  reverseArr(arr);
  arr[0] = temp;
}
vs;
function reverseArr(arr) {
  if (arr.length <= 1) {
    return;
  }
  let temp = arr.pop();
  reverseArr(arr);
  arr.unshift(temp);
}
// why both working differently
reverseArr(arr);
console.log(arr);
*/
/*
let str = "cabacc";
let max = 1;
let op = "";

function checkPalindrome(s) {
  let i = 0;
  j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      break;
    } else {
      i++;
      j--;
    }
  }

  return j - i <= 0;
}

for (let i = 0; i < str.length; i++) {
  for (let j = i; j < str.length; j++) {
    let runner = "";
    for (let k = i; k <= j; k++) {
      runner += str[k];
    }
    if (checkPalindrome(runner)) {
      if (runner.length >= max) {
        max = runner.length;
        op = runner;
      }
    }
  }
}
console.log(op);
console.log(checkPalindrome("abba"));
*/
/*
let obj1 = {
  name: 1,
  age: 5,
};
let obj2 = {
  age: 5,
  name: 1,
};
console.log(
  JSON.stringify(
    Object.keys(obj1)
      .sort()
      .reduce((acc, key) => ({ ...acc, [key]: obj1[key] }), {})
  ) ===
    JSON.stringify(
      Object.keys(obj2)
        .sort()
        .reduce((acc, key) => ({ ...acc, [key]: obj2[key] }), {})
    )
);
*/
//check anagram efficiently
/*
let s = "anagram",
  t = "nagaram";

function checkAnagram(s, t) {
  let obj = {};
  let n1 = s.length,
    n2 = t.length;
  if (n1 != n2) {
    return false;
  }
  for (let i = 0; i < n1; i++) {
    obj[s[i]] = obj[s[i]] + 1 || 1;
  }
  let count = Object.keys(obj).length;
  for (let i = 0; i < n2; i++) {
    if (t[i] in obj) {
      obj[t[i]]--;
      if (obj[t[i]] === 0) {
        count--;
      }
    }
  }
  return count === 0;
}
console.log(checkAnagram(s, t));
*/
/*
// move non zero to left or right problem
const input = [0, 1, 2, 0, 3, 0, 5, 0, 2, 7, 9, 0];
//trick always decide  non zero elements place (so that we can maintain order too), start loop from (start of non zero index elemnt)
function moveZerosToEnd(...arr) {//array of all individual
  console.log(arr, "arrf");
  console.log(`going to move 0`);
  let n = arr.length;
  let nonzeroIndex = 0;
  let i = 0; //started loop from nonzero index start position
  while (i < n) {
    if (arr[i] !== 0) {
      [arr[nonzeroIndex], arr[i]] = [arr[i], arr[nonzeroIndex]];
      nonzeroIndex++;
    }
    i++;
  }

  return arr;
}


console.log(moveZerosToEnd(...input));

function moveZerosToStart(...arr) {
  let n = arr.length;
  let nonzeroIndex = n - 1;
  let i = n - 1;
  while (i >= 0) {
    if (arr[i] != 0) {
      [arr[nonzeroIndex], arr[i]] = [arr[i], arr[nonzeroIndex]];
      nonzeroIndex--;
    }
    i--;
  }
  return arr;
}
console.log(moveZerosToStart(...input));
*/
