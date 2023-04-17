const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle, Square, Triangle'],
        },
        {
            type: 'input',
            name: 'shape-color',
            message: 'What color would you like your shape to be? (You may enter a word or a hexadecimal number',
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters to have on your logo:',
        },
        {
            type: 'input',
            name: 'text-color',
            message: 'What color would you like your text to be? (You may enter a word or a hexadecimal number',
        },
        

    ])