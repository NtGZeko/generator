const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Here is the data from server successfully!' });
});

router.post('/', (req, res) => {
  res.json({ message: req.body.message });
});

router.put('/:id', (req, res) => {
  res.json({ messageId: req.params.id });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Message deleted successfully!' });
});
module.exports = router;
