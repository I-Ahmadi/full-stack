// ===================== Arrays Basics =====================

// An Array is an object type designed for storing data collections.

// Key characteristics of Arrays are:
// Elements: An array is a list of values, known as elements.
// Ordered: Array elements are ordered based on their index.
// Zero indexed: The first element is at index 0, the second at index 1, and so on.
// Dynamic size: Arrays can grow or shrink as elements are added or removed.
// Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

// An array can hold many values under a single name, and you can access the values by referring to an index number.

// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// Syntax:
// const arrayName     = [element1, element2, element3, ...];
// const accessElement = arrayName[index];
// const fullArray     = arrayName; // Accessing the whole array

// Not using Array for storing data:
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
// and so on...............

const otherFriends = ['David', 'Sarah', 'Emily']; // Using Array to store data
const specialFriend = 'John';
const friends = ['Michael', specialFriend, 'Steven', 'Peter', otherFriends]; // Using Array to store data
console.log("Friends: ", friends); // ["Michael", "John", "Steven", "Peter", ["David", "Sarah", "Emily"]]

// Another way to create an array
const cars = new Array("Toyota", "Honda", "Ford", "Chevrolet");
console.log("Cars: ", cars); // ["Toyota", "Honda", "Ford", "Chevrolet"]

// Accessing array elements
const fruits            = ["Apple", "Banana", "Cherry", "Mango", "Date", "Fig", "Grapes"];
const firstElement      = fruits[0];                 // Accessing first element
const secondElement     = fruits[1];                 // Accessing second element

console.log("First Element:", firstElement); // Apple
console.log("second Element:", secondElement); // Banana

// Accessing last and second last element using length property
const lastElement       = fruits[fruits.length - 1]; // Accessing last element
const secondLastElement = fruits[fruits.length - 2]; // Accessing second last element

console.log("Last Element:", lastElement); // Grapes
console.log("Second Last Element:", secondLastElement); // Fig

// An empty array, and provide elements later
const emptyArray = [];

emptyArray[0] = "Toyota";
emptyArray[1] = "Honda";
emptyArray[2] = "Ford";
emptyArray[3] = "Chevrolet";

console.log("Cars Array: ", emptyArray); // ["Toyota", "Honda", "Ford", "Chevrolet"]

// Changing elements
const countries                 = ["USA", "Canada", "Mexico", "Brazil"];
countries[2]                    = "Argentina"; // Changing "Mexico" to "Argentina"
countries[countries.length - 1] = "Chile"; // Changing last element "Brazil" to "Chile"

console.log("Updated Countries Array: ", countries); // ["USA", "Canada", "Argentina", "Chile"]

// Recognize an Array:

// The problem is that the JavaScript operator typeof returns "object":
const cities = ['NewYork', "Paris", "Washington", "Lodon", "Edinburg"];
console.log("The type of cities is: ", typeof cities); // object

// Solution 1:
let isArraySolution1 = Array.isArray(cities);
console.log("Solution 1: is the cities variable is an array: ", isArraySolution1); // true

// Solution 2:
let isArraySolution2 = cities instanceof Array;
console.log("Solution 2: is the cities variable is an array: ", isArraySolution2); // true

// Exercise
const calcAge = function(birthYear) {
    // Get the current year
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

const years = [1990, 1985, 2000, 1975, 1960];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3);

// Calculate ages from selected years in the array
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages); // [36, 41, 66]

// Example of nested Arrays and Objects
// Values in objects can be arrays, and values in arrays can be objects:

const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "Ford", models: ["320", "X3", "X5"] },
        { name: "Ford", models: ["500", "Panda"] },
    ]
}

console.log(myObj.cars[0].models[0]);

for (let i in myObj.cars) {
    for (let j in myObj.cars[i].models) {
        // console.log(myObj.cars[i].models[j]);
    }
}
