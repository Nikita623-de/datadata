const { BrandDisk } = require('../models/models')

class BrandDiskController {

  async create(req, res) {
    const { name } = req.body
    const brandDisk = await BrandDisk.create({ name })
    return res.json(brandDisk)
  }

  async getAll(req, res) {
    const brandDisks = await BrandDisk.findAll()
    return res.json(brandDisks)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const brandDisk = await BrandDisk.destroy(
      {
        where: { id },
      },
    )
    return res.json(brandDisk)
  };
}

module.exports = new BrandDiskController()