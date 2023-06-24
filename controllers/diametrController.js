const { Diametr } = require('../models/models')
class DiametrController {

  async create(req, res) {
    const { name } = req.body
    const diametr = await Diametr.create({ name })
    return res.json(diametr)
  }

  async getAll(req, res) {
    const diametrs = await Diametr.findAll()
    return res.json(diametrs)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const diametr = await Diametr.destroy(
      {
        where: { id },
      },
    )
    return res.json(diametr)
  };
}

module.exports = new DiametrController()