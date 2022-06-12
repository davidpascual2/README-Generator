const inquirer = require('inquirer');
const fs = require('fs');
const example = require

inquirer
    .prompt([
        {
            type: "input",
            message: "what is title of your project?",
            name: 'project title',
        },
        {
            type: "input",
            message: "add a discription to you project",
            name: 'description',
        },
        {
            type: "input",
            message: "enter any installation instuctions",
            name: 'installation',
        },
        {
            type: "input",
            message: "enter any usage information",
            name: 'usage-info',
        },
        {
            type: "input",
            message: "enter any contribution guidlines",
            name: 'contribution',
        },
        {
            type: "input",
            message: "enter test instructions",
            name: 'test-instructions',
        },
        {
            type: "list",
            message: "enter licenses",
            name: "license",
            choices: [
                'MIT',
                'Apache',
                "BSD",
                'GNU',
                'Mozilla',
                'none',
            ]
        },
        {
            type: "input",
            message: "enter github username",
            name: 'username',
        },
        {
            type: "input",
            message: "enter email",
            name: 'email',
        },
    ])

//create a function to write README file
function writeToFile(fileName, data) {
    
}

//create function to initialize app
function init() {}