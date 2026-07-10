// ==================== LOOPING BACKWARDS ====================

// A backward loop is a loop that iterates in reverse order, starting from the 
// end and moving toward the beginning.

// Example: Looping through an array of fruits in reverse order.
const fruits = [
  "Apple", 
  "Banana", 
  "Mango", 
  "Orange", 
  "Watermelon", 
  "Pineapple", 
  "Grapes"
];

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

/*
Output:
Grapes
Pineapple
Watermelon
Orange
Mango
Banana
Apple
*/

// Explanation:
// fruits.length = 7
// Last index    = 7 - 1 = 6
// Start from index 6 and move backwards until index 0.

// This is called a (Nested Loop)

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

/*
Output:
i = 1, j = 1
i = 1, j = 2

i = 2, j = 1
i = 2, j = 2

i = 3, j = 1
i = 3, j = 2
*/

// Real Examples

// Student
const students = ["Ali", "Ahmad"];
const subjects = ["Math", "English", "Science"];

for (let i = 0; i < students.length; i++) {
  console.log(`Student: ${students[i]}`);

  for (let j = 0; j < subjects.length; j++) {
    console.log(`  Subject: ${subjects[j]}`);
  }
}

/*
Output:
Student: Ali
  Subject: Math
  Subject: English
  Subject: Science

Student: Ahmad
  Subject: Math
  Subject: English
  Subject: Science
*/

// GYM
const days      = ["Monday", "Tuesday"];
const exercises = ["Bench Press", "Squat", "Deadlift"];

for (let i = 0; i < days.length; i++) {
  console.log(`Workout Day: ${days[i]}`);

  for (let j = 0; j < exercises.length; j++) {
    console.log(`  Exercise: ${exercises[j]}`);
  }
}

/*
Output:
Workout Day: Monday
  Exercise: Bench Press
  Exercise: Squat
  Exercise: Deadlift

Workout Day: Tuesday
  Exercise: Bench Press
  Exercise: Squat
  Exercise: Deadlift
*/
