//This file will have all the shapes classes: Triangle, Circle, Square//

class Shape{
    constructor(fill){
        this.fill = fill
    }


}

class Circle extends Shape{
    constructor(radius){
        super(fill)
        this.radius = radius
    }

    render(){
        
        return   `<circle cx="150" cy="100" r="${this.radius}" fill="${this.fill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }

}

class Triangle extends Shape{
    constructor()


    render(){
        
        return   `<circle cx="150" cy="100" r="80" fill="${this.fill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }


}

class Square extends Shape{



render(){

return `<rect width="100%" height="100%" fill="red"/>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`

}


}

module.exports=Shape,Circle,Triangle,Square