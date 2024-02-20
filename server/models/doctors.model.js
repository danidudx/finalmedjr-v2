const { string } = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema= new Schema({
    name:{type:String, required:true},
    speciality:{type:String, required:true},
    number:{type:String, required:true},
    email:{type:String, required:true},
    thumbnail:{type:String, required:false},

},{
    timestamps:true,
});

const Doctor = mongoose.model('Doctor',doctorSchema);

module.exports = Doctor;

