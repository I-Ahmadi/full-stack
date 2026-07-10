/*
  Debugging
  ---------
  Run this file:

    node debugging.js

  Run with inspector:

    node --inspect debugging.js

  Then open Chrome/Edge DevTools and attach to the Node process.
*/

function calculateDiscount(price, percent) {
  if (percent < 0 || percent > 100) {
    throw new RangeError("percent must be between 0 and 100");
  }

  return price - price * (percent / 100);
}

console.log("Debugging lesson started");
console.time("discount");

try {
  const price = 100;
  const discount = 15;
  const finalPrice = calculateDiscount(price, discount);

  console.log({ price, discount, finalPrice });
} catch (error) {
  console.error("Something failed:", error.message);
  console.error(error.stack);
}

console.timeEnd("discount");

/*
  Useful tools
  ------------
  console.log(value)
  console.table(array)
  console.time(label) / console.timeEnd(label)
  debugger statement
  node --inspect file.js
  error.stack
*/
