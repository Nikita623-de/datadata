const { Height } = require('../models/models')
class HeightController {

  async create(req, res) {
    const { name } = req.body
    const height = await Height.create({ name })
    return res.json(height)
  }

  async getAll
    (req, res) {
    const heights = await Height.findAll()
    return res.json(heights)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const height = await Height.destroy(
      {
        where: { id },
      },
    )
    return res.json(height)
  };
}

module.exports = new HeightController()