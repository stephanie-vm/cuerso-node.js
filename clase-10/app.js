const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/user.route');
const favoriteMusicRoute = require('./routes/favoriteMusic.route');
require('dotenv').config();

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true});
const db = mongoose.connection;
db.on('error', error=>console.log(error));
db.once('open', ()=> console.log('connection to db established'));

app.use(express.json());//traerme el body como un json
app.use(express.urlencoded({//urlendcoded: reconocer 
    type:'application/x-www-form-urlendcoded',
    extended: true,
}))
app.use('/', userRoute);
app.use('/', favoriteMusicRoute);
app.use('*', (req, res) =>{
    res.status(404);
    res.send("path cannot found");
})


app.listen(PORT, HOSTNAME, () => {
    console.log(`server running on ${HOSTNAME}: ${PORT}`);
})