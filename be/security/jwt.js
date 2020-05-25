const jwt = require('jsonwebtoken');

const { ServerError } = require('../error/server_error');

const generateToken = async (payload) => {
    try {
        const signed = jwt.sign(payload, process.env.JWT_SECRET_KEY);
        return signed;
    } catch (err) {
        console.trace(err);
        throw new ServerError("Eroare la semnarea tokenului!", 500);
    }
};

const authorize = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            throw new ServerError('Lipseste headerul de autorizare!', 403);
        }
        const token = req.headers.authorization.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.state = {
            decoded,
            ...req.state
        };

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    generateToken,
    authorize,
};