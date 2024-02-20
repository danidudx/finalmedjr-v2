require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
// const appointmentsRouter =require("./routes/appointments");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
// Example: Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));


const appointmentsRouter = require('./routes/appointments');
const blogsRouter = require('./routes/blogs');
const doctorsRouter = require('./routes/doctors');

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use('/appointments',appointmentsRouter);
app.use('/blogs',blogsRouter);
app.use('/doctorsdash',doctorsRouter);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
