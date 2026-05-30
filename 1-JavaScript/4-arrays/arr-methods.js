// ===================== Arrays Methods =====================

// The length property returns the length of an array
const methodArray = [
    "Banana",
    "Orange",
    "Apple",
    "Mango",
    "Watermelon",
    "Graps"
];

let array1Size    = methodArray.length;
console.log("Array 1 Size: ", array1Size); // 6

// You can also set the length manually
let setLength     = methodArray.length = 2;
console.log("Array 1 Size: ", setLength); // 2
console.log("Method array: ", methodArray); // ["Banana", "Orange"]

// Note: When length becomes smaller,
// JavaScript removes the extra elements from the end of the array.

// toString() method returns the elements of an array as a comma separated string.
const cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi"];
let myList = cars.toString();
console.log("Array to string: ", myList); // "Saab,Volvo,BMW,Mercedes,Audi"

// The join() method also joins all array elements into a string.
const joinArray = ['John', 'Peter', 'Sally', 'Jane', 'Emily'];
let defaultJoin = joinArray.join(", "); // By default it wil seperate by comma
let joinByStar  = joinArray.join(" * ");
let joinByArrow = joinArray.join("->")

console.log("Default join: ", defaultJoin);
console.log("Join by *: ", joinByStar);
console.log("Join by arrow: ", joinByArrow);

const mobileModels = [
    "iPhone", 
    "Samsung", 
    "OnePlus", 
    "Google Pixel", 
    "Huawei"
];

// Push: Adds element to end, returns new length 
let pushElement = mobileModels.push("Xiaomi");
console.log("Push element: ", pushElement); // 6
console.log("Mobile Models: ", mobileModels); // ["iPhone", "Samsung", "OnePlus", "Google Pixel", "Huawei", "Xiaomi"]

// Pop: Removes & returns last element  
let popElement = mobileModels .pop();
console.log("Pop element:", popElement); // Pear

// Shift: Removes & returns first element  
let shiftElement = methodArray.shift();
console.log("Shift element: ", shiftElement);

// Unshift: Adds element(s) to start, returns new length  
let unshiftElement  = methodArray.unshift("Lemon");
let unshiftElements = methodArray.unshift(["1", "2"]);
console.log("Unshift element: ", unshiftElement);

// Append using length  
let appendElement = methodArray[methodArray.length] = "Kiwi";
console.log("Append element: ", appendElement);

console.log("Array length ", methodArray.length); // 5
console.log("Method array: ", methodArray);

// --------------------Merging Arrays--------------------
// Concatenation "snow" and "ball" gives "snowball".
// Concatenating arrays means joining arrays end-to-end.

// The concat() method creates a new array by merging existing arrays:
const girl = ["Cecilie", "Lone", "Sara", "Jane"];
const boys = ["Emil", "Tobias", "Linus", "Ismail"];
const kids = ["John", "Lily", "Tom", "Emily"];

const girlsAndBoys  = girl.concat(boys);
const totalStudents = girl.concat(boys, kids);

console.log(`Girls: ${girl}, Boys: ${boys}, Kids: ${kids}, Girls and Boys: ${girlsAndBoys}`);
console.log(`Girls: ${girl}, Boys: ${boys}, Kids: ${kids}, Total Students: ${totalStudents}`);

// --------------------Slice--------------------
// The slice() method slices out a piece of an array.

// Syntax:
// array.slice(start, end)

// * **start** → index to begin (included)
// * **end** → index to stop (NOT included)

let sliceFruitsIndexNumbers = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
let result = sliceFruitsIndexNumbers.slice(1, 3);

console.log('Result: ', result);                          // ["banana", "mango"]
console.log('Slice fruits: ', sliceFruitsIndexNumbers);   // ["apple", "banana", "mango", "orange"] (unchanged)

// If You Omit end | It slices until the end of the array.
let sliceFruitsOmit       = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
let sliceFruitsOmitResult = sliceFruitsOmit.slice(2);
console.log(sliceFruitsOmitResult); // ["mango", "orange", "grapes", "kiwi"]

// If You Omit BOTH
let sliceFruitsOmitFull    = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
let sliceFruitsOmitResult2 = sliceFruitsOmitFull.slice();
console.log(sliceFruitsOmitResult2); // ["apple", "banana", "mango", "orange", "grapes", "kiwi"]

// Negative Indexes
let sliceFruitsNegative       = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
let sliceFruitsNegativeResult = sliceFruitsNegative.slice(-4, -1);
console.log(sliceFruitsNegativeResult); // ["mango", "orange", "grapes"]

// --------------------Splice--------------------

// The splice() method adds new items to an array.
// Add, remove, or replace elements **inside the original array**.

// Syntax:
// array.splice(start, deleteCount, item1, item2, ...)

// * **start** → where to begin changing
// * **deleteCount** → how many items to remove
// * **items** → (optional) items to add

// Remove items
let spliceFruitsRemove = ["apple", "banana", "mango", "orange"];
spliceFruitsRemove.splice(1, 2);
console.log(spliceFruitsRemove); // ["apple", "orange"]

// Add items: Add items without deleting anything.
let spliceFruitsAdd = ["apple", "mango"];
spliceFruitsAdd.splice(1, 0, "banana", "orange");
console.log(spliceFruitsAdd); // ["apple", "banana", "orange", "mango"]

// Replace items
let spliceFruitsReplace = ["apple", "banana", "mango"];
spliceFruitsReplace.splice(1, 1, "orange");
console.log(spliceFruitsReplace); // ["apple", "orange", "mango"]

// Includes
let isAvailable = specialFriend.includes('apple') ? 'Available' : 'Not available!';
console.log(isAvailable);
