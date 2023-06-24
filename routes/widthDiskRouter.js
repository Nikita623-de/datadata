const Router = require('express')
const router = new Router()
const widthDiskController = require('../controllers/widthDiskController')

router.post('/', widthDiskController.create)
router.get('/', widthDiskController.getAll)
router.delete('/:id', widthDiskController.removeOne)

module.exports = router