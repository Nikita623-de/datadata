const { Thorn } = require('../models/models')

class ThornController {

  async create(req, res) {
    const { name } = req.body
    const thorn = await Thorn.create({ name })
    return res.json(thorn)
  }

  async getAll(req, res) {
    const thorns = await Thorn.findAll()
    return res.json(thorns)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const thorn = await Thorn.destroy(
      {
        where: { id },
      },
    )
    return res.json(thorn)
  };
}

module.exports = new ThornController()