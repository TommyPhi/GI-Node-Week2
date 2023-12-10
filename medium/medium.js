const fs = require('fs');

const planets = fs.readFileSync('planets.txt')

console.log(planets.toString())