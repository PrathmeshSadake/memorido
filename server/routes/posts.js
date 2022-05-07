const express = require('express');
const router = express.Router();

const postsControllers = require('../controllers/posts');

const auth = require('../middleware/auth');

router.get('/', postsControllers.getPosts);
router.get('/:id', postsControllers.getPost);
router.post('/', auth, postsControllers.createPost);
router.patch('/:id', auth, postsControllers.updatePost);
router.delete('/:id', auth, postsControllers.deletePost);
router.patch('/:id/likePost', auth, postsControllers.likePost);

module.exports = router;
