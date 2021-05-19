//PASOS
//1. leer tres números enteros.
//2.Calcular el promedio(sumar los números y dividirlos entre la cantidad de dígitos).
    //2.1.Sumar los valores.
    //2.2.Dividir entre la cantidad ó longitud de dígitos.
//3.Imprimir el resultado del promedio.
const argumentos = process.argv.slice(2);

const  primerValor = parseInt(argumentos[0]);
const  segundoValor = parseInt(argumentos[1]);
const  tercerValor = parseInt(argumentos[2]);

function sumarValores() {
    const suma = primerValor + segundoValor + tercerValor;
    const promedio = suma / argumentos.length;
    return promedio;
}

console.log(`el promedio es: ${sumarValores()}`);

//console.log('process.argv', process.argv); 
