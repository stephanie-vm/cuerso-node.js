//PASOS
//1.Leer un número entero
//2.Realizar la suma
//3.Imprimir el resultado

const argumentos = process.argv.slice(2);
const numero = parseInt(argumentos[0]); 


function sumaNumeros(numero) {
    const suma = numero * (numero + 1) / 2; 
    return suma;
}

console.log(sumaNumeros(numero));
