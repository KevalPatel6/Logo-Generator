const fs = require('fs')
let SVG = require('./lib/svg')

let example = new SVG("SVG", "green", "triangle", "yellow")



fs.writeFile('logo.svg', example.markUp, function(err){
    if(err)
    console.log(err)
})