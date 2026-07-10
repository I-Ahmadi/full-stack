// ===================== Basic Operators =====================

// const ageJonas = 2037 - 1991;
// const ageSarah = 2037 - 2018;

const currentYear = 2037;
const ageJonas    = currentYear - 1991;
const ageSarah    = currentYear - 2018;

console.log(ageJonas, ageSarah);

// Math Operators
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// + is also used to join strings
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
// console.log(firstName + '' + lastName);
console.log(`${firstName} ${lastName}`);

// Assignment Operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x -= 5; // x = x - 5 = 20
x *= 5; // x = x * 5 = 100
x /= 3; // x = x / 3 = 33.33
// x++;
x--;
// x--; // It will decrease the value by 1
console.log(x);

// Comparison Operators
// The result of comparison operators should be boolean

// >, <, >=, <=

console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // true

const isFullAge = ageSarah >= 18; // true
if (isFullAge) {
    console.log('You can drive the car!');
} else {
    console.log('You cannot drive the car!');
}
