class Shape {
    constructor (shapeColor) {
        this.shapeColor = shapeColor;
    }
}

class Triangle extends Shape {
    constructor (shapeColor) {
        super(shapeColor);
    }
    render = () => `<polygon points="50,100, 100,0 0,0" fill="${shapeColor}" />`;
}

class Circle extends Shape {
    constructor (shapeColor) {
        super(shapeColor);
    }
    render = () => `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
}

class Square extends Shape {
    constructor (shapeColor) {
        super(shapeColor);
    }
    render = () => `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;

}

module.exports = { Triangle, Circle, Square };
// module.exports = Circle;
// module.exports = Square;