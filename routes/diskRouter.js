const Router = require('express')
const router = new Router()
const diskController = require('../controllers/diskController')

router.post('/', diskController.create)
router.get('/', diskController.getAll)
router.get('/:id', diskController.getOne)
router.delete('/:id', diskController.removeOne)

module.exports = router