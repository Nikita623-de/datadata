const { Brand } = require('../models/models')
class BrandController {

  async create(req, res) {
    const { name } = req.body
    const brand = await Brand.create({ name })
    return res.json(brand)
  }

  async getAll(req, res) {
    const brands = await Brand.findAll()
    return res.json(brands)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const brand = await Brand.destroy(
      {
        where: { id },
      },
    )
    return res.json(brand)
  };
}

module.exports = new BrandController()