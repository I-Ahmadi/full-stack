// ===================== SET =====================

// A Set is a collection of unique values. It can store any type of values, whether primitive or object references. 
// The main feature of a Set is that it does not allow duplicate values.

// In set there is actually no Index.

const ordersSet = new Set([
    'Risotto', 
    'Pizza', 
    'Pizza', 
    'Pasta', 
    'Risotto', 
    'Pizza'
]);

console.log(ordersSet); // Set(3) { 'Risotto', 'Pizza', 'Pasta' }
console.log(ordersSet.size); // 3

// If certain element exists in the set
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); // Won't be added because it's already in the set
console.log(ordersSet); // Set(4) { 'Risotto', 'Pizza', 'Pasta', 'Garlic Bread' }

ordersSet.delete('Risotto');
console.log(ordersSet); // Set(3) { 'Pizza', 'Pasta', 'Garlic Bread' }

// ordersSet.clear(); // Clear all elements in the set

for (const order of ordersSet) {
    console.log(order);
}
// Pizza
// Pasta
// Garlic Bread

// Example:
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)];
console.log('Staff unique: ', staffUnique);

const setSize = new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size;
console.log('Set size: ', setSize);

const stringSizeWithSet = new Set('Ismail Ahmadi').size;
console.log('String size with set: ', stringSizeWithSet);
