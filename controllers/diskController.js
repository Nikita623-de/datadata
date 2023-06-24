const uuid = require('uuid')
const path = require('path');
const { Disk, DiskInfo } = require('../models/models')
const ApiError = require('../error/ApiError');

class DiskController {

  async create(req, res, next) {
    try {
      let { name, price, viletId, diumId, krepQuanId, typeId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId, info } = req.body
      const { img } = req.files
      let fileName = uuid.v4() + ".png"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const disk = await Disk.create({
        name, price, viletId, diumId, krepQuanId, typeId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId, img: fileName
      });

      if (info) {
        info = JSON.parse(info)
        info.forEach(i =>
          DiskInfo.create({
            title: i.title,
            description: i.description,
            diskId: disk.id
          })
        )
      }

      return res.json(disk)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let { viletId, diumId, krepQuanId, typeId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId, limit, page } = req.query
    page = page || 1
    limit = limit || 4
    let offset = page * limit - limit
    let disks;
    if (!viletId && !diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && !typeId && widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, widthDiskId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, widthDiskId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, widthDiskId, krepQuanId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { widthDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { typeId, widthDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, widthDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, widthDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && typeId && !widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && !widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diametrDiskId, typeId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, brandDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, brandDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && !widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && typeId && !widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, typeId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, typeId, brandDiskId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && typeId && !widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, typeId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && typeId && widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, typeId, widthDiskId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, widthDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && typeId && !widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, typeId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && !typeId && !widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, typeId, widthDiskId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && typeId && !widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, typeId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, typeId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { typeId, widthDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && !typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && typeId && !widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, typeId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, widthDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, widthDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, widthDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, typeId, widthDiskId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && !widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, diametrDiskId, brandDiskId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, widthDiskId, diametrDiskId, brandDiskId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && !widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { typeId, diametrDiskId, brandDiskId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { typeId, diametrDiskId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && !typeId && widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diametrDiskId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diametrDiskId, widthDiskId, krepQuanId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && !typeId && widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diametrDiskId, widthDiskId, krepQuanId, brandDiskId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diametrDiskId, diametrDiskKrepId, widthDiskId, diumId, typeId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && !typeId && widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, diametrDiskKrepId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && !typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, diametrDiskKrepId, brandDiskId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, diametrDiskKrepId, brandDiskId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, diametrDiskKrepId, brandDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, diametrDiskKrepId, brandDiskId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, widthDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { typeId, widthDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, widthDiskId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, diumId, typeId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && !widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, diumId, typeId, diametrDiskId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, widthDiskId, typeId, brandDiskId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && typeId && !widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, typeId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && !widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, typeId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && !widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, typeId, diametrDiskId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && !widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, typeId, diametrDiskId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && typeId && !widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, typeId, diametrDiskId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, typeId, widthDiskId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && !widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { typeId, diametrDiskId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && !typeId && !widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diametrDiskId, krepQuanId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, krepQuanId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diametrDiskKrepId, krepQuanId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, widthDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, diametrDiskId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && !widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, diumId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, diumId, widthDiskId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, diumId, widthDiskId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && !typeId && !widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && !widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diametrDiskId, krepQuanId, diametrDiskKrepId, widthDiskId, diumId, typeId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && !typeId && !widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, brandDiskId, diametrDiskId, viletId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, widthDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, widthDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, widthDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && typeId && !widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && !typeId && !widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, typeId, widthDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, brandDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, brandDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && !widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, widthDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, widthDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, widthDiskId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, brandDiskId, krepQuanId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, brandDiskId, krepQuanId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, typeId, brandDiskId, krepQuanId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && !widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, typeId, brandDiskId, krepQuanId, diametrDiskId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && !typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, brandDiskId, widthDiskId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && typeId && !widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, diametrDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && !widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, diametrDiskId, diumId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && !widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, diametrDiskId, krepQuanId, diumId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && typeId && !widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, diametrDiskId, krepQuanId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && !widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, widthDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, diametrDiskKrepId, krepQuanId, brandDiskId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && !widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, krepQuanId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, widthDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, widthDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, diumId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diametrDiskId, typeId, widthDiskId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diametrDiskId, typeId, widthDiskId, viletId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { typeId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { widthDiskId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { brandDiskId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diametrDiskId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, typeId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, typeId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, typeId, widthDiskId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, typeId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, typeId, widthDiskId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && !typeId && !widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && !typeId && widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { typeId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && typeId && widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, typeId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, typeId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, typeId, widthDiskId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && typeId && widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, typeId, widthDiskId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, typeId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, typeId, widthDiskId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, typeId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { typeId, widthDiskId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && !typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { widthDiskId, brandDiskId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && !typeId && !widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { brandDiskId, diametrDiskId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { widthDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && !widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { typeId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && !widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, typeId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, typeId, widthDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && typeId && widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, typeId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && !typeId && widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && !widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, typeId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, typeId, widthDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, typeId, widthDiskId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && typeId && widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && !typeId && widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && !typeId && !widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, widthDiskId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, typeId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, brandDiskId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, diametrDiskId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, widthDiskId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, brandDiskId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && !typeId && !widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, diametrDiskId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { typeId, brandDiskId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && !widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { typeId, diametrDiskId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { widthDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && typeId && !widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, widthDiskId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, brandDiskId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diametrDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, brandDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, brandDiskId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, diumId, brandDiskId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, brandDiskId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, brandDiskId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && !typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && !typeId && widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, widthDiskId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && !typeId && !widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && !typeId && !widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && !widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && !widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, diametrDiskId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, widthDiskId, krepQuanId, diametrDiskId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, widthDiskId, brandDiskId, krepQuanId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, widthDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, widthDiskId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, widthDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, widthDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, widthDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && !typeId && !widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && !widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, widthDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, widthDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, typeId, widthDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, typeId, widthDiskId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, typeId, widthDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, typeId, widthDiskId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && krepQuanId && typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { krepQuanId, typeId, widthDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, typeId, widthDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, typeId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, typeId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && !typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && !typeId && widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, widthDiskId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && !typeId && widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, widthDiskId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && !typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && !typeId && !widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, diametrDiskKrepId, brandDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && !widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, diametrDiskKrepId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && !typeId && !widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, diametrDiskKrepId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, typeId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && !widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, typeId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, typeId, widthDiskId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, typeId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, widthDiskId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && !typeId && widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, widthDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, widthDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, widthDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && !typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, widthDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, typeId, widthDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, widthDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && !krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, typeId, widthDiskId, widthDiskId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && widthDiskId && brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { typeId, widthDiskId, brandDiskId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && !diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, typeId, widthDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, widthDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, typeId, widthDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && typeId && !widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, typeId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && diumId && krepQuanId && !typeId && widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, krepQuanId, widthDiskId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, widthDiskId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && typeId && widthDiskId && brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, typeId, widthDiskId, brandDiskId, diametrDiskId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && !typeId && widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, widthDiskId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && !widthDiskId && brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, brandDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && diumId && !krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, diumId, typeId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, typeId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && !diumId && !krepQuanId && typeId && !widthDiskId && brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { typeId, brandDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && typeId && !widthDiskId && !brandDiskId && !diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, typeId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && !typeId && widthDiskId && !brandDiskId && diametrDiskId && diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, widthDiskId, diametrDiskId, diametrDiskKrepId }, limit, offset })
    }
    if (viletId && !diumId && krepQuanId && typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { viletId, krepQuanId, typeId, widthDiskId, diametrDiskId }, limit, offset })
    }
    if (!viletId && diumId && krepQuanId && typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, krepQuanId, typeId, widthDiskId, diametrDiskId }, limit, offset })
    }
    if (!viletId && diumId && !krepQuanId && typeId && widthDiskId && !brandDiskId && diametrDiskId && !diametrDiskKrepId) {
      disks = await Disk.findAndCountAll({ where: { diumId, typeId, widthDiskId, diametrDiskId }, limit, offset })
    }
    return res.json(disks)
  }

  async getOne(req, res) {
    const { id } = req.params
    const disk = await Disk.findOne(
      {
        where: { id },
        include: [{ model: DiskInfo, as: 'info' }]
      },
    )
    return res.json(disk)
  }

  async removeOne(req, res) {
    const id = req.params.id
    const disk = await Disk.destroy(
      {
        where: { id },
      },
    )
    return res.json(disk)
  };
}

module.exports = new DiskController()