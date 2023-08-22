const SVG = require('./svg')
class Text extends SVG{
        // properties
        constructor(color, content, shape) {
            super(shape)
            this.color = color;
            this.content = content;
            this.shape = shape
        }
    
        // methods
        render() {
            if(this.shape == "Triangle"){
                
                return `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.color}">${this.content}</text>`
            }
            else if(this.shape == "Circle"){
                
                return `<text x="100" y="115" font-size="60" text-anchor="middle" fill="${this.color}">${this.content}</text>`
            }
            else if(this.shape == "Square"){
                
                return `<text x="100" y="115" font-size="60" text-anchor="middle" fill="${this.color}">${this.content}</text>`
            }
        }
}

module.exports = Text