const express = require('express');
const router = express.Router();

const postsControllers = require('../controllers/posts');

router.get('/', postsControllers.getPosts);
router.get('/:id', postsControllers.getPost);
router.post('/', postsControllers.createPost);
router.patch('/:id', postsControllers.updatePost);
router.delete('/:id', postsControllers.deletePost);

module.exports = router;
