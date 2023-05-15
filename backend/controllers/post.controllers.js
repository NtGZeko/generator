const PostModel = require('../models/post.model');

module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};

module.exports.setPosts = async (req, res) => {
  if (!req.body.excuse) {
    res.status(400).json({ excuse: 'Bad request' });
  }
  const post = await PostModel.create({
    excuse: req.body.excuse,
  });
  res.status(200).json(post);
};

module.exports.editPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
    res.status(404).json({ excuse: 'Post not found' });
  }
  const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });
  res.status(200).json(updatePost);
};

module.exports.deletePost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
    res.status(404).json({ excuse: 'Post not found' });
  }
  await PostModel.deleteOne();
  res.status(200).json('deleted successfully!' + req.params.id);
};
