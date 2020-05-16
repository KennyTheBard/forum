const {
    query
} = require('./db.js');

const create = async (name) => {
    await query('INSERT INTO subs (name) VALUES ($1)', [name]);
}

const getById = async (id) => {
    return await query('SELECT * FROM subs WHERE id = $1', [id]);
}

const getAll = async () => {
    return await query('SELECT * FROM subs LIMIT $1 OFFSET $2');
}

const deleteById = async (id) => {
    await query('DELETE FROM subs WHERE id = $1', [id]);
}

module.exports = {
    create,
    getById,
    getAll,
    deleteById
}