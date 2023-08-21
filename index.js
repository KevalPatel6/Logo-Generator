let fs = require('fs')
const SVG = require('./lib/svg')
const {Triangle, Circle, Square} = require("./lib/shapes")
const Text = require('./lib/text')
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

        const textObj = new Text(response.textColor, response.text)
        let shapeObj;

        if(response.shape == "Triangle") {
            shapeObj = new Triangle(response.shapeColor);
        } else if(response.shape == "Circle") {
            shapeObj = new Circle(response.shapeColor);
        }else if(response.shape=="Square"){
            shapeObj = new Square(response.shapeColor)
        }

        const newLogo = new SVG(textObj, shapeObj);

        fs.writeFile('logo.svg', (newLogo.render()), function (err) {
            console.log("Generated logo.svg")
            if (err)
                console.log(err)
        })

    } catch (error) {
        console.error('An error occurred', error)
    }

}