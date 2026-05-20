// ===================== Closures =====================

// When the function runs, it uses the variable name.
// Normally, when a function finishes running, its variables disappear. Gone. Finished. 💨

// A function remembers variables from where it was created — even after that outer function is finished.

// A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place.  

// We do NOT have to manually create closures, this is a JavaScript feature that happens automatically. We can't event 
// access closed-over variables explicitly. A closure is NOT a tangible JavaScript object.

function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

// Real Life Example
function bankAccount() {
    let balance = 0;
    function deposit(amount) {
        balance += amount;
        console.log('Balance: ', balance);
    }
    function widthdraw(amount) {
        balance -= amount;
        console.log('Balance: ', balance);
    }
    return { deposit, widthdraw };
}

// const account = bankAccount().deposit(100);
// const account = bankAccount().widthdraw(100);

const account = bankAccount();
account.deposit(100); // 100
account.deposit(200); // 300
account.widthdraw(25); // 575

// --------

// Exmaple 1
let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}

g();
f();

console.log(f);
console.dir(f);

// Re-assigning f function
h();
f();

console.log(f);
console.dir(f);

// Example 2
const boardPassenger = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function() {
        console.log(`Boarding ${n} passengers in ${wait} seconds.`);
        console.log(`Each group has ${perGroup} passengers.`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds.`);
}

boardPassenger(180, 3);
