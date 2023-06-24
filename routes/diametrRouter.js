const Router = require('express')
const router = new Router()
const diametrController = require('../controllers/diametrController')

router.post('/', diametrController.create)
router.get('/', diametrController.getAll)
router.delete('/:id', diametrController.removeOne)

module.exports = router