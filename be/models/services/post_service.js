const {
    query
} = require('../db.js');

const add = async (title, content, subId, authorId) => {
    await query('INSERT INTO posts (title, content, sub_id, author_id, posted_at) VALUES ($1, $2, $3, $4, now())',
        [title, content, subId, authorId]);
}

const getById = async (id) => {
    return await query('SELECT * FROM posts WHERE id = $1', [id]);
}

const getAllBySubId = async (subId) => {
    return await query('SELECT * FROM posts WHERE sub_id = $1', [subId]);
}

const deleteById = async (id) => {
    await query('DELETE FROM posts WHERE id = $1', [id]);
}

module.exports = {
    add,
    getById,
    getAllBySubId,
    deleteById
}