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
        createData(response);
    }).catch((error) => {
        console.log(error);
    });
}

//This function formats the data for the readme based on the user input
const createData = data => {
    let displayString = "";
    displayString += `# ${data.projectName}\n`;
    switch (data.license) {
        case "Apache 2.0 License": displayString += "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "Boost": displayString += "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
            break;
        case "BSD": displayString += "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
        default: displayString += "\n";
    }
    displayString += "\n";
    displayString += `\n## Description\n${data.description}\n\n`;
    displayString += "## Table of Contents\n\n- [Installation](#installation)\n";
    displayString += "- [Usage](#usage)\n";
    displayString += "- [License](#license)\n";
    displayString += "- [Contributing](#contribution)\n";
    displayString += "- [Tests](#tests)\n";
    displayString += "- [Questions](#questions)\n";
    displayString += "\n ## Installation\nTo install necessary dependencies, run the following command:\n";
    displayString += "\n```\n" + data.installDep + "\n```\n";
    displayString += `\n ## Usage\n${data.userKnow}\n`;
    displayString += `\n ## License\nThis project is licensed under the ${data.license}.\n`;
    displayString += `\n ## Contributing\n${data.userContribute}\n`;
    displayString += "\n ## Tests\nTo run tests, run the following command:\n";
    displayString += "\n```\n" + data.runTests + "\n```\n";
    displayString += `\n ## Questions\nIf you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}).\n`;
    displayString += `You can find more of my work at [${data.userName}](https://github.com/${data.userName}).`;
    
    writeToFile("README.md", displayString);
}

// Function call to initialize app
init();


