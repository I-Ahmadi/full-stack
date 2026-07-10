// ===================== CREATING DATES =====================

// JavaScript uses the built-in Date object.

// 1) Current DATE & TIME
let now = new Date();
console.log(now); // Example: 2026-02-28T12:34:56.789Z

// 2) Specific DATE (YEAR, MONTH, DAY)
let date1 = new Date(2026, 1, 28);
console.log('date1: ', date1); // Output: 2026-02-28T00:00:00.000Z

// IMPORTANT:
// Month is 0-based!
// 0 = January
// 1 = February
// 11 = December

// 3) With TIME INCLUDED
let date2 = new Date(2026, 1, 28, 14, 30, 0);
console.log('date2: ', date2); // Output: 2026-02-28T14:30:00.000Z

// Format:
// new Date(year, month, day, hours, minutes, seconds)

// 4) From STRING
let date3 = new Date("2026-02-28");
console.log('date3: ', date3); // Output: 2026-02-28T00:00:00.000Z

let date4 = new Date("February 28, 2026 14:30:00");
console.log('date4: ', date4); // Output: 2026-02-28T14:30:00.000Z

// 5) From TIMESTAMP (milliseconds)
let date5 = new Date(0);
console.log('date5: ', date5); // 1970-01-01T00:00:00.000Z

// JavaScript counts time in milliseconds
// since January 1, 1970 (Unix Epoch)

// GETTING DATE VALUES
let dateObj = new Date();
console.log('dateObj: ', dateObj); // Example: 2026-02-28T12:34:56.789Z

dateObj.getFullYear();   // year
dateObj.getMonth();      // month (0-11)
dateObj.getDate();       // day of month
dateObj.getDay();        // day of week (0-6)
dateObj.getHours();      // hours
dateObj.getMinutes();    // minutes
dateObj.getSeconds();    // seconds

// Setting DATE VALUES
let d2 = new Date();

d2.setFullYear(2030); // year
d2.setMonth(5);       // June
d2.setDate(15);       // 15th

// Converting to STRING
let d3 = new Date();
d3.toString();        // Returns full date and time in LOCAL timezone.
// Example output: "Sat Feb 28 2026 16:45:30 GMT+0400 (Afghanistan Time)"

d3.toDateString();    // Returns ONLY the date part (no time).
// Example output: "Sat Feb 28 2026"

d3.toTimeString();    // Returns ONLY the time part (local timezone).
// Example output: "16:45:30 GMT+0400 (Afghanistan Time)"

d3.toISOString();     // Returns date in ISO 8601 format (UTC time).
// Example output: "2026-02-28T12:45:30.000Z"
