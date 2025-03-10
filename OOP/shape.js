class Shape {
    calculateArea() {
        return 0;
    }

    getIdentity() {
        return "I am a shape";
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    getIdentity() {
        return "Hi, I am a Rectangle";
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    getIdentity() {
        return "Hi, I am a Circle";
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return (this.base * this.height) / 2;
    }

    getIdentity() {
        return "Hi, I am a Triangle";
    }
}

const shapes = [
    new Rectangle(10, 10),
    new Circle(10),
    new Triangle(10, 5)
];

shapes.forEach(shape => console.log(shape.getIdentity()));

const totalArea = shapes.reduce((sum, shape) => sum + shape.calculateArea(), 0);
console.log("Total Area:", totalArea);
