// ===================== CONVERTING AND CHECKING NUMBERS =====================

// In JavaScript all numbers are represented as floating numbers. No matter if we write them as 
// integers or as decimals.

console.log(23 === 23.0);

// Converting a string to number
console.log(Number('29999999'));
console.log(+'29999999'); // The easy way to convert to number

// Parsing Integers
console.log(Number.parseInt('30px')); // 30
console.log(Number.parseInt('e23')); // NaN

// Parsing Floats
console.log(Number.parseFloat('2.5rem')); // 2.5
console.log(Number.parseInt('2.5rem')); // 2

console.log('----------------------------');

// Checking if a value is NaN (Not a Number)
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20')); // false
console.log(Number.isNaN(23 / 0)); // false

console.log('----------------------------');

// Checking if a value is Number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20')); // true
console.log(Number.isFinite(23 / 0)); // false

console.log('----------------------------');

console.log(Number.isInteger(20)); // true
console.log(Number.isInteger('20')); // false
console.log(Number.isInteger(+'20')); // true
console.log(Number.isInteger(23 / 0)); // false
