//NOTA: Math.sign() devuelve positivo si es 1, negativo si es -1 y 0 neutro
//Inicializo mi resultado en 0 globalmente
let resultado = 0;
//Se crea una función para valores positivos
function valoresPositivos(argumentos) {
    let mediana = 0;
    for (let i = 0; i < argumentos.length; i++) {
        const numeros = Number(argumentos[i]);
        if (Math.sign(numeros) === 1) {
            mediana += numeros;
        }        
    }
    resultado = mediana / argumentos.length;
    return resultado;
}
//Se crea una función para valores negativos
function valoresNegativos(argumentos) {
    let mediana = 0;
    for (let i = 0; i < argumentos.length; i++) {
        const numeros = Number(argumentos[i]);
        if (Math.sign(numeros) === -1) {
            mediana += numeros;
        }        
    }
    resultado = mediana / argumentos.length;
    return resultado;
}

exports.operacionMedia = function (argumentos) {
    console.log(valoresPositivos(argumentos));
    console.log(valoresNegativos(argumentos));
}

