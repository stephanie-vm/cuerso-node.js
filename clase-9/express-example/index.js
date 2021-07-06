const express = require('express');
const path = require('path'); //ruta actual de la pc
const app = express();

app.use(express.json());
app.use(express.urlencoded({
	type:'application/x-www-form-urlencoded',
	extended: true,
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html')); //direccion del archivo localmente dirname trae la ubicacion del archivo
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/about.html')); //direccion del archivo localmente dirname trae la ubicacion del archivo
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Hola Mundo ...');
})

app.listen(3502);