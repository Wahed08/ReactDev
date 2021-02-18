const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    },
    confirm_password:{
        type: String,
        required: true
    }

},{timestamps: true});

const temp = mongoose.model('Registrations', schema)
module.exports = temp;