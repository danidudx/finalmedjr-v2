const express = require('express');
const multer = require('multer');
const router = express.Router();
const Doctor = require('../models/doctors.model');
const path = require('path'); // Add this line for the path module

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const absolutePath = path.join(__dirname, '../../public/uploads');
    cb(null, absolutePath); // Specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + '-' + file.originalname;
    const filePath = 'uploads/' + fileName; // Use forward slashes for the path
    cb(null, fileName); // Set the file name
    req.filePath = filePath; // Save the file path to the request object
  },
});

const upload = multer({ storage: storage });

// Route to add a new blog with file upload
router.route('/add').post(upload.single('thumbnail'), (req, res) => {
  const { name, speciality, number, email } = req.body;
  const thumbnailPath = req.filePath; // Retrieve the file path from the request object

  // Creating a new blog instance
  const newDoctor = new Doctor({
    name,
    speciality,
    number,
    email,
    thumbnail: thumbnailPath, // Save the file path to the database

  });

  // Saving the new blog to the database
  newDoctor
    .save()
    .then(() => res.json('Doctor Added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
  Doctor.find()
      .then(doctors => res.json(doctors))
      .catch(err => res.status(400).json('Error: ' + err));
});

// Route to get a blog by ID
router.route('/:id').get(async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json('Doctor not found');
    }
    res.json(doctor);
  } catch (error) {
    console.error('Error fetching doctor by ID:', error);
    res.status(400).json('Error fetching doctor by ID: ' + error.message);
  }
});

module.exports = router;
