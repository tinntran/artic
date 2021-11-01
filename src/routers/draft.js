const router = require('express').Router()
const controller = require('../controllers/draft')

router.delete('/:slug', controller.deleteDraft)
router.put('/:slug', controller.updateDraft)
router.get('/edit/:slug', controller.edit)
router.get('/:slug', controller.view)
router.get('/', controller.index)

module.exports = router