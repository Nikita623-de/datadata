const Router = require('express')
const router = new Router()
const thornController = require('../controllers/thornsController')

router.post('/', thornController.create)
router.get('/', thornController.getAll)
router.delete('/:id', thornController.removeOne)

module.exports = router