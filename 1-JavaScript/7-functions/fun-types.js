// ===================== Function Types =====================

// Function Declaration
// A function declaration is a way of creating a function by giving it a name directly using the function keyword.
// A named function that is hoisted (can be used before definition).

function calculateEmployeeSalary(baseSalary, overtimeHours, hourlyRate) {
  let overtimePay = overtimeHours * hourlyRate;
  let totalSalary = baseSalary + overtimePay;
  return totalSalary;
}

// Real-world: Order Shipping Cost
function calculateShippingCost(weight, distance) {
  let baseRate = 50;
  let costPerKm = 2;
  let costPerKg = 5;

  let totalCost = baseRate + (distance * costPerKm) + (weight * costPerKg);
  return totalCost;
}

console.log(calculateEmployeeSalary(3000, 10, 20)); // Output: 3200
console.log(calculateShippingCost(10, 100)); // Output: 300

// ---------------- Function Expression ----------------

// A function expression is a way of defining a function by storing it in a variable.
// Useful when you want functions as values.

const generateInvoice = function(customerName, productList) {
    let total = 0;

    for (let i = 0; i < productList.length; i++) {
        total += productList[i].price;
    }

    return `Invoice for ${customerName}: Total = ${total}`;
}

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 80 }
];

console.log(generateInvoice('Ismail', products)); // Output: Invoice for Ali: Total = 1130

// Real-world: Login Validator
const validateLogin = function(username, password) {
    if (username === 'admin' && password === '123') {
        return 'Login Successful!';
    }

    return 'Invalid Credentials';
}

console.log(validateLogin('admin', '123')); // Output: Login Successful

// ---------------- Arrow Function ----------------

// Short syntax, modern JS (ES6)
// No own 'this', good for simple logic and callbacks.

const calculateAge = (birthYear, currentYear) => {
    return currentYear - birthYear;
}

console.log(calculateAge(2005, 2026)); // Output: 21 

// Real-world: filtering active users
const users = [
  { name: "Ali", active: true },
  { name: "Sara", active: false },
  { name: "John", active: true }
];

const activeUsers = users.filter(user => user.active === true);
console.log(activeUsers);

// [
//   { name: "Ali", active: true },
//   { name: "John", active: true }
// ]

// Another example: discount calculator
const applyDiscount = (price, discountPercent) => {
  let discount = (price * discountPercent) / 100;
  return price - discount;
};

console.log(applyDiscount(2000, 15)); // Output: 1700

// ---------------- Arrow Function Variations ----------------

// Single parameter example (student grading)
const getGrade = score => {
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 50) return "C";
  return "Fail";
};

console.log(getGrade(82)); // Output: B

// No parameter example (system greeting)
const systemWelcomeMessage = () => {
  let hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};

console.log(systemWelcomeMessage());

// Multi-line arrow function example (cart calculation)
const calculateCartTotal = (cartItems) => {
  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price * cartItems[i].quantity;
  }

  return total;
};

const cart = [
  { name: "Book", price: 500, quantity: 2 },
  { name: "Pen", price: 100, quantity: 5 }
];

console.log(calculateCartTotal(cart)); // Output: 1500

// ---------------- 'this' behavior in object method ----------------

const bankAccount = {
  owner: "Ali",
  balance: 5000,

  // Correct usage of 'this'
  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner} new balance: ${this.balance}`);
  },

//   Arrow function (problem with this)
//   showBalance: () => {
//     console.log(this.balance); // undefined
//   }
};

bankAccount.deposit(1000); // Output: Ali new balance: 6000
bankAccount.showBalance(); // Output: undefined (because arrow function does not bind 'this')
