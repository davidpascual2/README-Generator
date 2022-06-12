const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./generateMarkdown')

const questions = [

        {
            type: "input",
            message: "what is title of your project?",
            name: 'title',
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
    ];
// .then((response) => {
//     console.log(response);
//     fs.appendFile('log.txt', JSON.stringify(response, null, '\t'), err =>
//         err ? console.error(err) : console.log('File Updated!')
//     );
// });

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