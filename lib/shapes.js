//This file will have all the shapes classes: Triangle, Circle, Square//

let SVG = require('./svg')

export class Shape extends SVG{
    constructor(logoText,fill,shapeName,logoColor){
      super(logoText,fill,shapeName,logoColor)
 
    }

    // render(){
    //     `<${this.shapeName.toLowerCase()} fill="${this.shapeColor}" />
    //     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    // }
 

}

 class Circle extends Shape{
    constructor(){
        super(this.shapeColor,this.text,this.shape,this.textColor)
        
    }

    render(){
        
        return   `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }

}

 class Triangle extends Shape{
    constructor(){
        super(this.shapeColor,this.text,this.shape,this.textColor)
    
    }


    render(){
        
        return   `<polygon points="300,0 0,500 600,500" fill="${this.shapeColor}"/>

        <text x="300" y="300" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }


}

 class Square extends Shape{
    constructor(){
        super(this.shapeColor,this.text,this.shape,this.textColor)
    
    }


render(){

return `<rect width="100%" height="100%" fill="${this.shapeColor}"/>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`

}


}

module.exports= (Shape,Circle,Triangle,Square)