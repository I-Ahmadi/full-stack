// ===================== While Loop =====================

// A `while` loop runs a block of code **as long as a condition is true**.
// Unlike a `for` loop, the `while` loop only has a condition.

console.log('Lifting weights repetition 1 🏋️');
console.log('Lifting weights repetition 2 🏋️');
console.log('Lifting weights repetition 3 🏋️');
console.log('Lifting weights repetition 4 🏋️');
console.log('Lifting weights repetition 5 🏋️');
console.log('Lifting weights repetition 6 🏋️');
console.log('Lifting weights repetition 7 🏋️');
console.log('Lifting weights repetition 8 🏋️');
console.log('Lifting weights repetition 9 🏋️');

let rep = 1;
while (rep <= 9) {
    console.log(`Lifting weights repetition ${rep} 🏋️`)
    rep++;
}

let count = 0;
while (count > 0) {
    let randNum = Math.trunc(Math.random() * 10) + 1; // Random number between 1 and 2
    if (randNum !== 7) {
        count++;
    } else {
        count--;
        console.log('Found 7!');
    }
}
