// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is your project's name?",
    "Please write a short description of your project",
    "What kind of license should your project have?",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using this repo?",
    "What does the user need to know about contributing to the repo?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
        error ? console.error(error) : console.log(`Writing to ${fileName} was successful!`)
    );
}

// TODO: Create a function to initialize app
function init() {

    getUserInput();
}

//This function prompts the user for information about their github project
const getUserInput = function () {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "userName",
        },
        {
            type: "input",
            message: questions[1],
            name: "email",
        },
        {
            type: "input",
            message: questions[2],
            name: "projectName",
        },
        {
            type: "input",
            message: questions[3],
            name: "description",
        },
        {
            type: "list",
            message: questions[4],
            name: "license",
            choices: ["Apache 2.0 License", "Boost", "BSD", "None"],
        },
        {
            type: "input",
            message: questions[5],
            name: "installDep",
        },
        {
            type: "input",
            message: questions[6],
            name: "runTests",
        },
        {
            type: "input",
            message: questions[7],
            name: "userKnow",
        },
        {
            type: "input",
            message: questions[8],
            name: "userContribute",
        },
    ]).then((response) => {
        fs.unlink("README.md", (err) => {
            if (err) {
                console.log ('error');
            }
            else {
                "README.md was deleted";
            }
        })
        writeToFile("README.md", generateMarkdown(response));
    }).catch((error) => {
        console.log(error);
    });
}

// Function call to initialize app
init();