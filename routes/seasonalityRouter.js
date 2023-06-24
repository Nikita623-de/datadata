const Router = require('express')
const router = new Router()
const seasonalityController = require('../controllers/seasonalityController')

router.post('/', seasonalityController.create)
router.get('/', seasonalityController.getAll)
router.delete('/:id', seasonalityController.removeOne)

module.exports = router