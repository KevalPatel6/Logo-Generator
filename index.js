let fs = require('fs')
const SVG = require('./lib/svg')
const inquirer = require('inquirer')
let questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Type in up to 3 characters for your logo',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Type in a color keyword or a hexidecimal number for your text color.'

    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select which shape you want your logo to be',
        choices: ['Circle', 'Triangle', 'Square'],
        filter(val) {
            return val;
        }
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Type in a color keyword or a hexidecimal number for your shape color.'

    }
]

init();

async function init() {
    // inquirer.prompt(questions)

    try {
        let response = await inquirer.prompt(questions);
        console.log({...response})
         
        const newLogo = await new SVG(response.text,response.textColor,response.shape,response.shapeColor)
        

        fs.writeFile('logo.svg', JSON.stringify(newLogo.shape.render()), function (err) {
            if (err)
                console.log(err)
        })

    } catch (error) {
        console.error('An error occurred', error)
    }
    
}



// console.log(newLogo)

