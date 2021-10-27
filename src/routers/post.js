const router = require('express').Router()
const controller = require('../controllers/post')

router.get('/', controller.home)
router.post('/post/add-post', controller.addPost)

module.exports = router