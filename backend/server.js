const express = require('express');
const connectDB = require('./config/db');
const { getPosts } = require('./controllers/post.controllers');
const dotenv = require('dotenv').config();
const port = 5000;
const cors = require('cors');
const path = require('path');
// connectDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});
app.use('/post', require('./routes/post.routes'));

// Lunch the server

app.listen(port, () => console.log('Server is running on port ' + port));
