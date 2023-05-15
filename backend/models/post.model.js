const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  excuse: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Post', postSchema);
