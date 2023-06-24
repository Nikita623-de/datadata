const Router = require('express')
const router = new Router()
const viletController = require('../controllers/viletController')

router.post('/', viletController.create)
router.get('/', viletController.getAll)
router.delete('/:id', viletController.removeOne)

module.exports = router