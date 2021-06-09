let fs = require('fs');
let path = process.cwd();

const user = {
    "id": 1,
    "name": "John",
    "age":22
}

const data = JSON.stringify(user); 

// fs.writeFile(`${path} holamundo.txt`, 'Hola mundo', function(err, data) {
//     if (err)
//             return console.log.error(err);
//         console.log("Archivo creado y salvado");
// })

// fs.appendFile(`${path}/holamundo.txt`,"Hola mundo Steph\n y grupo" , function(err, data) {
//     if (err)
//             return console.log.error(err);
//         console.log("Archivo 2 actualizado");
// })
//Leer 

fs.readFile(`${path}/holamundo.txt`, 'utf8', function (err, data) {
    if (err)
    return console.log.error(err);
        console.log(data);
        console.log(JSON.stringify(data));
        console.log(data)
} )

fs.open(`${path}/nuevo.txt`, 'w', function(err, fd) {
    if (err)
    return console.log.error(err);

    fs.write(fd, 'Esta es mi primera linea', 'utf8', function(err) {
        if (err) {
            return console.log.error(err);
        }
    })
} )

fs.unlink(`${path}/nuevo.txt`,function(err, fd) {
    if (err)
    return console.log.error(err);
    console.log('Se ha eliminado el archihvo')
} )