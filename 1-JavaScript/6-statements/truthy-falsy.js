// ===================== Truthy & Falsy Values =====================

// Truthy → values that act like true
// Falsy  → values that act like false

// Falsy Values (IMPORTANT)
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// Truthy Values (everything else)
// "hello"
// "0"
// []
// {}
// 1
// -5
// true

if (0) {
  console.log("Runs");
} else {
  console.log("Does NOT run"); // runs
}

if ("hello") {
  console.log("Runs"); // runs
}

// Real Usage
let username = "";

if (username) {
  console.log("User exists");
} else {
  console.log("No user"); // runs
}

// Important Note
console.log("0" == 0); // true (coercion)

if ("0") {
  console.log("Truthy"); // runs
}

let height; // false
// let height = 123; // true
// let height = 0; // false
if (height) {
    console.log('YAH! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
