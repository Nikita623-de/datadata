const { WidthDisk } = require('../models/models')

class WidthDiskController {

  async create(req, res) {
    const { name } = req.body
    const widthDisk = await WidthDisk.create({ name })
    return res.json(widthDisk)
  }

  async getAll(req, res) {
    const widthDisks = await WidthDisk.findAll()
    return res.json(widthDisks)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const widthDisk = await WidthDisk.destroy(
      {
        where: { id },
      },
    )
    return res.json(widthDisk)
  };
}

module.exports = new WidthDiskController()