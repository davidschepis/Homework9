// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0 License": return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
      break;
    case "Boost": return "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
      break;
    case "BSD": return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
      break;
    default: return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0 License": return "https://opensource.org/licenses/Apache-2.0";
      break;
    case "Boost": return "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "BSD": return "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default: return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return "[![License](" + renderLicenseBadge(license) + ")](" + renderLicenseLink(license) + ")";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let displayString = "";
  displayString += `# ${data.projectName}\n`;
  displayString += renderLicenseSection(data.license);
  displayString += "\n";
  displayString += `\n## Description\n${data.description}\n\n`;
  displayString += "## Table of Contents\n\n- [Installation](#installation)\n";
  displayString += "- [Usage](#usage)\n";
  displayString += "- [License](#license)\n";
  displayString += "- [Contributing](#contributing)\n";
  displayString += "- [Tests](#tests)\n";
  displayString += "- [Questions](#questions)\n";
  displayString += "\n ## Installation\nTo install necessary dependencies, run the following command:\n";
  displayString += "\n```\n" + data.installDep + "\n```\n";
  displayString += `\n ## Usage\n${data.userKnow}\n`;
  if (data.license === "None") {
    displayString += `\n ## License\nThis project is not licensed\n`;
  }
  else {
    displayString += `\n ## License\nThis project is licensed under the ${data.license}.\n`;
  }
  displayString += `\n ## Contributing\n${data.userContribute}\n`;
  displayString += "\n ## Tests\nTo run tests, run the following command:\n";
  displayString += "\n```\n" + data.runTests + "\n```\n";
  displayString += `\n ## Questions\nIf you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}).\n`;
  displayString += `You can find more of my work at [${data.userName}](https://github.com/${data.userName}).`;
  return displayString;
}

module.exports = generateMarkdown;
