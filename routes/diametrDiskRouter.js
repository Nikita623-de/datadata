const Router = require('express')
const router = new Router()
const diametrDiskController = require('../controllers/diametrDiskController')

router.post('/', diametrDiskController.create)
router.get('/', diametrDiskController.getAll)
router.delete('/:id', diametrDiskController.removeOne)

module.exports = router