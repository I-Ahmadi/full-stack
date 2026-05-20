// ===================== == vs === =====================

// ==  → loose comparison (type conversion happens)
// === → strict comparison (no conversion)

// Best practice: always use ===

// 1. == (Loose Equality)
// - compares values
// - does type conversion (coercion)

console.log(5 == "5");        // true
console.log(true == 1);       // true
console.log(null == undefined); // true
console.log("" == 0);         // true

// 2. === (Strict Equality)
// - compares value + type
// - NO type conversion

console.log(5 === "5");       // false
console.log(true === 1);      // false
console.log(null === undefined); // false
console.log(10 === 10);       // true

// ====== Real-Time Example: E-commerce Stock Check ======

// Imagine stock value comes from database (often as STRING)
let stock = "0";

// Using == (loose equality - type coercion happens)
// This works because "0" is converted to 0 internally

if (stock == 0) {
  console.log("Out of stock");
}

// Problem example
console.log("" == 0); // true (unexpected coercion behavior)

// Using === (strict equality - no type conversion)

if (stock === 0) {
  console.log("Out of stock");
} else {
  console.log("Not matched because type is different");
}

// Best Practice: Convert first, then compare
if (Number(stock) === 0) {
  console.log("Out of stock");
}
