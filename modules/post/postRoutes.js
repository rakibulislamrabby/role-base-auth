const express = require('express');
const { protect, admin } = require('../auth/authMiddleware');
const { createPost, getPosts } = require('./postController');
const router = express.Router();

router.route('/').post(protect, admin, createPost).get(protect, getPosts);

module.exports = router;
