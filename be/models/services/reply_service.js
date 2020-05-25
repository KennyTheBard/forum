const {
    query
} = require('../db.js');

const add = async (content, postId, replyToId, authorId) => {
    await query('INSERT INTO replies (content, post_id, reply_to_id, author_id, posted_at) ' + 
    'VALUES ($1, $2, $3, $4, now())',
        [content, postId, replyToId, authorId]);
}

const getById = async (id) => {
    return await query('SELECT * FROM replies WHERE id = $1', [id]);
}

const getAllByPostId = async (postId) => {
    return await query('SELECT * FROM replies WHERE post_id = $1', [postId]);
}

const deleteById = async (id) => {
    await query('DELETE FROM replies WHERE id = $1', [id]);
}

module.exports = {
    add,
    getById,
    getAllByPostId,
    deleteById
}