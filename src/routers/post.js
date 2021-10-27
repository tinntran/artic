const router = require('express').Router()
const controller = require('../controllers/post')

router.get('/new-post', controller.newPost)
router.get('/', controller.home)
router.post('/add-post', controller.addPost)

module.exports = router