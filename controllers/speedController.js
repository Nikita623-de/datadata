const { Speed } = require('../models/models')
class SpeedController {

  async create(req, res) {
    const { name } = req.body
    const speed = await Speed.create({ name })
    return res.json(speed)
  }

  async getAll(req, res) {
    const speeds = await Speed.findAll()
    return res.json(speeds)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const speed = await Speed.destroy(
      {
        where: { id },
      },
    )
    return res.json(speed)
  };
}

module.exports = new SpeedController()