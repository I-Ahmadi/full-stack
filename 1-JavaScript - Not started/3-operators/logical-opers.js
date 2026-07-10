// ===================== Boolean Logic in JavaScript =====================

// && → all must be true
// || → at least one true
// !  → reverse value

// 1. AND Operator (&&)
// Returns true ONLY if BOTH conditions are true

let age   = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed inside");
}

// false examples
console.log(true && false); // false
console.log(false && false); // false

// 2. OR Operator (||)
// Returns true if AT LEAST ONE condition is true

let isAdmin = false;
let isOwner = true;

if (isAdmin || isOwner) {
  console.log("Access granted");
}

// false example
console.log(false || false); // false

// 3. NOT Operator (!)
// Reverses the value (true ↔ false)

let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in");
}

// ===================== Real Example =====================

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}

// ===================== Truth Table =====================

// AND (&&)
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// OR (||)
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// NOT (!)
console.log(!true);  // false
console.log(!false); // true
