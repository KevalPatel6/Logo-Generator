const (Shape,Circle,Triangle,Square) = require('./shapes')


class SVG extends {
    constructor(logoText, logoColor, shape, fill) {
        this.logoText = logoText
        this.logoColor = logoColor
        this.shapeName = shape
        this.fill = fill
    
     
    if (this.shapeName === 'Square') {
        this.shape.render()
    }
    
    if (this.shape === 'Triangle') {
        this.shape.render()
    }
    
    if (this.shape === 'Circle') {
        this.shape.render()
    }
}
}
console.log
module.exports = SVG