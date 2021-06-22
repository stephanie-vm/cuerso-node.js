//PASOS
//1.Leer 20 números positivos
//2.evaluar cuál es el mayor de ellos
//3.evaluar cuál es el menor de ellos
//4.Realizar una sumatoria de todos los números
//5.Ordenarlos de menor a mayor
//6.Imprimir los resultados

// Ésta función evalúa si los números del 
// arreglo son mayor a 0 recorriendo de uno 
// en uno y si es así, se retorna el mayor
function cifraMayoritaria(argumentos) {
    let mayor = 0; 
    for (let i = 0; i < argumentos.length; i++) {
        if (parseInt(argumentos[i]) < mayor) {
            mayor = argumentos[i];
        }        
    }
    return mayor;
}
// Ésta función evalúa si los números del 
// arreglo son menores, los va  recorriendo de uno 
// en uno y sí es así, se retorna el menor
function cifraMinoritaria(argumentos) {
    let minimo = argumentos[0];
    argumentos.forEach(numero => {
        if (numero < minimo) { 
            (minimo = numero)
        }
    });
    return minimo;
}
// Ésta función recorre el arreglo y va
//sumanado uno a uno cada número entero
function suma(argumentos) {
    let suma = 0;
    for (let i = 0; i < argumentos.length; i++) {
        const numeros = parseInt(argumentos[i]);
        suma += numeros;
    }
    return suma;
}
// Ésta función evalúa los números del 
// arreglo por medio de sort, a - b para ordenarlos
// de manera descendente
function ordenamientoCifras(argumentos) {
    const orden = argumentos.sort((a,b) => a - b);
    console.log(orden);
}
//Ésta función ejecuta las otras funciones, es decir las engloba y 
//están listas para ser exportadas
exports.operacion = function(argumentos) {
    console.log(cifraMayoritaria(argumentos));
    console.log(cifraMinoritaria(argumentos));
    console.log(suma(argumentos));
    console.log(ordenamientoCifras(argumentos));
}