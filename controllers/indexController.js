const { Index } = require('../models/models')
class IndexController {

  async create(req, res) {
    const { name } = req.body
    const index = await Index.create({ name })
    return res.json(index)
  }

  async getAll(req, res) {
    const indexes = await Index.findAll()
    return res.json(indexes)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const index = await Index.destroy(
      {
        where: { id },
      },
    )
    return res.json(index)
  };
}

module.exports = new IndexController()