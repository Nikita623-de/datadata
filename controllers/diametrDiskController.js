const { DiametrDisk } = require('../models/models')
class DiametrDiskController {

  async create(req, res) {
    const { name } = req.body
    const diametrDisk = await DiametrDisk.create({ name })
    return res.json(diametrDisk)
  }

  async getAll(req, res) {
    const diametrDisks = await DiametrDisk.findAll()
    return res.json(diametrDisks)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const diametrDisk = await DiametrDisk.destroy(
      {
        where: { id },
      },
    )
    return res.json(diametrDisk)
  };
}

module.exports = new DiametrDiskController()