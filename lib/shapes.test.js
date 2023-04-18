const shapes = require('./shapes');

describe('Shape generator with a color input', () => {

    it("returns the proper svg format for a circle with the selected color", () => {
        const circle = new shapes.Circle('blue');
        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="75" fill="blue" />`);
    });
    
    it("returns the proper svg format for a triangle with the selected color", () => {
        const triangle = new shapes.Triangle('green');
        expect(triangle.render()).toEqual(`<polygon points="150,25 225,150 75,150" fill="green" />`);
    });

    it("returns the proper svg format for a square with the selected color", () => {
        const square = new shapes.Square('#03fcfc');
        expect(square.render()).toEqual(`<rect x="100" y="50" width="100" height="100" fill="#03fcfc" />`);
    });
})