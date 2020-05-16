const {
    query
} = require('./db.js');

const post = async (text, subId, authorId) => {
    await query('INSERT INTO posts (text, sub_id, author_id) VALUES ($1, $2, $3)',
        [text, subId, authorId]);
}

const reply = async (text, subId, replyToId, authorId) => {
    await query('INSERT INTO posts (text, sub_id, reply_to_id, author_id) VALUES ($1, $2, $3, $4)',
        [text, subId, replyToId, authorId]);
}

const getById = async (id) => {
    return await query('SELECT * FROM posts WHERE id = $1', [id]);
}

const getAllPostsBySubId = async (subId) => {
    return await query('SELECT * FROM posts WHERE sub_id = $1 AND reply_to_id IS NULL', [subId]);
}

const getAllRepliesByPostId = async (postId) => {
    return await query('WITH RECURSIVE replies AS (SELECT p.id, p.text, u.username FROM posts p ' +
        'JOIN users u ON u.id = p.author_id WHERE reply_to_id = $1 ' +
        'UNION SELECT r.id, r.text, u.username FROM posts p JOIN posts r ON r.reply_to_id = p.id ' +
        'JOIN users u ON r.author_id = u.id) SELECT * from replies' 
        [postId]);
}

const deleteById = async (id) => {
    await query('DELETE FROM posts WHERE id = $1', [id]);
}

module.exports = {
    post,
    reply,
    getById,
    getAllPostsBySubId,
    getAllRepliesByPostId,
    deleteById
}