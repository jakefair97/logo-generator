const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your shape to be? (You may enter a word or a hexadecimal number',
            default: 'black',
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters to have on your logo:',
            default: '',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like your text to be? (You may enter a word or a hexadecimal number',
            default: 'white',
        },
    ])
    .then((answers) => {
        const { shape, shapeColor, text, textColor } = answers;

        let result;
        let shapeSvg;
        switch (shape) {
            case 'Circle':
                result = new shapes.Circle(shapeColor);
                shapeSvg = result.render();
                break;
            case 'Square':
                result = new shapes.Square(shapeColor);
                shapeSvg = result.render();
                break;
            case 'Triangle':
                result = new shapes.Triangle(shapeColor);
                shapeSvg = result.render();
                break;
        }

        let textSvg = text 
        ? `<text x="150" y="120" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>`
        : '';

        const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version='1.1' width="300" height="200">${shapeSvg}${textSvg}</svg>`;

        fs.writeFile('./examples/logo.svg', svgContent, (err) => {
            if (err) throw err;
            console.log('Generated logo.svg');
          });
    })