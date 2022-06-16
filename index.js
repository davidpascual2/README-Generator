const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./generateMarkdown');
const CheckboxPrompt = require('inquirer/lib/prompts/checkbox');

const questions = [

        {
            type: "input",
            message: "what is title of your project?",
            name: 'title',
            validate: async (input) => {
                if (input) {
                    return true
                } else {
                    console.log("please enter a project title");
                    return false
                }
            }
        },
        {
            type: "input",
            message: "add a discription to you project",
            name: 'description',
            validate: async (input) => {
                if (input) {
                    return true
                } else {
                    console.log("please enter a project description");
                    return false
                }
            }
        },
        {
            type: "input",
            message: "enter any installation instuctions",
            name: 'installation',
        },
        {
            type: "input",
            message: "enter any usage information",
            name: 'usage',
        },
        {
            type: "input",
            message: "enter any contribution guidlines",
            name: 'contribution',
        },
        {
            type: "input",
            message: "enter test instructions",
            name: 'test',
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
            ],
            validate: async (input) => {
                if (Checkbox.length === 1) {
                    return true
                } else {
                    console.log("please pick one license");
                    return false
                }
            }
        },
        {
            type: "input",
            message: "enter github username",
            name: 'username',
            validate: async (input) => {
                if (input) {
                    return true
                } else {
                    console.log("please enter a username");
                    return false
                }
            }
        },
        {
            type: "input",
            message: "enter email",
            name: 'email',
            validate: async (input) => {
                if (input) {
                    return true
                } else {
                    console.log("please enter an email");
                    return false
                }
            }
        },
    ];

//create a function to write README file
function writeToFile(data) {
    fs.writeFile("./generated/README.md", generate(data), (err) => {
        err ? console.error(err) : console.log('File Updated!')
    })
};

//create function to initialize app
init = () => {
    inquirer.prompt(questions)
        .then(data => {
            writeToFile(data)
        });
};

//function call to initialize app
init();