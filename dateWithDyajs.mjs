/** @format */

import dayjs from "dayjs";

const getStartAndEndDate = (unit, offset = 0) => {
  const today = dayjs();
  let startDate, endDate;

  switch (unit) {
    case "month":
      startDate = today.add(offset, "month").startOf("month");
      endDate = today.add(offset, "month").endOf("month");
      break;
    case "week":
      startDate = today.add(offset, "week").startOf("week");
      endDate = today.add(offset, "week").endOf("week");
      break;
    case "year":
      startDate = today.add(offset, "year").startOf("year");
      endDate = today.add(offset, "year").endOf("year");
      break;
    default:
      throw new Error("Invalid unit. Please use month, week or year.");
  }

  return { startDate, endDate };
};
console.log(
  getStartAndEndDate("week").endDate.format("YYYY-MM-DDTHH:mm:ss:sssz")
);
const getPreviousPeriod = (unit) => getStartAndEndDate(unit, -1);
const getNextPeriod = (unit) => getStartAndEndDate(unit, 1);

const { startDate, endDate } = getStartAndEndDate("month");
console.log(`Start of month: ${startDate.format("YYYY-MM-DD")}`);
console.log(`End of month: ${endDate.format("YYYY-MM-DD")}`);

const { startDate: previousStartDate, endDate: previousEndDate } =
  getPreviousPeriod("month");
console.log(
  `Start of previous month: ${previousStartDate.format("YYYY-MM-DD")}`
);
console.log(`End of previous month: ${previousEndDate.format("YYYY-MM-DD")}`);

const { startDate: nextStartDate, endDate: nextEndDate } =
  getNextPeriod("month");
console.log(nextEndDate.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"));
// console.log(nextEndDate);

let getStartAndEndDated = (unit = "month", offset = 0) => {
  const today = dayjs();

  const startDate = dayjs.tz(
    today.add(offset, unit).startOf(unit),
    "Asia/Kolkata"
  );
  const endDate = today.add(offset, unit).endOf(unit);
  console.log({
    startDate: startDate.format("YYYY-MM-DDTHH:mm:sss[Z]"),
    endDate: endDate.format("YYYY-MM-DDTHH:mm:ssz"),
  });
  return { startDate, endDate };
};
// getStartAndEndDated();
function validate(date) {
  console.log(new Date());
  return new Date(date) >= new Date();
}
console.log(validate("2024-12-13"));
