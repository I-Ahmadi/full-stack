// ===================== ARRAY DESTRUCTURING =====================

// Destructuring is a JavaScript feature that allows you to extract values from arrays or properties from 
// objects and assign them to variables in a simple way.

const restaurant = {
    name: 'Classic Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organiz'],
    startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [
            this.startMenu[starterIndex], this.startMenu[mainIndex]
        ]
    }
}

// Whithout Destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log('Whithout Destructuring: ', a, b, c); // 2 3 4

// With Destructuring
const [x, y, z] = arr;
console.log('With Destructuring: ', x, y, z); // 2 3 4

// Note: With destructuring the original array is not effected

// In Destructuring we can use ',' to skip elements

// Want to access 'Italian', 'Pizzeria'
// const [first, second] = restaurant.categories;
// console.log("-1-", first, second);

// Want to access 'Italian', 'Vegetarian'
// const [first, , second] = restaurant.categories;
// console.log('-2-', first, second);

// Want to access Pizzeria', 'Organiz'
let [, first, , second] = restaurant.categories;
console.log('Before switching: ', first, second);

// Switching variables:
// const temp = first;
// first = second;
// second = temp;
// console.log('After switching: ', first, second); // Organiz Pizzeria

// Switching variables with destructuring
[first, second] = [second, first];
console.log('Switching with destructuring: ', first, second); // Organiz Pizzeria

// Receive 2 return values from a function
console.log(restaurant.order(2, 0)) // ["Garlic Bread", "Focaccia"]

// Let's destructure the return values from the order function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log('Destructuring return values: ', starter, mainCourse); // Garlic Bread Focaccia

// Nested Destructuring
const nestedArr = [12, 13, 14, [44, 55, [66, 77, 99]], 15, 16, 17];
// const [i, j, , k] = nestedArr; 
// console.log('Nested Destructuring: ', i, j, k); // 12 13 [44, 55, 66]

// const [i, j, , [k, , l]] = nestedArr; // Nested destructuring
// console.log('Nested Destructuring: ', i, j, k, l); // 12 13 44 66

// const [i, j, , [k, , l], ...rest] = nestedArr; // Nested destructuring and the rest array
// console.log('Nested Destructuring with rest: ', i, j, k, l, rest); // 12 13 44 66 [15, 16, 17]

// const [i, j, , [k, l, [m, , n]], o, , p, q, r=11] = nestedArr; // Nested destructuring and the rest array
// console.log('Nested Destructuring with rest: ', i, j, k, l, m, n, o, p, q, r); // 12 13 44 66 77 99 15 17

// Default values in destructuring
const [s=3, t=0, v=2, w=4] = [22, 11, 44, 33]
console.log('Default values in destructuring: ', s, t, v, w); // 22 11 44 33

const [i=22, j=11, , [k=11, l=44, [m=44, , n=88]], o=11, , p=20, q, r=30] = nestedArr; // Nested destructuring and the rest array
console.log('Nested Destructuring with rest: ', i, j, k, l, m, n, o, p, q, r); // 12 13 44 66 77 99 15 17
