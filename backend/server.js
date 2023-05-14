const express = require('express');
const port = 5000;

const app = express();

// Connect to database
require('dotenv').config();

// database
//   .getConnection()
//   .then(() => {
//     console.log('Can reach database');
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/post', require('./routes/post.routes'));
// Lunch the server
app.listen(port, () => console.log('Server is running on port ' + port));
