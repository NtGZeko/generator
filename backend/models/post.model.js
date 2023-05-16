const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  http_code: {
    type: Number,
    required: false,
  },
  tag: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Post', postSchema);
