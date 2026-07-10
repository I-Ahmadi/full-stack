// ===================== Type Conversion vs Type Coercion =====================

// Type Conversion (Explicit)
// Type conversion is when YOU manually change a value from one type to another.

let numStr = "123";
let num = Number(numStr); // string → number
console.log(num); // 123

const inputYear = '1991';
console.log(Number(inputYear), inputYear); // 1991, '1991'
console.log(Number(inputYear) + 18); // 2009

console.log(Number('Jonas')); // NaN - Not a number
console.log(typeof NaN); // number

let value = 10;
let str = String(value); // number → string
console.log(str); // "10"

let isTrue = Boolean(1); // number → boolean
console.log(isTrue); // true

// Type Coercion (Implicit)
// Type coercion is when JavaScript automatically converts types.

console.log("5" + 2);  // "52" (number → string)
console.log("5" - 2);  // 3 (string → number)
console.log(true + 1); // 2 (true → 1)

// Equality Comparison
console.log("5" == 5);  // true (coercion happens)
console.log("5" === 5); // false (strict, no coercion)

// Always prefer strict equality:
console.log(10 === "10"); // false
