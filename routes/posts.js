const express = require('express');
const Post = require('../models/Post');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.redirect('/login');
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        res.redirect('/login');
    }
};

router.get('/', authMiddleware, async (req, res) => {
    try {
        const posts = await Post.find().populate('userId', 'username');
        res.render('index', { posts });
    } catch (error) {
        res.status(500).send('Error fetching posts');
    }
});

router.post('/post', authMiddleware, async (req, res) => {
    const { content } = req.body;
    try {
        const post = new Post({ userId: req.user._id, content });
        await post.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error creating post');
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('token').redirect('/login');
});

module.exports = router;
```
