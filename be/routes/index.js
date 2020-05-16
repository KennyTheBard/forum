const express = require('express');
const router = express();

const UserController = require('./controllers/user_controller.js');
const SubController = require('./controllers/sub_controller.js');
const PostController = require('./controllers/post_controller.js');


router.use('/users', UserController);
router.use('/subs', SubController);
router.use('/posts', PostController);


module.exports = router;
