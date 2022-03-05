const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Provide the name of the developer(s):",
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a brief description of your project:",
        },
        {
            type: "input",
            name: "use",
            message: "Tell us how to use your application:",
        },
        {
            type: "input",
            name: "install",
            message: "How do you install your application?",
        },
        {
            type: "input",
            name: "report",
            message: "How does a user report issues with your application? Are there any known issues with the current version?",
        },
        {
            type: "input",
            name: "contribute",
            message: "How does a user contribute to your application?",
        },
        {
            type: "input",
            name: "year",
            message: "What year did you license your application?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub profile name?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license does your application have?",
            choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license', 
            'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license', 'Creative Commons license family', 'Creative Commons Zero v1.0 Universal', 
            'Creative Commons Attribution 4.0', 'Creative Commons Attribution Share Alike 4.0', 'Do What The F*ck You Want To Public License',
            'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 'European Union Public License 1.1',
            'GNU Affero General Public License v3.0', 'GNU General Public License family', 'GNU General Public License v2.0', 'GNU General Public License v3.0',
            'GNU Lesser General Public License family', 'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0', 'Internet Systems Consortium (ISC)',
            'LaTeX Project Public License v1.3c', 'Microsoft Public License', 'Massachusetts Institute of Technology (MIT)', 'Mozilla Public License 2.0', 'Open Software License 3.0',
            'PostgreSQL License', 'SIL Open Font License 1.1', 'University of Illinois/NCSA Open Source License', 'The Unlicense', 'zLib License'],
        },   
    ])

    .then((data) => {
        //creating README Content
const README = `# ${data.title}
## Description
${data.description}

![License](https://img.shields.io/badge/license-${data.license.toLowerCase().split(' ').join('')}-green)

## Table of Contents
- [Usage](#usage)
- [Installation](#installation)
- [Tests, Reporting, and Issues](#tests-reporting-and-issues)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)
        
## Usage
${data.use}

## Installation
${data.install}

## Tests, Reporting, and Issues
${data.report}

## Contributing
${data.contribute}
        
## Questions
For any questions, contact me through my [GitHub](https://github.com/${data.github}) or send me an [email](mailto:${data.email}?subject=[GitHub]).
        
## License
Copyright (c) ${data.year} ${data.name} via ${data.license}`

        //Write README file
        const filename = `README-sample.md`;

        fs.writeFile(filename, README, (err) =>
        err ? console.log(err) : console.log('Success!'));
    })
    