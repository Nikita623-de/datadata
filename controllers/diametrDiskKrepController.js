const { DiametrDiskKrep } = require('../models/models')
class DiametrDiskKrepController {

  async create(req, res) {
    const { name } = req.body
    const diametrDiskKrep = await DiametrDiskKrep.create({ name })
    return res.json(diametrDiskKrep)
  }

  async getAll(req, res) {
    const diametrDiskKreps = await DiametrDiskKrep.findAll()
    return res.json(diametrDiskKreps)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const diametrDiskKrep = await DiametrDiskKrep.destroy(
      {
        where: { id },
      },
    )
    return res.json(diametrDiskKrep)
  };
}

module.exports = new DiametrDiskKrepController()