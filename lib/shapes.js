//This file will have all the shapes classes: Triangle, Circle, Square//
class Shape {
    constructor(fill) {
        this.fill = fill;
    }

    // render(){
    //     `<${this.shapeName.toLowerCase()} fill="${this.shapeColor}" />
    //     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    // }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="99" fill="${this.fill}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="0,200 150,0 300,200" fill="${this.fill}"/>`
    }
}

class Square extends Shape{
    render(){
        return `<rect width="300" height="200" fill="${this.fill}"/>`
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
};

