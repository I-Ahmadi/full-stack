// ===================== TIMERS SET TIMOUT AND SET INTERVAL =====================

// JavaScript provides two main timer functions:
// 1) setTimeout → run code **once** after a delay
// 2) setInterval → run code **repeatedly** at intervals

// 1) setTimeout()
// setTimeout(function, delay_in_ms);

setTimeout(() => {
  console.log("Hello after 2 seconds!");
}, 2000);

// Explanation:
// Runs the function once after 2000 milliseconds (2 seconds)

// Passing arguments to the setTimeout function:
const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout((ing1, ing2) => {
    console.log(`Here is your pizza with ${ing1} and ${ing2}!`);
}, 3000, ...ingredients); // Pass the ingredients as arguments`

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer)

console.log('Waiting for the pizza...');

// 2) setInterval()
// setInterval(function, interval_in_ms);

let counter = 0;

let intervalId = setInterval(() => {
  counter++;
  console.log("Count:", counter);

  if(counter === 5){
    clearInterval(intervalId); // stop the interval after 5 counts
  }
}, 1000);

// Explanation:
// Runs the function every 1000 milliseconds (1 second)
// Use clearInterval() to stop
