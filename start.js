//IMPORTING THE EXPRESS APP CREATED IN APP.JS 
require('dotenv').config();
const mongoose = require('mongoose');
require('./model/Registration')
const app = require ('./app');


mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.promise = global.promise
mongoose.connection
.on('connected', () => {
    console.log(`mongooose conncetion open on ${process.env.DATABASE}`);
})
.on('error', (err) => {
    console.log(`connection error ${err.message}`)
})

//TELLING THE APP TO LISTEN AT PORT 8000
const server = app.listen(8000, () =>{
    console.log(`Express is running on port ${server.address().port}`);
})