const {
    query
} = require('./db.js');

const register = async (username, hashpass) => {
    await query('INSERT INTO users (username, hashpass) VALUES ($1, $2)', [username, hashpass]);
}

const login = async (username, hashpass) => {
    const users = await query('SELECT * FROM users WHER ' +
        'username = $1 AND hashpass = $2', [username, hashpass]);

    return users.length > 0;
}

module.exports = {
    register,
    login
}