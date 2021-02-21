// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// const questions = [];
// function UserQuestion(question, dataName) {
//     this.message = question;
//     this.type = "input";
//     this.name = dataName;
// };

// let columnout;
// let fileData = "";

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt([
                {
                    type: "input",
                    message: "What is your project title?",
                    name: "title"
                },
                {
                    type: "input",
                    message: "What is your project description?",
                    name: "description"
                },
                {
                    type: "input",
                    message: "What are your instructions for installation?",
                    name: "installation"
                },
                {
                    type: "input",
                    message: "What are your instructions for usage?",
                    name: "usage"
                },
                {
                    type: "list",
                    message: "Which license would you like to use?",
                    choices: ["Apache 2.0","Boost 1.0","ISC","BSD 3-Clause","MIT"],
                    name: "license"
                },
                {
                    type: "input",
                    message: "What contributing guidelines would you like to include?",
                    name: "contributing"
                },
                {
                    type: "input",
                    message: "What are your test instructions?",
                    name: "tests"
                },
                {
                    type: "input",
                    message: "What is your GitHub username?",
                    name: "username"
                },
                {
                    type: "input",
                    message: "What is your email address?",
                    name: "email"
                }
        
            ]).then(response => {
                // console.log(response);
                fs.writeFile("README.md", `${generateMarkdown(response)}`, "utf8", err => {
                    err ? console.error(err) : console.log("README Written")
                });
            });
}

// TODO: Create a function to write README file
// function writeReadme(fileName, data) {
//     //                         was responses
//     fs.writeFile("README.md", data, err => err ? console.error(err) : console.log("README Written")
// }
// function call to ask questions to app user
// askInitialQuestions();

// Function call to initialize app
init();
