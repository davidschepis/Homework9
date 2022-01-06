// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown.js");
var fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
        error ? console.error(error) : console.log(`Writing to ${fileName} was successful!`)
    );
}

// TODO: Create a function to initialize app
function init() {
    writeToFile("chabs.txt", "abkdjfldsjfklsdjfkldsjflsdjflsdjfsdkljflsdk");
}

// Function call to initialize app
init();
