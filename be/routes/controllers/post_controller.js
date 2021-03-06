const express = require('express');

const PostService = require('../../models/services/post_service')

const router = express.Router();

router.post('/', async (req, res, next) => {
    const {
        subId,
        userId
    } = req.state;
    const {
        title, 
        content
    } = req.body;

    try {
        await PostService.add(title, content, parseInt(subId), parseInt(userId));
    } catch (err) {
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    const {
        subId
    } = req.state;

    try {
        const posts = await PostService.getAllBySubId(parseInt(subId));
        res.json(posts);
    } catch (err) {
        next(err);
    }
});

module.exports = router;