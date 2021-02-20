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

// from HW readme
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
        
            ]).then(responses => {
                // const { q1, col1, q2, col2 } = responses;
                console.log(responses);
                fs.writeFile("README.md", `${generateMarkdown(response)}`, "utf8", err => {
                    err ? console.error(err) : console.log("README Written");
                });
                // columnout = `"${col1}", "${col2}"\n`;
                // console.log(columnout);
                // let userQuestionsArr = [];
                // userQuestionsArr.push(new UserQuestion(q1, "data1"));
                // userQuestionsArr.push(new UserQuestion(q2, "data2"));
        
                // askUserQuestions(userQuestionsArr);
            });
}

// function askInitialQuestions() {
//     inquirer.prompt([
//         {
//             type: "input",
//             message: "What is your project title?",
//             name: "title"
//         },
//         {
//             type: "input",
//             message: "What is your project description?",
//             name: "description"
//         },
//         {
//             type: "input",
//             message: "What are your instructions for installation?",
//             name: "installation"
//         },
//         {
//             type: "input",
//             message: "What are your instructions for usage?",
//             name: "usage"
//         },
//         {
//             type: "list",
//             message: "Which license would you like to use?",
//             choices: ["Apache 2.0","Boost 1.0","ISC","BSD 3-Clause","MIT"],
//             name: "license"
//         },
//         {
//             type: "input",
//             message: "What contributing guidelines would you like to include?",
//             name: "contributing"
//         },
//         {
//             type: "input",
//             message: "What are your test instructions?",
//             name: "tests"
//         },
//         {
//             type: "input",
//             message: "What is your GitHub username?",
//             name: "username"
//         },
//         {
//             type: "input",
//             message: "What is your email address?",
//             name: "email"
//         }

//     ]).then(responses => {
//         const { q1, col1, q2, col2 } = responses;
//         console.log(responses);
//         // columnout = `"${col1}", "${col2}"\n`;
//         // console.log(columnout);

//         let userQuestionsArr = [];

//         userQuestionsArr.push(new UserQuestion(q1, "data1"));
//         userQuestionsArr.push(new UserQuestion(q2, "data2"));


//         // askUserQuestions(userQuestionsArr);
//     });
// }

// function askUserQuestions(userQuestionsArr) {
//     inquirer.prompt(userQuestionsArr)
//         .then(responses => {
//             console.log("userQuestionsArr responses: " + responses);
//             const { data1, data2 } = responses;
//             fileData += `"${data1}","${data2}"\n`;

//             askUserIfDone(userQuestionsArr);
//     });
// }

// function askUserIfDone(userQuestionsArr){
//     inquirer.prompt([
//         {
//             type: "confirm",
//             message: "Are you done with your README?",
//             name: "done"
//         }
//     ])
//         .then(responses => {
//             console.log(responses);
//             const { done } = responses;
//             // if done is true, then save
//             if (done) {
//                 saveFile(columnout + fileData);

//             }
//             else {
//                 askUserQuestions(userQuestionsArr)
//             }
//         });

// }

// TODO: Create a function to write README file
function writeReadme(fileName, data) {
    fs.writeFile("README.md", responses, "utf8", err => {
        err ? console.error(err) : console.log("README Written");
    });
}

// function call to ask questions to app user
// askInitialQuestions();


// Function call to initialize app
init();
