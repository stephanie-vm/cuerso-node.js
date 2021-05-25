const additions = require('./addition');
const argumentos = process.argv.slice(2); 
const opcion = Number(argumentos[0])
const numero1 = Number(argumentos[1]);
const numero2 = Number(argumentos[2]);

console.log(additions.operacionesMatematicas(opcion, numero1, numero2));
