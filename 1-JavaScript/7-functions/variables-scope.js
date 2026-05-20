// ===================== Variable Scope =====================

// Local Variable: Declared inside a function, cannot be accessed outside.
function localVariable() {
    let fullName = "John Doe";
    console.log(fullName);
}

// Global Variable: Declared outside functions, accessible everywhere.
let number = 20;
function globalVariable() {
    console.log(number);
}
