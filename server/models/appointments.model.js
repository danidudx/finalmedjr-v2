const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema= new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phoneNumber:{type:Number, required:true},
    preferedDate:{type:Date, required:true},
    reason:{type:String, required:false},
    department:{type:String, required:false},

},{
    timestamps:true,
});

const Appointment = mongoose.model('Appointment',appointmentSchema);

module.exports = Appointment;

