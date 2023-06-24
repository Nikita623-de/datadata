const { Vilet } = require('../models/models')

class ViletController {

  async create(req, res) {
    const { name } = req.body
    const vilet = await Vilet.create({ name })
    return res.json(vilet)
  }

  async getAll(req, res) {
    const vilets = await Vilet.findAll()
    return res.json(vilets)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const vilet = await Vilet.destroy(
      {
        where: { id },
      },
    )
    return res.json(vilet)
  };
}

module.exports = new ViletController()