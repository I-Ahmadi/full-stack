// ===================== Variables =====================

// JavaScript variables are containers for data.

// let - Changeable Value
let age = 25;
age = 30;
age = 35;
age = 40
console.log(age); // This will print 40

// const - Unchangeable Value
const birthYear = 2003;
birthYear = 1990; // This will cause an error
console.log(birthYear); // This will print 2003

// var - Flexible | Not recommended to use 'var' in modern JavaScript
var city = "Kabul";
city = "Nangarhar";
var city = "Herat";
console.log(city); // This will print "Herat"

/*
Naming variables:
1. Names can contain letters, digits, underscores, and dollar signs.
2. Names must begin with a letter, a $ sign or an underscore (_).
3. Names are case sensitive (X is different from x).
4. Reserved words (JavaScript keywords) cannot be used as names.

Example:
let $ = "Hello, World!";
let $$$ = 2;
let $myMoney = 5000;

let 2letters = "Hello, World!";

const marks = 93;
const age = 19;
const x = marks;
const __name = "Ismail Ahmadi";
*/

/*

When to Use var, let, or const:

1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you cannot use const
5. Never use var if you can use let or const.

*/
