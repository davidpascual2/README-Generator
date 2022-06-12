//create a function that reutrns a license badge based on which license is passed in 
//if thre is not license , return an empty string
function renderLicenseBadge(license) {

if(license === 'none') {
    return ''
} else { 
    return `![${license}](https://img.shields.io/badge/license-${license}-yellowg)`
};

};

//create a fuction that returns the license link 
//if there is no license , retirn an empty string


//create a function that returns the license section of README 
//if there is no license, return an empty string
function renderLicenseSection(license) {
    if(license === 'none') {
        return ''
    } else if(license === 'MIT', 'Apache',"BSD",'GNU','Mozilla') { 
        return `${license}](https://img.shields.io/badge/license-${license}-yellowg)`;
    }
};
//create if statemnt for each license case 
// switch(data.license) {
//     case 1:
//         license = 'MIT';
//         break;
// }

//create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title} 
    ${renderLicenseBadge(data.license)}
    ## Description
    ${data.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [tests](#tests)
    * [license](#license)
    * [Contact](#contract)
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## License
    ${renderLicenseSection(data.license)} This project is ${data.license} licensed.
    ## Author
    GitHub: ${data.username}
    Email: ${data.email}
    `;
  }

 module.exports = generateMarkdown;
