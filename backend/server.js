const express = require('express');
const connectDB = require('./config/db');
const { getPosts } = require('./controllers/post.controllers');
const dotenv = require('dotenv').config();
const port = 5000;
const cors = require('cors');

// connectDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/post', require('./routes/post.routes'));

// Lunch the server

app.listen(port, () => console.log('Server is running on port ' + port));
