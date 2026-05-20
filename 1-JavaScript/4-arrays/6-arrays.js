// ===================== JAVASCRIPT Arrays =====================

// An Array is an object type designed for storing data collections.

// Key characteristics of JavaScript arrays are:
// Elements: An array is a list of values, known as elements.
// Ordered: Array elements are ordered based on their index.
// Zero indexed: The first element is at index 0, the second at index 1, and so on.
// Dynamic size: Arrays can grow or shrink as elements are added or removed.
// Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

// An array can hold many values under a single name, and you can access the values by referring to an index number.

// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// Syntax
// const arrayName     = [element1, element2, element3, ...];
// const accessElement = arrayName[index];
// const fullArray     = arrayName; // Accessing the whole array

// Examples:
const fruits            = ["Apple", "Banana", "Cherry", "Mango", "Date", "Fig", "Grapes"];
const firstElement      = fruits[0]; // Accessing first element
const secondElement     = fruits[1]; // Accessing second element
const lastElement       = fruits[fruits.length - 1]; // Accessing last element
const secondLastElement = fruits[fruits.length - 2]; // Accessing second last element

// console.log("First Element:", firstElement); // Apple
// console.log("second Element:", secondElement); // Banana

// An empty array, and provide elements later
const cars = [];
cars[0] = "Toyota";
cars[1] = "Honda";
cars[2] = "Ford";
cars[3] = "Chevrolet";

// console.log("Cars Array: ", cars); // ["Toyota", "Honda", "Ford", "Chevrolet"]

// Arrays using the new keyword
const students = new Array("Alice", "Bob", "Charlie", "David");
// console.log("Students Array: ", students, students.length); // ["Alice", "Bob", "Charlie", "David"] 4

// Changing elements in an array
const countries                 = ["USA", "Canada", "Mexico", "Brazil"];
countries[2]                    = "Argentina"; // Changing "Mexico" to "Argentina"
countries[countries.length - 1] = "Chile"; // Changing last element "Brazil" to "Chile"
// console.log("Updated Countries Array: ", countries); // ["USA", "Canada", "Argentina", "Chile"]

// Recognize an Array
// A common question is: How do I know if a variable is an array?
// The problem is that the JavaScript operator typeof returns "object":

const cities = ['NewYork', "Paris", "Washington", "Lodon", "Edinburg"];
let type     = typeof cities;
// console.log("The type of cities is: ", type); // object

// Solution 1:
let isArraySolution1 = Array.isArray(cities);
// console.log("Solution 1: is the cities variable is an array: ", isArraySolution1);

// Solution 2:
let isArraySolution2 = cities instanceof Array;
// console.log("Solution 2: is the cities variable is an array: ", isArraySolution2);

// Nested Arrays and Objects
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

// console.log(myObj.cars[0].models[0]);

for (let i in myObj.cars) {
    for (let j in myObj.cars[i].models) {
        // console.log(myObj.cars[i].models[j]);
    }
}

// --------------------Array Methods--------------------

// The length property returns the length (size) of an array:
const methodArray = ["Banana", "Orange", "Apple", "Mango", "Watermelon", "Graps"];

let array1Size = methodArray.length;
// let setLength = methodArray.length = 2;
console.log("Array 1 Size: ", array1Size);
// console.log("Array 1 Size: ", setLength);

// The toString() method returns the elements of an array as a comma separated string.
let myList = methodArray.toString();
// console.log("My list: ", myList);

// The join() method also joins all array elements into a string.
let defaultJoin = methodArray.join(", "); // By default it wil seperate by comma
let joinByStar  = methodArray.join(" * ");
let joinByArrow = methodArray.join("->")

// console.log("Default join: ", defaultJoin);
// console.log("Join by *: ", joinByStar);
// console.log("Join by arrow: ", joinByArrow);

// The push() method adds a new element to the end of array:
// The push() method returns the new array length:
let pushElement = methodArray.push("Pear");
// console.log("Push element: ", pushElement); // 7

// The pop() method removes the last element from an array:
// The pop() method returns the value that was "popped out":
let popElement = methodArray.pop();
// console.log("Pop element:", popElement); // Pear

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The shift() method returns the value that was "shifted out":
let shiftElement = methodArray.shift();
// console.log("Shift element: ", shiftElement);

// The unshift() method adds a new element to the beginning of array, and "unshifts" older elements:
// The unshift() method returns the new array length:
let unshiftElement  = methodArray.unshift("Lemon");
let unshiftElements = methodArray.unshift(["1", "2"]);
// console.log("Unshift element: ", unshiftElement);

// The length property provides an easy way to append a new element to an array:
let appendElement = methodArray[methodArray.length] = "Kiwi";
// console.log("Append element: ", appendElement);

// console.log("Array length ", methodArray.length); // 5
// console.log("Method array: ", methodArray);

// --------------------Merging Arrays--------------------
// Concatenation "snow" and "ball" gives "snowball".
// Concatenating arrays means joining arrays end-to-end.

// The concat() method creates a new array by merging existing arrays:
const girl = ["Cecilie", "Lone", "Sara", "Jane"];
const boys = ["Emil", "Tobias", "Linus", "Ismail"];
const kids = ["John", "Lily", "Tom", "Emily"];

const girlsAndBoys  = girl.concat(boys);
const totalStudents = girl.concat(boys, kids);

// console.log(`Girls: ${girl}, Boys: ${boys}, Kids: ${kids}, Girls and Boys: ${girlsAndBoys}`);
// console.log(`Girls: ${girl}, Boys: ${boys}, Kids: ${kids}, Total Students: ${totalStudents}`);

// --------------------Slicing and Splicing Arrays--------------------
// The slice() method slices out a piece of an array.

// Syntax:
// array.slice(start, end)

// * **start** → index to begin (included)
// * **end** → index to stop (NOT included)

let sliceFruitsIndexNumbers = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
let result = sliceFruitsIndexNumbers.slice(1, 3);

// console.log('Result: ', result);                          // ["banana", "mango"]
// console.log('Slice fruits: ', sliceFruitsIndexNumbers);   // ["apple", "banana", "mango", "orange"] (unchanged)

// If You Omit end | It slices until the end of the array.
let sliceFruitsOmit       = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
let sliceFruitsOmitResult = sliceFruitsOmit.slice(2);
// console.log(sliceFruitsOmitResult); // ["mango", "orange", "grapes", "kiwi"]

// If You Omit BOTH
let sliceFruitsOmitFull    = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
let sliceFruitsOmitResult2 = sliceFruitsOmitFull.slice();
// console.log(sliceFruitsOmitResult2); // ["apple", "banana", "mango", "orange", "grapes", "kiwi"]

// Negative Indexes
let sliceFruitsNegative       = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
let sliceFruitsNegativeResult = sliceFruitsNegative.slice(-4, -1);
// console.log(sliceFruitsNegativeResult); // ["mango", "orange", "grapes"]

// ---

// The splice() method adds new items to an array.
// Add, remove, or replace elements **inside the original array**.

// Syntax:
// array.splice(start, deleteCount, item1, item2, ...)

// * **start** → where to begin changing
// * **deleteCount** → how many items to remove
// * **items** → (optional) items to add

// 1: Remove items
let spliceFruitsRemove = ["apple", "banana", "mango", "orange"];
spliceFruitsRemove.splice(1, 2);
// console.log(spliceFruitsRemove); // ["apple", "orange"]

// Example 2: Add items : Add items without deleting anything.
let spliceFruitsAdd = ["apple", "mango"];
spliceFruitsAdd.splice(1, 0, "banana", "orange");
// console.log(spliceFruitsAdd); // ["apple", "banana", "orange", "mango"]

// Replace items
let spliceFruitsReplace = ["apple", "banana", "mango"];
spliceFruitsReplace.splice(1, 1, "orange");
// console.log(spliceFruitsReplace); // ["apple", "orange", "mango"]

// --------------------Array Search--------------------

// The indexOf() method searches an array for an element value and returns its position.
// Array.indexOf() returns -1 if the item is not found.
// If the item is present more than once, it returns the position of the first occurrence.

let searchFruitIndexOf = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
let position1          = searchFruitIndexOf.indexOf('banana');
let position2          = searchFruitIndexOf.indexOf('kiwi') + 1;
// console.log("Search fruit IndexOf: ", position1, position2); // 1, 5

// lastIndexOf() method returns the position of the last occurrence of the specified element.
let searchFruitLastIndexOf = ["apple", "banana", "mango", "apple", "banana", "kiwi"];
let lastPosition           = searchFruitLastIndexOf.lastIndexOf('apple') + 1;
// console.log("Search fruit LastIndexOf: ", lastPosition); // 4

// includes() method is used to check if an element is present in an array
let searchFruitIncludes = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
let hasMango            = searchFruitIncludes.includes("mango");
if (hasMango) {
    // console.log("Mango is found in the array.");
} else {
    // console.log("Mango is NOT found in the array.");
}

// The find() method searches an array and returns the first element that matches a condition.
let searchFruitFind = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
let foundFruit      = searchFruitFind.find(fruit => fruit.startsWith("m"));
// console.log("Search fruit Find: ", foundFruit); // mango

// --------------------Array Sort--------------------

// The sort() method sorts an array alphabetically:
const sortFruits = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
// console.log('Sort fruits array alphabitically: ', sortFruits.sort());

// The reverse() method reverses the elements in an array:
// console.log('Reverse fruits array: ', sortFruits.reverse());

// Numeric Sort
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").

// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return a - b });
// points.sort(function(a, b) { return b - a }); // From largetest to smallest
// console.log("Points sorted: ", points);

// --------------------Array Iterations--------------------
