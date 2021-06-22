const verduleria = require('./verduleria')
const userFruit = process.argv.slice(2).toString(); 
console.log(verduleria.fruits(userFruit));
