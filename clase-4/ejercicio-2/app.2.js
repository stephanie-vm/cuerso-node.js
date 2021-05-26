const additions = require('./addition2');
const argumentos = process.argv.slice(2); 
const diametro = Number(argumentos[0])
const altura = Number(argumentos[1]);
console.log(additions.operacionVolumen(diametro, altura));