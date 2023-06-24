const Router = require('express')
const router = new Router()
const speedController = require('../controllers/speedController')

router.post('/', speedController.create)
router.get('/', speedController.getAll)
router.delete('/:id', speedController.removeOne)

module.exports = router