const { Dium } = require('../models/models')
class DiumController {

  async create(req, res) {
    const { name } = req.body
    const dium = await Dium.create({ name })
    return res.json(dium)
  }

  async getAll(req, res) {
    const diums = await Dium.findAll()
    return res.json(diums)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const dium = await Dium.destroy(
      {
        where: { id },
      },
    )
    return res.json(dium)
  };
}

module.exports = new DiumController()