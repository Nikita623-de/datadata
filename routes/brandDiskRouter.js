const Router = require('express')
const router = new Router()
const brandDiskController = require('../controllers/brandDiskController')

router.post('/', brandDiskController.create)
router.get('/', brandDiskController.getAll)
router.delete('/:id', brandDiskController.removeOne)

module.exports = router