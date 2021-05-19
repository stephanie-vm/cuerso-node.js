//PASOS
//1.Leer 3 valores.
//2.Almacenar en A,B,C.
//3.Evaluar el mayor de los 3.
//Imprimir ese resultado.

const argumentos = process.argv.slice(2);

const  a = parseInt(argumentos[0]);
const  b = parseInt(argumentos[1]);
const  c = parseInt(argumentos[2]);

//console.log(a);
//console.log(b);
//console.log(c);

    if (a > b & a > c) {
        console.log(`El valor de a (${a}) es el mayor de las 3 cifras`);
    } 
    else if (b > a & b > c){
        console.log(`El valor de b (${b}) es el mayor de las 3 cifras`);
    }
    else if (c > a & c > b) {
        console.log(`El valor de c (${c}) es el mayor de las 3 cifras`);
    } 
    else {
        console.log('No cumple con la condición');
    }


//console.log('process.argv', process.argv);

