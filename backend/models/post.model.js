const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  tag: {
    type: Number,
    required: true,
  },
  excuse: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Post', postSchema);
