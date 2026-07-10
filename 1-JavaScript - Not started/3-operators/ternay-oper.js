// ===================== TERNARY OPERATOR (?:) =====================

// The ternary operator is a short way to write if...else

// Syntax:
// condition ? valueIfTrue : valueIfFalse

let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // Adult

// Same using if...else
let age2 = 16;
let result2;

if (age2 >= 18) {
  result2 = "Adult";
} else {
  result2 = "Minor";
}

console.log(result2); // Minor

// Login check
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message);

// Nested Ternary
let score = 75;

let grade =
  score >= 90 ? "A" :
  score >= 70 ? "B" :
  score >= 50 ? "C" :
  "Fail";

console.log(grade); // B
