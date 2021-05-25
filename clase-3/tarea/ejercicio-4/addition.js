//PASOS
//Exportar el módulo
//1.leer un número como oción
//2.Leer 2 números
//3.Realizar las operaciones de suma, multiplicación, división y resta 


exports.operacionesMatematicas = function (opcion, numero1, numero2) {
    if (opcion === 1) {
        return suma()
    }
    else if (opcion === 2) {
        return multiplicaion()
    }
    else if (opcion === 3) {
        if (numero1 === 0 || numero2 === 0) {
            console.log('ERROR');
        }
        else {
            return division();
        }
    } else {
        return resta();
    }

    function suma() {
        const resultadoSuma = numero1 + numero2;
        return resultadoSuma;
    }
    function resta() {
        const resultadoResta = numero1 - numero2;
        return resultadoResta;
    }
    function multiplicaion() {
        const resultadoMultiplicacion = numero1 * numero2;
        return resultadoMultiplicacion;
    }
    function division() {
        const resultadoDivision = numero1 / numero2;
        return resultadoDivision;
    }
}

