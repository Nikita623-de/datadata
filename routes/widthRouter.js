const Router = require('express')
const router = new Router()
const widthController = require('../controllers/widthController')

router.post('/', widthController.create)
router.get('/', widthController.getAll)
router.delete('/:id', widthController.removeOne)

module.exports = router