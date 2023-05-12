const express = require('express');
const port = 5000;

const app = express();
app.get('/post', (req, res) => {
  res.json({ message: 'Get data from server successfully!' });
});
// Lunch the server
app.listen(port, () => console.log('Server is running on port ' + port));
