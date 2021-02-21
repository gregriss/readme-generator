// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


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
                    message: "What is your full name? This will be listed in your license.",
                    name: "fullName"
                },
                {
                    type: "input",
                    message: "What is your GitHub username (case-sensitive)?",
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

// Function call to initialize app
init();
