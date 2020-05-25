const express = require('express');
const router = express();

const { extractPathParam } = require('../routes/middlewares/extract');

const { authorize } = require('../security/jwt');

const UserController = require('./controllers/user_controller.js');
const SubController = require('./controllers/sub_controller.js');
const PostController = require('./controllers/post_controller.js');
const ReplyController = require('./controllers/reply_controller.js');

router.use('/user', UserController);
router.use('/sub', authorize, SubController);
router.use('/post/:subId', authorize, extractPathParam("subId"), PostController);
router.use('/reply/:postId', authorize, extractPathParam("postId"), ReplyController);

module.exports = router;
