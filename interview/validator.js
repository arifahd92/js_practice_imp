//starting at 11.54
//break at 13:52
//14:20
//14:30
let validatorPayload = {
  email: `required | email `,
  phone: `number | label : ( Mobile Number ) | required | maxLength : 10`,
  countryISO: `uppercase | exactLength : 2 digits | in : IN , CA , US`,
  hobbies: `array`,
  name: ` required | nonumbers | label : ( name )`,
};
function validator(validatorPayload, data) {
  const maped = {
    required: (a) => (a + "").length > 0,
    email: (a) => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(a);
    },
    lowercase: (a) => {
      const lowercaseOnly = /^[a-z]+$/g;
      return lowercaseOnly.test(a);
    },
    alphanumeric: (a) => {
      let regex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/);
      return regex.test(a) == true && a.length > 0;
    },
    number: (a) => {
      const numSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
      isNumber = true;

      for (let i = 0; i < a.length; i++) {
        if (numSet.has(a[i]) === false) {
          return false;
        }
      }
      return true;
    },
    maxLength: (a, b) => (a + "").length <= b,
    uppercase: (a) => {
      const lowercaseOnly = /^[a-z]+$/g;
      return !lowercaseOnly.test(a);
    },
    exactLength: (a, b) => {
      return a.length == b.trim()[0];
    },
    in: (a, b) => {
      const country = b.split(",").map((a) => a.trim());

      return country.includes(a);
    },
    array: (a) => Array.isArray(a),
    nonumbers: (a) => {
      const numSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
      for (let i = 0; i < a.length; i++) {
        if (numSet.has(+a[i])) {
          return false;
        }
      }
      return true;
    },
    label: (a) => a.slice(2, a.length - 2),
  };
  const existing = {
    email: validatorPayload.email.split("|").map((a) => a.trim()),
    phone: validatorPayload.phone.split("|").map((a) => a.trim()),
    countryISO: validatorPayload.countryISO.split("|").map((a) => a.trim()),
    hobbies: validatorPayload.hobbies.split("|").map((a) => a.trim()),
    name: validatorPayload.name.split("|").map((a) => a.trim()),
  };
  const entries = Object.entries(data);

  for (const [key, value] of entries) {
    const validator = existing[key];

    for (let i = 0; i < validator.length; i++) {
      const curr = validator[i];

      let res = true;
      if (curr.includes(":")) {
        const [a, b] = curr.split(":");
        if (a.trim() !== "label") {
          res = maped[a.trim()](value, b);
        }
      } else {
        res = maped[curr.trim()](value);
      }
      if (!res) {
        console.log(validator);
        const index = validator.findIndex((i) => i.startsWith("label"));

        let value = validator[index]?.split(":")?.[1].slice(2);

        if (value) {
          return (
            value.slice(0, value.length - 2) +
            " didnot match condition for " +
            key
          );
        }
        return key + " failed validation for " + curr;
      }
    }
  }
}
const data = {
  email: "ab@gmail.com",
  phone: 12345666,
  countryISO: "IN",
  hobbies: "1",
  name: "1",
};
const res = validator(validatorPayload, data);
console.log(res, "res");
