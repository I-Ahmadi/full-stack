// ===================== Strings and Template Literals =====================

// A string is a sequence of characters used to represent text.

// Template literals are strings written with backticks (`)
// that allow:
// - multi-line text
// - variable injection (${expression})

// Strings
const firstName = 'Ismail';
const job = 'Software Engineer';
const birthYear = 2003;
const year = 2026;

const ismail = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(typeof ismail);
console.log(ismail);

// Template Literals - The modern way
const ismailNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(ismailNew);

console.log(`Just a regular string...`);

// String with Multiple Lines
console.log('String with \n\
multiple \n\
lines');

// With Template Literals
console.log(`String with
multiple
lines`);
