const router = require('express').Router();
const Appointment = require('../models/appointments.model');

// Route to get all appointments
router.route('/').get((req, res) => {
    Appointment.find()
        .then(appointments => res.json(appointments))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Route to add a new appointment
router.route('/add').post((req, res) => {
    const { name,email, phoneNumber, preferedDate, reason, department } = req.body;

    // Creating a new Appointment instance
    const newAppointment = new Appointment({
        name,
        email,
        phoneNumber,
        preferedDate: new Date(preferedDate), // Parsing preferedDate to Date object
        reason,
        department,
    });

    // Saving the new appointment to the database
    newAppointment.save()
        .then(() => res.json('Appointment Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
