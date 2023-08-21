class Text {
        // properties
        constructor(color, content) {
            this.color = color;
            this.content = content;
        }
    
        // methods
        render() {
            return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.content}</text>`
        }
}

module.exports = Text