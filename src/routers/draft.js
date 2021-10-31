const router = require('express').Router()
const controller = require('../controllers/draft')

router.get('/', controller.index)

module.exports = router