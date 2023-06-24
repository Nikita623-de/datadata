const { Width } = require('../models/models')

class WidthController {

  async create(req, res) {
    const { name } = req.body
    const width = await Width.create({ name })
    return res.json(width)
  }

  async getAll(req, res) {
    const widths = await Width.findAll()
    return res.json(widths)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const width = await Width.destroy(
      {
        where: { id },
      },
    )
    return res.json(width)
  };
}

module.exports = new WidthController()