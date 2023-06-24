const { KrepQuan } = require('../models/models')
class KrepQuanController {

  async create(req, res) {
    const { name } = req.body
    const krepQuan = await KrepQuan.create({ name })
    return res.json(krepQuan)
  }

  async getAll(req, res) {
    const krepQuans = await KrepQuan.findAll()
    return res.json(krepQuans)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const krepQuan = await KrepQuan.destroy(
      {
        where: { id },
      },
    )
    return res.json(krepQuan)
  };
}

module.exports = new KrepQuanController()