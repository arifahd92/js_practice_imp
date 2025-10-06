const students = [
  {
    name: "Alice",
    subjects: [
      { subject: "Math", marks: 88 },
      { subject: "English", marks: 92 },
    ],
  },
  {
    name: "Bob",
    subjects: [
      { subject: "Math", marks: 95 },
      { subject: "English", marks: 85 },
    ],
  },
  {
    name: "Charlie",
    subjects: [
      { subject: "History", marks: 90 },
      { subject: "Geography", marks: 91 },
    ],
  },
  {
    name: "Daisy",
    subjects: [
      { subject: "Science", marks: 87 },
      { subject: "English", marks: 93 },
    ],
  },
];

let userDetail = {
  name: "abcd",
  email: "123@email.com",
  age: undefined,
  marks: [12, 3],
  maritalStatus: null,
  address: {
    village: "abcd",
    street: undefined,
    house: null,
  },
};

function addNonUndefinedProperties(obj) {
  let filteredObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // Handle nested object (but not array)
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      let innerRes = addNonUndefinedProperties(value);
      filteredObj[key] = innerRes;
    }
    // Keep if not undefined
    else if (value !== undefined) {
      filteredObj[key] = value;
    }
  }

  return filteredObj;
}

console.log(addNonUndefinedProperties(userDetail));
