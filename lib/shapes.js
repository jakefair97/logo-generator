class Shape {
    constructor (shapeColor) {
        this.shapeColor = shapeColor;
    }
}

class Triangle extends Shape {
    constructor (shapeColor) {
        super(shapeColor);
    }
    render = () => `<polygon points="150,25 225,150 75,150" fill="${this.shapeColor}" />`;
}

class Circle extends Shape {
    constructor (shapeColor) {
        super(shapeColor);
    }
    render = () => `<circle cx="150" cy="100" r="75" fill="${this.shapeColor}" />`;
}

class Square extends Shape {
    constructor (shapeColor) {
        super(shapeColor);
    }
    render = () => `<rect x="100" y="50" width="100" height="100" fill="${this.shapeColor}" />`;

}

module.exports = { Triangle, Circle, Square };