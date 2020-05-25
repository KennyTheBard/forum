const express = require('express');

const UserService = require('../../models/services/user_service');

const {
    hash,
    compare
} = require('../../security/password');

const router = express.Router();

router.post('/register', async (req, res, next) => {
    const {
        username,
        password
    } = req.state;

    try {
        let hashpass = await hash(password);

        UserService.register(username, hashpass);
    } catch (err) {
        next(err);
    }
});

router.post('/login', async (req, res, next) => {
    const {
        username,
        password
    } = req.state;

    try {
        let hashpass = await hash(password);

        UserService.login(username, hashpass);
    } catch (err) {
        next(err);
    }
});

module.exports = router;