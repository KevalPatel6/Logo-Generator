const {Circle,Triangle,Square} = require("../shapes");
const SVG = require("../svg")
const Text = require("../text")

test("test for rendering a Circle logo", () => {
    // test values
    const textColor = "red";
    const textContent = "ABC";
    const shapeFill = "blue"
    const shape = 'Circle'

    const textObj = new Text(textColor, textContent, shape);
    const shapeObj = new Circle(shapeFill)

    const newLogo = new SVG(textObj, shapeObj);

    // check if everything is in order

    expect(newLogo.render()).toBe(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="100" r="99" fill="${shapeFill}" />
<text x="100" y="115" font-size="60" text-anchor="middle" fill="${textColor}">${textContent}</text>
</svg>`)

})

test("test for rendering a Square logo", () => {
    // test values
    const textColor = "red";
    const textContent = "ABC";
    const shapeFill = "blue"
    const shape = 'Square'

    const textObj = new Text(textColor, textContent, shape);
    const shapeObj = new Square(shapeFill)

    const newLogo = new SVG(textObj, shapeObj);

    // check if everything is in order

    expect(newLogo.render()).toBe(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" fill="${shapeFill}"/>
<text x="100" y="115" font-size="60" text-anchor="middle" fill="${textColor}">${textContent}</text>
</svg>`)

})

test("test for rendering a Triangle logo", () => {
    // test values
    const textColor = "red";
    const textContent = "ABC";
    const shapeFill = "blue"
    const shape = "Triangle"

    const textObj = new Text(textColor, textContent, shape);
    const shapeObj = new Triangle(shapeFill)

    const newLogo = new SVG(textObj, shapeObj);

    // check if everything is in order

    expect(newLogo.render()).toBe(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="0,200 150,0 300,200" fill="${shapeFill}"/>
<text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${textContent}</text>
</svg>`)

})


