const express = require('express');
const multer = require('multer');
const router = express.Router();
const Blog = require('../models/blogs.model');
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
  const { title, content, date } = req.body;
  const thumbnailPath = req.filePath; // Retrieve the file path from the request object

  // Creating a new blog instance
  const newBlog = new Blog({
    title,
    content,
    date,
    thumbnail: thumbnailPath, // Save the file path to the database
  });

  // Saving the new blog to the database
  newBlog
    .save()
    .then(() => res.json('Blog Added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
  Blog.find()
      .then(blogs => res.json(blogs))
      .catch(err => res.status(400).json('Error: ' + err));
});

// Route to get a blog by ID
router.route('/:id').get(async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json('Blog not found');
    }
    res.json(blog);
  } catch (error) {
    console.error('Error fetching blog by ID:', error);
    res.status(400).json('Error fetching blog by ID: ' + error.message);
  }
});

module.exports = router;
