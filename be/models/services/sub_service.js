const {
    query
} = require('../db.js');

const add = async (name, authorId) => {
    await query('INSERT INTO subs (name, author_id) VALUES ($1, $2)', [name, authorId]);
}

const getById = async (id) => {
    return await query('SELECT * FROM subs WHERE id = $1', [id]);
}

const getAll = async () => {
    return await query('SELECT * FROM subs');
}

const deleteById = async (id) => {
    await query('DELETE FROM subs WHERE id = $1', [id]);
}

module.exports = {
    add,
    getById,
    getAll,
    deleteById
}