interface Shape {
  draw(): void;
}

class Rectangle implements Shape {
  draw(): void {
    console.log("Inside Rectangle::draw() method.");
  }
}
class Square implements Shape {
  draw(): void {
    console.log("Inside Square::draw() method.");
  }
}
class Circle implements Shape {
  draw(): void {
    console.log("Inside Circle::draw() method.");
  }
}

class ShapeFactory {

  //use getShape method to get object of type shape 
  getShape(shapeType: string): Shape {
    if (shapeType == null) {
      return null;
    }
    if (shapeType == "CIRCLE") {
      return new Circle();

    } else if (shapeType == "RECTANGLE") {
      return new Rectangle();

    } else if (shapeType == "SQUARE") {
      return new Square();
    }

    return null;
  }
}

class FactoryPatternDemo {

  main(): void {
    let shapeFactory = new ShapeFactory();

    //get an object of Circle and call its draw method.
    let shape1 = shapeFactory.getShape("CIRCLE");
    //call draw method of Circle
    shape1.draw();

    //get an object of Rectangle and call its draw method.
    let shape2 = shapeFactory.getShape("RECTANGLE");
    //call draw method of Rectangle
    shape2.draw();

    //get an object of Square and call its draw method.
    let shape3 = shapeFactory.getShape("SQUARE");
    //call draw method of square
    shape3.draw();
  }
}

let demo = new FactoryPatternDemo();
demo.main();
