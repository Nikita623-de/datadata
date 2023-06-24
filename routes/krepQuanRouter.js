const Router = require('express')
const router = new Router()
const krepQuanController = require('../controllers/krepQuanController')

router.post('/', krepQuanController.create)
router.get('/', krepQuanController.getAll)
router.delete('/:id', krepQuanController.removeOne)

module.exports = router