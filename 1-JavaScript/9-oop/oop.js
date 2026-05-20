// ===================== Object Oriented Programming =====================

// - WHAT IS OOP?
// OOP (Object-Oriented Programming) is a way to structure code using objects.
// Objects contain:

// - Properties (data)
// - Methods (functions)

// - OBJECTS
const user = {
  name: "Ismail",
  age: 20,
  greet() {
    console.log("Hello " + this.name);
  }
};

user.greet();
