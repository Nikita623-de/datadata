const Router = require('express')
const router = new Router()
const diametrDiskKrepController = require('../controllers/diametrDiskKrepController')

router.post('/', diametrDiskKrepController.create)
router.get('/', diametrDiskKrepController.getAll)
router.delete('/:id', diametrDiskKrepController.removeOne)

module.exports = router