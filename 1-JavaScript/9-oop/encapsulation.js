// ===================== Encapsulation =====================

// Keeping data safe inside an object and controlling how it is accessed or changed.
// Instead of letting anyone freely change your data, you create controlled methods.

// Real-World Analogy

// ATM Machine

// You interact with:
// withdraw()
// deposit()

// But you cannot directly access:

// internal bank database
// raw balance storage

// That’s encapsulation:

// We hide the data and allow access through methods.

class BankAccount {
  #balance = 0; // Private field

  deposit(amount) {
    if (amount && amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}`);
    } else {
      console.log(`Invalid deposit amount: ${amount}`);
    }
  }

  withdraw(amount) {
    if (amount && amount > 0) {
      if (this.#balance >= amount) {
        this.#balance -= amount;
        console.log(`Withdrew: ${amount}`);
      } else {
        console.log(`Insufficient funds to withdraw: ${amount}`);
      }
    } else {
      console.log(`Invalid withdraw amount: ${amount}`);
    }
  }

  getBalance() {
    return `Your balance is: ${this.#balance}`;
  }
}

const user1Account = new BankAccount();
user1Account.deposit(3000);
console.log(user1Account.getBalance()); // Your balance is: 3000

// Private:
// - Strictly hidden
// - No access outside or in child classes

// Protected:
// - Not truly protected (JavaScript limitation)
// - Accessible in child classes
// - Only "protected" by convention

// Encapsulation: Protected (_) + Private (#)

class User {
  #password; // private (strict)

  constructor(username, password) {
    this.username = username;
    this._role = "user"; // "protected" (convention)
    this.#password = password;
  }

  // private method
  #encryptPassword() {
    return this.#password.split("").reverse().join("");
  }

  // public method
  login(inputPassword) {
    return inputPassword === this.#password;
  }

  // public method that uses private method
  getEncryptedPassword() {
    return this.#encryptPassword();
  }
}

// Child class
class Admin extends User {
  constructor(username, password) {
    super(username, password);
    this._role = "admin"; // accessing "protected"
  }

  changeRole(newRole) {
    this._role = newRole; // allowed
  }

  tryAccessPrivate() {
    // This will ERROR if uncommented
    // return this.#password;

    return "Cannot access private properties here";
  }
}

// Usage
const admin = new Admin("ismail", "12345");

console.log(admin.login("12345")); // true
console.log(admin.getEncryptedPassword()); // "54321"

admin.changeRole("superadmin");
console.log(admin._role); // still accessible (but shouldn't be used directly)

console.log(admin.tryAccessPrivate());

// public    → YES (default)
// private   → YES (with #)
// protected → NO (not built-in)
