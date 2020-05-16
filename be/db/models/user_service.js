const {
    query
} = require('./node_modules/.db.js.js.js');

const register = async (username, passhash) => {
    await query('INSERT INTO users')
}

module.exports = {
    register
}