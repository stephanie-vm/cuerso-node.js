//PASOS
//1. Leer un número entero.
//2.Evaluar si es menor que "0".
//3.Imprimir el resultado, si es o no negativo.
const argumentos = process.argv.slice(2);

const numero = parseInt(argumentos[0]);

if (numero < 0) {
    console.log(`El número ${numero} es negativo`);
}
else {
    console.log('el número es positivo');
}

//console.log('process.argv', process.argv); 