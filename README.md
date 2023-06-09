# Shape Generator

## Description
This Node application was created to generate a simple logo in an SVG format based on a user's input.

## Installation
This application requires the Inquirer package to be installed via npm. To install the Inquirer package, run `npm i inquirer@8.2.4` in the command line.
This application also utilizes the Jest package for running unit tests. To install Jest, run `npm i jest` in the command line.

## Usage
When the user types "node index.js" into the command line, they will be prompted with a series of questions that they can answer to generate a custom logo. The user will choose the shape of the logo, a circle, a triangle, or a square, the color of the logo, the text they would like on the logo (no longer than 3 characters), and the color of the text. Once all of the prompts have been submitted, the console will read `Generated logo.svg` and the file will be available in the examples folder.

A link to a video tutorial for running the unit tests and generating a logo can be found below:

https://drive.google.com/file/d/1PJfJNY_iXq6Wxa9j5nDspf0yQQNcdVeB/view

## Tests
To run unit tests for this application, install the npm Jest package, add `"test": "jest"` to the scripts section of the package.json file, and run `npm run tests` from the command line to execute the tests in the shapes.test.js file.

## Credits
This Node app utilizes the Inquirer package to gather information from the user to generate the logo.svg file. This app also utilizes the Jest package for unit testing.

## License
Please refer to the LICENSE in the repo.
