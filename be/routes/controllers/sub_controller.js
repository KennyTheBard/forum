const express = require('express');

const SubService = require('../../models/services/sub_service');

const router = express.Router();

router.post('/', async (req, res, next) => {
    const {
        decodedJwt
    } = req.state;
    const {
        userId
    } = decodedJwt;
    const {
        name
    } = req.body;

    try {
        await SubService.add(name, userId);
        res.status(201);
    } catch (err) {
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const subs = await SubService.getAll();
        res.json(tasks);
    } catch (err) {
        next(err);
    }
});

module.exports = router;