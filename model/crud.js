// this is backend code
const mongoose = require('mongoose');
const {Schema} = mongoose;
const mySchema = new Schema({
    name : {
        type : String,
        required:true
    },
    email : {
        type : String,
        required:true,
        unique:true
    },
    phone : {
        type : Number,
        required:true,
        unique:true
    },
    address : {
        type : String,
        required:false
    },
    designation : {
        type : String,
        required:false
    },
    salary : {
        type : Number,
        required:false
    },
    password:{
        type : String,
        required:false
    },
})
module.exports = mongoose.model("Employee",mySchema)
