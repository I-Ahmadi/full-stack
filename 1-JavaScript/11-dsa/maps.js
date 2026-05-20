// ===================== MAPS =====================

// Map is a built-in object that stores key–value pairs — similar to an object {}, but more powerful and flexible.

// Map is a collection where:
// 1. Keys can be any type (string, number, object, function, etc.)
// 2. It remembers insertion order

// set() – Add values
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
    .set(['Italian', 'Pizzeria', 'Vegetarian', 'Organiz'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

// get() – Get value
console.log('Name: ', rest.get('name'));
console.log('True: ', rest.get('true'));
console.log('1: ',    rest.get(1));
    
// has() – Check if key exists
console.log('Has name: ',   rest.has('name'));
console.log('Is deleted: ', rest.has('true'));

// delete() – Remove key
console.log('Is deleted: ', rest.delete(1));
console.log('Is cleared: ', rest.clear);

// size – Number of items
console.log('Size of map: ', rest.size);

// Use Arrays and Objects as Map key:

// This will not work
rest.set([1, 2]);
console.log(rest.get([1, 2])) // Undefined

// This will work
const arr = [1, 2];
rest.set(arr, 'TestArray');
// console.log(rest.get(arr));

// Question
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try agina!'],
]);

console.log(question);
for (const [key, vlaue] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${vlaue}`)
}

const answer = 5;
console.log(question.get(question.get('correct') === answer)); // Correct otherwise Try again!

const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

// Convert an object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Convert map to array
console.log([...question]);
console.log('Entries: ', question.entries());
console.log('Keys: ', question.keys());
console.log('Values: ',question.values());
