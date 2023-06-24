const Router = require('express')
const router = new Router()
const diumController = require('../controllers/diumController')

router.post('/', diumController.create)
router.get('/', diumController.getAll)
router.delete('/:id', diumController.removeOne)

module.exports = router