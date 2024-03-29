const router = require('express').Router()
const controller = require('../controllers/post')

router.delete('/delete/:slug', controller.deletePost)
router.get('/edit/:slug', controller.editPost)

router.get('/new-post', controller.newPost)
router.get('/:slug', controller.postSlug)

router.get('/', controller.index)

router.post('/add-post', controller.addPost)
router.put('/update/:slug', controller.updatePost)

module.exports = router