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
