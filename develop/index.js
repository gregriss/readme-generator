// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];
function UserQuestion(question){
    this.message = question;
    this.type = "input";
    this.name = dataname;
}

function askInitialQuestions(){
    inquirer.prompt([
        {
            type: "input",
            message: "",
            name: "q1"
        },
        {
            type: "input",
            message: "",
            name: "col1"
        },
        {
            type: "input",
            mesasge: "",
            name: "q2"
        },
        {
            type: "input",
            message: "",
            name: "col2"
        }

    ]).then( responses => {
        const {q1, col1, q2, col2} = responses;
        console.log(responses);
        columnout = `"${col1}", "${col2}"\n`;
        console.log(columnout);

        let userQuestionsArr = [];

        userQuestionsArr.push(new UserQuestion(q1, "data1"));
        userQuestionsArr.push(new UserQuestion(q2, "data2"));
    });
}
askInitialQuestions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
