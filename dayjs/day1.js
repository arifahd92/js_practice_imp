/** @format */

const dayjs = require("dayjs");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(timezone);
const utc = require("dayjs/plugin/utc");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(utc);
dayjs.extend(customParseFormat);

/*
const currentUtcTime = new Date().toISOString();
console.log(currentUtcTime);

let baseTime = "-01-23T05:24:32.673Z";
let formate = "Hour",
  duration = "6";
console.log(isNaN(duration));
const res = dayjs(baseTime)
  ["add"](duration, formate)
  ?.utc?.()
  ?.format?.("YYYY-MM-DDTHH:mm:ss.000[Z]");
console.log(res === "Invalid Date");

let dummy = {};
for (const key in exact) {
  if (key in old) dummy[key] = exact[key];
}
console.log(JSON.stringify(dummy));
let data = { a: {} };
const {
  a: { b = 9 },
} = data;
console.log(b);

const min = "2025-01-24T05:15:00Z";
const max = "2025-01-24T05:15:00Z";
console.log(new Date(min) === new Date(new Date(max).toDateString()));
*/
function calculatePercentage({ previousCount, currentCount }) {
  if (previousCount === 0) {
    return currentCount === 0 ? 0 : 100;
  }
  return Math.ceil(((currentCount - previousCount) / previousCount) * 100);
}
calculatePercentage({ previousCount: 19, currentCount: 10 });
