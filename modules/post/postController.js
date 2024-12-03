const asyncHandler = require('express-async-handler');
const Post = require('./postModel');

// Create Post
const createPost = asyncHandler(async (req, res) => {
    const { title, content } = req.body;
    const post = await Post.create({ title, content, createdBy: req.user._id });
    res.status(201).json(post);
});

// Get Posts
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find().populate('createdBy', 'name email');
    res.status(200).json(posts);
});

module.exports = { createPost, getPosts };
