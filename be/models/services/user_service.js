const { query } = require('../db.js');
const { ServerError } = require('../../error/server_error');
const { generateToken } = require('../../security/jwt');

const register = async (username, hashpass) => {
    await query('INSERT INTO users (username, hashpass) VALUES ($1, $2)', [username, hashpass]);
}

const login = async (username, hashpass) => {
    const users = await query('SELECT * FROM users WHER ' +
        'username = $1 AND hashpass = $2', [username, hashpass]);

    if (users.length === 0) {
        throw new ServerError(`Utilizatorul cu username ${username} nu exista in sistem!`, 400);
    }
    const user = users[0];

    let token = await generateToken({
        userId: user.id,
        username: user.username
    });

    return token;
}

module.exports = {
    register,
    login
}