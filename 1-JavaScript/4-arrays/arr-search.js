// ===================== Arrays Search =====================

// indexOf() returns the first matching index, or -1 if not found.
let searchFruitIndexOf = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
let position1          = searchFruitIndexOf.indexOf('banana');
let position2          = searchFruitIndexOf.indexOf('kiwi') + 1;
console.log("Search fruit IndexOf: ", position1, position2); // 1, 5

// lastIndexOf() returns the last matching index.
let searchFruitLastIndexOf = ["apple", "banana", "mango", "apple", "banana", "kiwi"];
let lastPosition           = searchFruitLastIndexOf.lastIndexOf('apple') + 1;
console.log("Search fruit LastIndexOf: ", lastPosition); // 4

// includes() checks if an item exists in the array.
let searchFruitIncludes = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
let hasMango            = searchFruitIncludes.includes("mango");
if (hasMango) {
    console.log("Mango is found in the array.");
} else {
    console.log("Mango is NOT found in the array.");
}

// find() returns the first element that matches a condition
let searchFruitFind = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
let foundFruit      = searchFruitFind.find(fruit => fruit.startsWith("m"));
console.log("Search fruit Find: ", foundFruit); // mango

// --------------------Array Sort--------------------

// sort() sorts strings alphabetically.
const sortFruits = ["apple", "banana", "mango", "orange", "grapes", "kiwi"];
console.log('Sort fruits array alphabitically: ', sortFruits.sort());

// reverse() reverses the array order.
console.log('Reverse fruits array: ', sortFruits.reverse());

// Numeric Sort
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").

// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return a - b });
points.sort(function(a, b) { return b - a }); // From largetest to smallest
console.log("Points sorted: ", points);
