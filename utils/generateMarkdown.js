// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0 License": return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
    case "Boost": return "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
    case "BSD": return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
    default: return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0 License": return "https://opensource.org/licenses/Apache-2.0";
    case "Boost": return "https://www.boost.org/LICENSE_1_0.txt";
    case "BSD": return "https://opensource.org/licenses/BSD-3-Clause";
    default: return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return `\n ## License\nThis project is licensed under the ${license} license.\n`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let displayString = "";
  displayString += `# ${data.projectName}\n`;
  displayString += "[![License](" + renderLicenseBadge(data.license) + ")](" + renderLicenseLink(data.license) + ")";
  displayString += "\n";
  displayString += `\n## Description\n${data.description}\n\n`;
  displayString += "## Table of Contents\n\n";
  if (data.firstLink !== "" || data.secondLink !== "") {
    displayString += "- [Links](#links)\n";
  }
  if (data.screenshot !== "") {
    displayString += "- [Example](#example)\n";
  }
  displayString += "- [Installation](#installation)\n";
  displayString += "- [Usage](#usage)\n";
  displayString += "- [License](#license)\n";
  displayString += "- [Contributing](#contributing)\n";
  displayString += "- [Tests](#tests)\n";
  displayString += "- [Questions](#questions)\n";
  if (data.credits !== "") {
    displayString += "- [Credits](#credits)\n";
  }
  if (data.firstLink !== "" || data.secondLink !== "") {
    displayString += `\n ## Links\n${data.firstLink}\n\n${data.secondLink}\n`;
  }
  if (data.screenshot !== "") {
    displayString += `\n ## Example\n![Screenshot](${data.screenshot})\n`;
  }
  displayString += "\n ## Installation\nTo install necessary dependencies, run the following command:\n";
  displayString += "\n```\n" + data.installDep + "\n```\n";
  displayString += `\n ## Usage\n${data.userKnow}\n`;
  if (data.license === "None") {
    displayString += `\n ## License\nThis project is not licensed\n`;
  }
  displayString += renderLicenseSection(data.license);
  displayString += `\n ## Contributing\n${data.userContribute}\n`;
  displayString += "\n ## Tests\nTo run tests, run the following command:\n";
  displayString += "\n```\n" + data.runTests + "\n```\n";
  displayString += `\n ## Questions\nPlease contact me at [${data.email}](mailto:${data.email}) with any questions.\n`;
  displayString += `Github Repo: [${data.username}](https://github.com/${data.username}).\n`;
  displayString += handleCredits(data.credits);
  return displayString;
}

//This function splits the creditors by comma and puts them in a list, return empty if no creditors
function handleCredits(credits) {
  if (credits === "") {
    return "";
  }
  let output = "";
  output += "\n ## Credits\n";
  let creditors = credits.split(",");
  creditors.forEach(e => {
    output += `* ${e}\n`;
  });
  return output;
}

module.exports = generateMarkdown;
