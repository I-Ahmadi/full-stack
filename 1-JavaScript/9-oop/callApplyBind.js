// ===================== Call, Apply, and Bind =====================

function greet() {
  console.log(this.name);
}

const user = { name: "Ali" };

greet.call(user);
greet.apply(user);

const bound = greet.bind(user);
bound();
