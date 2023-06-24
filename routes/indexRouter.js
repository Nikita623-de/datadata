const Router = require('express')
const router = new Router()
const indexController = require('../controllers/indexController')

router.post('/', indexController.create)
router.get('/', indexController.getAll)
router.delete('/:id', indexController.removeOne)

module.exports = router