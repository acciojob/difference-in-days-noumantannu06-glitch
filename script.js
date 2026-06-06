var dateDiffInDays = function (date1, date2) {
  //   write your code here
	// Convert strings to arrays of numbers
  const [year1, month1, day1] = date1.split("-").map(Number);
  const [year2, month2, day2] = date2.split("-").map(Number);

  // Convert dates to UTC milliseconds
  const utcDate1 = Date.UTC(year1, month1 - 1, day1);
  const utcDate2 = Date.UTC(year2, month2 - 1, day2);

  // Milliseconds in one day
  const millisecondsPerDay = 24 * 60 * 60 * 1000;

  // Return difference in days
  return (utcDate2 - utcDate1) / millisecondsPerDay;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
