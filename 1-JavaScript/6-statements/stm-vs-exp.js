// ===================== Statements and Expressions =====================

// Expression
// An expression is ANY code that produces a value.

// If it gives a value      → Expression
// If it performs an action → Statement

5 + 2            // 7
"hello"          // "hello"
10 * 3           // 30
true && false    // false

let x = 10 + 5;  // 15 (expression on right side)

// Statement
// A statement is a complete instruction that performs an action.

let a = 10;      // statement
if (a > 5) {
  console.log("Big number");
}                // statement

for (let i = 0; i < 5; i++) {
  console.log(i);
}                // statement

// ===================== Key Difference =====================

// Expression → produces a value
// Statement  → performs an action

let age = 18; // statement
let result = (age >= 18) ? "Adult" : "Minor"; // expression inside statement
