const colors = require('colors/safe');

const argumentos = process.argv.slice(2);
const [nombre = "Amigo"] = argumentos;
const hora = new Date().getHours();

if (hora >= 6 && hora < 12) {
    console.log(colors.green(`Buenos días ${nombre}`))
} else if (hora >=12 && hora < 18){
    console.log(colors.cyan(`Buenas tardes ${nombre}`))
} else {
    console.log(colors.random(`Buenas noches ${nombre}`))
}