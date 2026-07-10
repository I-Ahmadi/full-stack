
class Shape {
  draw() {
    throw new Error("Method not implemented");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing circle");
  }
}
