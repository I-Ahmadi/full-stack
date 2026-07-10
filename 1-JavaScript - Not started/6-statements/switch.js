// ===================== Switch Statement =====================

// switch is used to compare one value against multiple possible cases

// switch  → checks one value against many cases
// break   → stops execution
// default → fallback if no match

let day = "monday";

switch (day) {
  case "monday":
    console.log("Start of the week");
    break;

  case "tuesday":
    console.log("Second day");
    break;

  case "wednesday":
    console.log("Mid week");
    break;

  default:
    console.log("Other day");
}

// ====== Food order system ======

let food = "pizza";

switch (food) {
  case "burger":
    console.log("You ordered a burger");
    break;

  case "pizza":
    console.log("You ordered pizza");
    break;

  case "pasta":
    console.log("You ordered pasta");
    break;

  default:
    console.log("Item not available");
}

// ===================== Important Notes =====================

// comparison is strict (===)
// * switch DOES NOT use ==
// * switch uses === internally (strict comparison)

let value = 10;

switch (value) {
  case "10":
    console.log("String 10");
    break;

  case 10:
    console.log("Number 10"); // runs
    break;

  default:
    console.log("No match");
}
