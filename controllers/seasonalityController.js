const { Seasonality } = require('../models/models')

class SeasonalityController {

  async create(req, res) {
    const { name } = req.body
    const seasonality = await Seasonality.create({ name })
    return res.json(seasonality)
  }

  async getAll(req, res) {
    const seasonalitys = await Seasonality.findAll()
    return res.json(seasonalitys)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const seasonality = await Seasonality.destroy(
      {
        where: { id },
      },
    )
    return res.json(seasonality)
  };
}

module.exports = new SeasonalityController()