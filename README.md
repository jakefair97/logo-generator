# Shape Generator

## Description
This Node application was created to generate a simple logo in an SVG format based on a user's input.

## Installation
This application requires the Inquirer package to be installed via npm. To install the Inquirer package, run `npm i inquirer@8.2.4` in the command line.
This application also utilizes the Jest for running unit tests. To install Jest, run `npm i jest` in the command line.

## Usage
When the user types "node index.js" into the command line, they will be prompted with a series of questions that they can answer to generate a custom logo. The user will choose the shape of the logo, a circle, a triangle, or a square, the color of the logo, the text they would like on the logo (no longer than 3 characters), and the color of the text.

## Tests
To run unit tests for this application, install the npm Jest package, add `"test": "jest"` to the scripts section of the package.json file, and run `npm run tests` from the command line to execute the tests in the shapes.test.js file.

## Credits
This Node app utilizes the Inquirer package to gather information from the user to generate the logo.svg file. 

## License
Please refer to the LICENSE in the repo.
