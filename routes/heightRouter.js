const Router = require('express')
const router = new Router()
const heightController = require('../controllers/heightController')

router.post('/', heightController.create)
router.get('/', heightController.getAll)
router.delete('/:id', heightController.removeOne)

module.exports = router