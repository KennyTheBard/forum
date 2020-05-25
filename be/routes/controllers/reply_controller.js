const express = require('express');

const ReplyService = require('../../models/services/reply_service')

const router = express.Router();

router.post('/', async (req, res, next) => {
    const {
        userId,
        postId
    } = req.state;
    const {
        content,
        replyToId
    } = req.body;

    try {
        await ReplyService.add(content, parseInt(postId),
            parseInt(replyToId), parseInt(userId));
    } catch (err) {
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    const {
        postId
    } = req.state;

    try {
        const replies = await ReplyService.getAllByPostId(parseInt(postId));
        res.json(replies);
    } catch (err) {
        next(err);
    }
});

module.exports = router;