const uuid = require('uuid')
const path = require('path');
const { Product, ProductInfo } = require('../models/models')
const ApiError = require('../error/ApiError');

class ProductController {

  async create(req, res, next) {
    try {
      let { name, price, widthId, heightId, speedId, diametrId,
        indexId, brandId, thornId, seasonalityId, info } = req.body
      let { img } = req.files
      let fileName = uuid.v4() + ".png"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      let product = await Product.create({
        name, price, widthId, heightId, speedId, diametrId,
        indexId, brandId, thornId, seasonalityId, img: fileName
      });

      if (info) {
        info = JSON.parse(info)
        info.forEach(i =>
          ProductInfo.create({
            title: i.title,
            description: i.description,
            productId: product.id
          })
        )
      }

      return res.json(product)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let { widthId, heightId, speedId, diametrId, indexId, brandId, thornId, seasonalityId, limit, page } = req.query
    page = page || 1
    limit = limit || 4
    let offset = page * limit - limit
    let Products;
    if (!widthId && !heightId && !speedId && !diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ limit, offset })
    }
    if (widthId && !heightId && !speedId && !diametrId && indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, indexId, brandId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, indexId, brandId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, indexId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, indexId, speedId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && !diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { indexId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { diametrId, indexId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, indexId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, indexId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && diametrId && !indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && !indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { thornId, diametrId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, brandId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, brandId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && !indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, brandId, thornId }, limit, offset })
    }
    if (widthId && !heightId && speedId && diametrId && !indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, diametrId, brandId, thornId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, diametrId, brandId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && diametrId && !indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, diametrId, brandId, thornId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && diametrId && indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, diametrId, indexId, brandId, thornId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && !diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, indexId, thornId }, limit, offset })
    }
    if (widthId && !heightId && speedId && diametrId && !indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, diametrId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && speedId && !diametrId && !indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, diametrId, indexId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && diametrId && !indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, diametrId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && diametrId && !indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, diametrId, brandId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { diametrId, indexId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && !diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, indexId, brandId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && diametrId && !indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, diametrId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && !diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, indexId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && !diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, indexId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && speedId && !diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, indexId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, diametrId, indexId, brandId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && !indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, thornId, brandId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, indexId, thornId, brandId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && !indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { diametrId, thornId, brandId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { diametrId, thornId, indexId, brandId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && !diametrId && indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { thornId, indexId, brandId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && !diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { thornId, indexId, speedId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && !diametrId && indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { thornId, indexId, speedId, brandId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { thornId, seasonalityId, indexId, heightId, diametrId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && !diametrId && indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, seasonalityId, indexId, brandId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && !diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, indexId, brandId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && !diametrId && !indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, seasonalityId, brandId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && !indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, seasonalityId, brandId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && !diametrId && !indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, seasonalityId, brandId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && !indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, seasonalityId, brandId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && !diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, indexId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { diametrId, indexId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && !diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, indexId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, heightId, diametrId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && !indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, heightId, diametrId, thornId }, limit, offset })
    }
    if (widthId && !heightId && speedId && diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, indexId, diametrId, brandId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && diametrId && !indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, diametrId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && !indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, diametrId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && !indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, diametrId, thornId, brandId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && !indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, diametrId, thornId, brandId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && diametrId && !indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, diametrId, thornId, brandId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && diametrId && indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, diametrId, indexId, brandId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && !indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { diametrId, thornId, brandId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && speedId && !diametrId && !indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, thornId, speedId }, limit, offset })
    }
    if (widthId && !heightId && speedId && diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, speedId }, limit, offset })
    }
    if (widthId && !heightId && speedId && !diametrId && !indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, seasonalityId, speedId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, indexId, brandId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, indexId, thornId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && !indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, thornId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && !indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, heightId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, heightId, indexId }, limit, offset })
    }
    if (widthId && heightId && speedId && !diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, heightId, indexId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && !diametrId && !indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, brandId, thornId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && !indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, brandId, thornId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { thornId, speedId, seasonalityId, indexId, heightId, diametrId }, limit, offset })
    }
    if (widthId && heightId && speedId && !diametrId && !indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, brandId, thornId, widthId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, indexId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, indexId, brandId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, indexId, thornId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && !diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, indexId, thornId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && diametrId && !indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && !diametrId && !indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && speedId && diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, diametrId, indexId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, brandId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, brandId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && !indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, indexId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, indexId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, indexId, brandId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, brandId, speedId }, limit, offset })
    }
    if (widthId && !heightId && speedId && diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, brandId, speedId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, diametrId, brandId, speedId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && !indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, diametrId, brandId, speedId, thornId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && !diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, brandId, indexId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && diametrId && !indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, thornId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && !indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, thornId, heightId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && !indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, thornId, speedId, heightId }, limit, offset })
    }
    if (widthId && !heightId && speedId && diametrId && !indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, thornId, speedId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && !indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && speedId && !diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, indexId, thornId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && !indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, seasonalityId, speedId, brandId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && !indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, speedId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, indexId, thornId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, indexId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, heightId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { thornId, diametrId, indexId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { thornId, diametrId, indexId, widthId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && !diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && !diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && !diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { diametrId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && !diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { indexId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && !diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { brandId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && !diametrId && !indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { thornId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, diametrId, indexId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && !diametrId && !indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId }, limit, offset })
    }
    if (widthId && heightId && speedId && !diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, diametrId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, diametrId, indexId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, diametrId, indexId, brandId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, diametrId, indexId, brandId, thornId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && !diametrId && !indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && !diametrId && !indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { brandId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && !diametrId && indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { indexId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { diametrId, indexId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && diametrId && indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, diametrId, indexId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, diametrId, indexId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, diametrId, indexId, brandId, thornId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && diametrId && indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, diametrId, indexId, brandId, thornId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, diametrId, indexId, brandId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, diametrId, indexId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, diametrId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { diametrId, indexId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && !diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { indexId, brandId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && !diametrId && !indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { brandId, thornId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && !diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { indexId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && !diametrId && !indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { brandId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && !indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { diametrId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && !diametrId && !indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && !diametrId && !indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && !diametrId && !indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && !indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && speedId && !diametrId && !indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && !indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, diametrId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, diametrId, indexId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && speedId && diametrId && indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, diametrId, indexId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, indexId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && speedId && !diametrId && indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, indexId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && !indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, diametrId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, diametrId, indexId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, diametrId, indexId, brandId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && diametrId && indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, indexId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && !diametrId && indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, indexId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && !diametrId && !indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && !diametrId && !indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && !diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, indexId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, diametrId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && !diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, brandId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && !diametrId && !indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, thornId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && !diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, indexId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && !diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, brandId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && !diametrId && !indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, thornId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { diametrId, brandId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && !indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { diametrId, thornId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && !diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { indexId, thornId }, limit, offset })
    }
    if (widthId && !heightId && speedId && !diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && diametrId && !indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && !diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, indexId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && !diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, brandId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && !diametrId && !indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, thornId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, brandId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, brandId }, limit, offset })
    }
    if (widthId && heightId && speedId && !diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, heightId, brandId }, limit, offset })
    }
    if (widthId && !heightId && speedId && !diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, brandId }, limit, offset })
    }
    if (widthId && !heightId && speedId && !diametrId && !indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, brandId }, limit, offset })
    }
    if (widthId && !heightId && speedId && !diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, indexId, brandId }, limit, offset })
    }
    if (widthId && !heightId && speedId && !diametrId && indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, indexId, brandId, thornId }, limit, offset })
    }
    if (widthId && !heightId && speedId && !diametrId && !indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && speedId && !diametrId && !indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && !indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && !indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, thornId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, indexId, speedId, thornId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, indexId, brandId, speedId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && speedId && !diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, indexId, thornId }, limit, offset })
    }
    if (widthId && !heightId && speedId && !diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, indexId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && !diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, indexId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, indexId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, indexId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && !indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && !diametrId && !indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && !indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && speedId && !diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, indexId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && speedId && !diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, indexId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && speedId && diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, diametrId, indexId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && speedId && diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, diametrId, indexId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, diametrId, indexId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && diametrId && indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, diametrId, indexId, brandId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && speedId && diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { speedId, diametrId, indexId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, diametrId, indexId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, diametrId, indexId, brandId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, indexId, brandId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, diametrId, indexId, brandId }, limit, offset })
    }
    if (!widthId && heightId && speedId && !diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, indexId, brandId }, limit, offset })
    }
    if (widthId && heightId && speedId && !diametrId && indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, indexId, brandId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && speedId && !diametrId && indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, indexId, brandId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && speedId && !diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, indexId, brandId }, limit, offset })
    }
    if (widthId && heightId && speedId && !diametrId && !indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, seasonalityId, brandId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && !indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, seasonalityId, brandId, thornId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && !diametrId && !indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, seasonalityId, brandId, thornId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && !indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, diametrId, brandId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && !indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, diametrId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && speedId && diametrId && indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, diametrId, indexId, brandId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && speedId && diametrId && !indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, diametrId, brandId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && diametrId && indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, indexId, brandId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && diametrId && !indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, brandId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, indexId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && !diametrId && indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, indexId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, indexId, thornId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, indexId }, limit, offset })
    }
    if (widthId && heightId && !speedId && !diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, indexId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && !diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, indexId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, diametrId, indexId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && diametrId && indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, indexId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && !speedId && diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, diametrId, indexId, indexId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && indexId && brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { diametrId, indexId, brandId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && diametrId && indexId && !brandId && !thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, diametrId, indexId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, indexId, thornId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, diametrId, indexId, thornId }, limit, offset })
    }
    if (widthId && heightId && speedId && diametrId && !indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, diametrId, brandId, thornId }, limit, offset })
    }
    if (widthId && heightId && speedId && !diametrId && indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, speedId, indexId, brandId, thornId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, indexId, brandId, thornId }, limit, offset })
    }
    if (widthId && !heightId && speedId && diametrId && indexId && brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, diametrId, indexId, brandId, thornId }, limit, offset })
    }
    if (widthId && !heightId && speedId && !diametrId && indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, indexId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && !indexId && brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, brandId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && heightId && !speedId && diametrId && !indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, heightId, diametrId, brandId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && diametrId && !indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, diametrId, brandId, seasonalityId }, limit, offset })
    }
    if (!widthId && !heightId && !speedId && diametrId && !indexId && brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { diametrId, brandId, seasonalityId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && diametrId && !indexId && !brandId && !thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, diametrId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && speedId && !diametrId && indexId && !brandId && thornId && seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, indexId, thornId, seasonalityId }, limit, offset })
    }
    if (widthId && !heightId && speedId && diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { widthId, speedId, diametrId, indexId, thornId }, limit, offset })
    }
    if (!widthId && heightId && speedId && diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, speedId, diametrId, indexId, thornId }, limit, offset })
    }
    if (!widthId && heightId && !speedId && diametrId && indexId && !brandId && thornId && !seasonalityId) {
      Products = await Product.findAndCountAll({ where: { heightId, diametrId, indexId, thornId }, limit, offset })
    }
    return res.json(Products)
  }

  async getOne(req, res) {
    const { id } = req.params
    const product = await Product.findOne(
      {
        where: { id },
        include: [{ model: ProductInfo, as: 'info' }]
      },
    )
    return res.json(product)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const product = await Product.destroy(
      {
        where: { id },
      },
    )
    return res.json(product)
  };
}

module.exports = new ProductController()