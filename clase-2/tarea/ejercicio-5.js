//TAREA//

//PASOS
//1.Leer dos números enteros.
//2.Dividir el primer valor con el segundo.
    //2.1.Evaluar si el valor es "0" y mostrar un error.
//3.Imprimir el resultado correcto de la di visión.

const argumentos = process.argv.slice(2); 

const numero1 = parseInt(argumentos[0]);
const numero2 = parseInt(argumentos[1]);

const division = numero1 / numero2;

if (numero1 === 0 || numero2 === 0) {
    console.log(`ERROR!! la división entre 0 no es posible de realizarse, intente con otros valores`);
}
else {
    console.log(`el resultado de la división es: ${division}`);
}

//console.log('process.argv', process.argv); 