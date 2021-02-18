// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];
function UserQuestion(question, dataName) {
    this.message = question;
    this.type = "input";
    this.name = dataName;
};

let columnout;
let fileData = "";

function askInitialQuestions() {
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

    ]).then(responses => {
        const { q1, col1, q2, col2 } = responses;
        console.log(responses);
        columnout = `"${col1}", "${col2}"\n`;
        console.log(columnout);

        let userQuestionsArr = [];

        userQuestionsArr.push(new UserQuestion(q1, "data1"));
        userQuestionsArr.push(new UserQuestion(q2, "data2"));


        askUserQuestions(userQuestionsArr);
    });
}

function askUserQuestions(userQuestionsArr) {
    inquirer.prompt(userQuestionsArr)
        .then(responses => {
            console.log("userQuestionsArr responses: " + responses);
            const { data1, data2 } = responses;
            fileData += `"${data1}","${data2}"\n`;

            askUserIfDone(userQuestionsArr);
    });
}

function askUserIfDone(userQuestionsArr){
    inquirer.prompt([
        {
            type: "confirm",
            message: "Are you done with your README?",
            name: "done"
        }
    ])
        .then(responses => {
            console.log(responses);
            const { done } = responses;
            // if done is true, then save
            if (done) {
                saveFile(columnout + fileData);

            }
            else {
                askUserQuestions(userQuestionsArr)
            }
        });

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", data, err => {
        if (err) console.error(err);
        console.log("README Written");
    });
}

// function call to ask questions to app user
askInitialQuestions();


// TODO: Create a function to initialize app
function init() { }


// Function call to initialize app
init();
