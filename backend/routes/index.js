const {Router} = require('express');
const router = Router();
const {getPosts, postPosts, deletePosts} = require('../controllers/post.controller');	

router.get('/', (req, res) => {
    res.send('Server alive and running');
});

router.get('/posts', getPosts);
router.post('/posts', postPosts);
router.delete('/posts', deletePosts);

module.exports = router;