// ===================== Objects Basics =====================

// an object is used to store related data in key : value pairs.

// Think of it like a real-world object:

// A car has:
// color
// brand
// model

const jonasArr = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

console.log(jonasArr);

const jonasObj = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonasObj);

// Accessing Values
console.log(jonasObj.firstName);
console.log(jonasObj['lastName']);

let namekey = 'Name';
console.log(jonasObj['first' + namekey]);
console.log(jonasObj['last' + namekey]);

// console.log(jonasObj.'last' + namekey); // Throws syntax error

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')

// if (jonasObj[interestedIn]) {
//     console.log(jonasObj[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// Adding Values
jonasObj.location = 'Portugal';
jonasObj.salary = '$23000'
jonasObj['twitter'] = '@jonasschmedtman';
console.log(jonasObj);

// Removing Values
delete jonasObj.job;
delete jonasObj.salary;

console.log('Jonas obj after removing values: ', jonasObj);

// Challenge
// "Jonas" has 3 friends, and his best friend is called Michael"
console.log(`${jonasObj.firstName} has ${jonasObj.friends.length}, and his best friend is ${jonasObj.friends[0]}.`);
