//DEFINIG A MONGOOSE SCHEMA

const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
    },
    lastname: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true
    },
})
module.exports = mongoose.model('Registration', registrationSchema)