const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Product = sequelize.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
})

const Disk = sequelize.define('disk', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
})

const Width = sequelize.define('width', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})
const WidthDisk = sequelize.define('width_disk', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Height = sequelize.define('height', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Diametr = sequelize.define('diametr', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const DiametrDisk = sequelize.define('diametr_disk', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const DiametrDiskKrep = sequelize.define('diametr_disk_krep', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Index = sequelize.define('index', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Vilet = sequelize.define('vilet', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Dium = sequelize.define('dium', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const BrandDisk = sequelize.define('brand_disk', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const KrepQuan = sequelize.define('krep_quan', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Speed = sequelize.define('speed', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Brand = sequelize.define('brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Thorn = sequelize.define('thorn', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Seasonality = sequelize.define('seasonality', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const ProductInfo = sequelize.define('product_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
})

const DiskInfo = sequelize.define('info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
})

const HeightBrand = sequelize.define('height_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const HeightWidth = sequelize.define('height_width', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const HeightThorn = sequelize.define('height_thorn', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const HeightSeasonality = sequelize.define('height_seasonality', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const DiametrBrand = sequelize.define('diametr_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const DiametrHeight = sequelize.define('diametr_height', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const DiametrWidth = sequelize.define('diametr_width', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const DiametrThorn = sequelize.define('diametr_thorn', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const DiametrSeasonality = sequelize.define('diametr_seasonality', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const IndexBrand = sequelize.define('index_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const IndexThorn = sequelize.define('index_thorn', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const IndexSeasonality = sequelize.define('index_seasonality', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const DiametrIndex = sequelize.define('diametr_index', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const IndexHeight = sequelize.define('index_height', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const IndexWidth = sequelize.define('index_width', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const IndexSpeed = sequelize.define('index_speed', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const SpeedBrand = sequelize.define('speed_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const SpeedHeight = sequelize.define('speed_height', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const SpeedThorn = sequelize.define('speed_thorn', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const SpeedSeasonality = sequelize.define('speed_seasonality', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const BrandWidth = sequelize.define('brand_width', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const BrandThorn = sequelize.define('brand_thorn', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const BrandSeasonality = sequelize.define('brand_seasonality', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const SpeedWidth = sequelize.define('speed_width', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const WidthThorn = sequelize.define('width_thorn', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const WidthSeasonality = sequelize.define('width_seasonality', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const SpeedDiametr = sequelize.define('speed_diametr', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const TypeKrepQuan = sequelize.define('type_krep_quan', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const TypeDiametrDisk = sequelize.define('type_diametr_disk', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const TypeBrandDisk = sequelize.define('type_brad_disk', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const TypeDiametrDiskKrep = sequelize.define('type_diametr_disk_krep', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const TypeDium = sequelize.define('type_dium', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const TypeVilet = sequelize.define('type_vilet', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const DiametrDiskBrandDisk = sequelize.define('diametr_disk_brand_disk', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const DiametrDiskDium = sequelize.define('diametr_disk_dium', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const DiametrDiskVilet = sequelize.define('diametr_disk_vilet', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const DiametrDiskDiametrDiskKrep = sequelize.define('diametr_disk_diametr_disk_krep', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const DiametrDiskKrepQuan = sequelize.define('diametr_disk_krep_quan', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const BrandDiskKrepQuan = sequelize.define('brand_disk_krep_quan', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const BrandDiskDium = sequelize.define('brand_disk_dium', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const BrandDiskVilet = sequelize.define('brand_disk_vilet', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const BrandDiskDiametrDiskKrep = sequelize.define('brand_disk_diametr_disk_krep', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const KrepQuanDium = sequelize.define('krep_quan_dium', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const KrepQuanVilet = sequelize.define('krep_quan_vilet', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const KrepQuanDiametrDiskKrep = sequelize.define('krep_quan_diametr_disk_krep', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const DiumVilet = sequelize.define('dium_vilet', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const DiumDiametrDiskKrep = sequelize.define('dium_diametr_disk_krep', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const ViletDiametrDiskKrep = sequelize.define('vilet_diametr_disk_krep', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const WidthDiskDiametrDisk = sequelize.define('width_disk_diametr_disk', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const WidthDiskBrandDisk = sequelize.define('width_disk_brand_disk', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const WidthDiskDiametrDiskKrep = sequelize.define('width_disk_diametr_disk_krep', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const WidthDiskKrepQuan = sequelize.define('width_disk_krep_quan', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const WidthDiskDium = sequelize.define('width_disk_dium', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const WidthDiskVilet = sequelize.define('width_disk_vilet', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const WidthDiskType = sequelize.define('width_disk_type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

Width.hasMany(Product)
Product.belongsTo(Width)

Height.hasMany(Product)
Product.belongsTo(Height)

Diametr.hasMany(Product)
Product.belongsTo(Diametr)

Index.hasMany(Product)
Product.belongsTo(Index)

Speed.hasMany(Product)
Product.belongsTo(Speed)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Thorn.hasMany(Product)
Product.belongsTo(Thorn)

Seasonality.hasMany(Product)
Product.belongsTo(Seasonality)

Product.hasMany(ProductInfo, { as: 'info' })
ProductInfo.belongsTo(Product)

Disk.hasMany(DiskInfo, { as: 'info' })
DiskInfo.belongsTo(Disk)

KrepQuan.hasMany(Disk)
Disk.belongsTo(KrepQuan)

WidthDisk.hasMany(Disk)
Disk.belongsTo(WidthDisk)

Vilet.hasMany(Disk)
Disk.belongsTo(Vilet)

Dium.hasMany(Disk)
Disk.belongsTo(Dium)

BrandDisk.hasMany(Disk)
Disk.belongsTo(BrandDisk)

DiametrDiskKrep.hasMany(Disk)
Disk.belongsTo(DiametrDiskKrep)

DiametrDisk.hasMany(Disk)
Disk.belongsTo(DiametrDisk)

Type.hasMany(Disk)
Disk.belongsTo(Type)

Width.belongsToMany(Brand, { through: BrandWidth })
Brand.belongsToMany(Width, { through: BrandWidth })

Type.belongsToMany(DiametrDisk, { through: TypeDiametrDisk })
DiametrDisk.belongsToMany(Type, { through: TypeDiametrDisk })

Type.belongsToMany(BrandDisk, { through: TypeBrandDisk })
BrandDisk.belongsToMany(Type, { through: TypeBrandDisk })

Type.belongsToMany(DiametrDiskKrep, { through: TypeDiametrDiskKrep })
DiametrDiskKrep.belongsToMany(Type, { through: TypeDiametrDiskKrep })

Type.belongsToMany(KrepQuan, { through: TypeKrepQuan })
KrepQuan.belongsToMany(Type, { through: TypeKrepQuan })

Type.belongsToMany(Dium, { through: TypeDium })
Dium.belongsToMany(Type, { through: TypeDium })

Type.belongsToMany(Vilet, { through: TypeVilet })
Vilet.belongsToMany(Type, { through: TypeVilet })

WidthDisk.belongsToMany(DiametrDisk, { through: WidthDiskDiametrDisk })
DiametrDisk.belongsToMany(WidthDisk, { through: WidthDiskDiametrDisk })

WidthDisk.belongsToMany(BrandDisk, { through: WidthDiskBrandDisk })
BrandDisk.belongsToMany(WidthDisk, { through: WidthDiskBrandDisk })

WidthDisk.belongsToMany(DiametrDiskKrep, { through: WidthDiskDiametrDiskKrep })
DiametrDiskKrep.belongsToMany(WidthDisk, { through: WidthDiskDiametrDiskKrep })

WidthDisk.belongsToMany(KrepQuan, { through: WidthDiskKrepQuan })
KrepQuan.belongsToMany(WidthDisk, { through: WidthDiskKrepQuan })

WidthDisk.belongsToMany(Dium, { through: WidthDiskDium })
Dium.belongsToMany(WidthDisk, { through: WidthDiskDium })

WidthDisk.belongsToMany(Vilet, { through: WidthDiskVilet })
Vilet.belongsToMany(WidthDisk, { through: WidthDiskVilet })

WidthDisk.belongsToMany(Type, { through: WidthDiskType })
Type.belongsToMany(WidthDisk, { through: WidthDiskType })

DiametrDisk.belongsToMany(BrandDisk, { through: DiametrDiskBrandDisk })
BrandDisk.belongsToMany(DiametrDisk, { through: DiametrDiskBrandDisk })

DiametrDisk.belongsToMany(Dium, { through: DiametrDiskDium })
Dium.belongsToMany(DiametrDisk, { through: DiametrDiskDium })

DiametrDisk.belongsToMany(Vilet, { through: DiametrDiskVilet })
Vilet.belongsToMany(DiametrDisk, { through: DiametrDiskVilet })

DiametrDisk.belongsToMany(DiametrDiskKrep, { through: DiametrDiskDiametrDiskKrep })
DiametrDiskKrep.belongsToMany(DiametrDisk, { through: DiametrDiskDiametrDiskKrep })

DiametrDisk.belongsToMany(KrepQuan, { through: DiametrDiskKrepQuan })
KrepQuan.belongsToMany(DiametrDisk, { through: DiametrDiskKrepQuan })

BrandDisk.belongsToMany(KrepQuan, { through: BrandDiskKrepQuan })
KrepQuan.belongsToMany(BrandDisk, { through: BrandDiskKrepQuan })

BrandDisk.belongsToMany(Dium, { through: BrandDiskDium })
Dium.belongsToMany(BrandDisk, { through: BrandDiskDium })

BrandDisk.belongsToMany(Vilet, { through: BrandDiskVilet })
Vilet.belongsToMany(BrandDisk, { through: BrandDiskVilet })

BrandDisk.belongsToMany(DiametrDiskKrep, { through: BrandDiskDiametrDiskKrep })
DiametrDiskKrep.belongsToMany(BrandDisk, { through: BrandDiskDiametrDiskKrep })

KrepQuan.belongsToMany(Dium, { through: KrepQuanDium })
Dium.belongsToMany(KrepQuan, { through: KrepQuanDium })

KrepQuan.belongsToMany(Vilet, { through: KrepQuanVilet })
Vilet.belongsToMany(KrepQuan, { through: KrepQuanVilet })

KrepQuan.belongsToMany(DiametrDiskKrep, { through: KrepQuanDiametrDiskKrep })
DiametrDiskKrep.belongsToMany(KrepQuan, { through: KrepQuanDiametrDiskKrep })

Dium.belongsToMany(Vilet, { through: DiumVilet })
Vilet.belongsToMany(Dium, { through: DiumVilet })

Dium.belongsToMany(DiametrDiskKrep, { through: DiumDiametrDiskKrep })
DiametrDiskKrep.belongsToMany(Dium, { through: DiumDiametrDiskKrep })

Vilet.belongsToMany(DiametrDiskKrep, { through: ViletDiametrDiskKrep })
DiametrDiskKrep.belongsToMany(Vilet, { through: ViletDiametrDiskKrep })

Height.belongsToMany(Brand, { through: HeightBrand })
Brand.belongsToMany(Height, { through: HeightBrand })

Height.belongsToMany(Width, { through: HeightWidth })
Width.belongsToMany(Height, { through: HeightWidth })

Height.belongsToMany(Thorn, { through: HeightThorn })
Thorn.belongsToMany(Height, { through: HeightThorn })

Height.belongsToMany(Seasonality, { through: HeightSeasonality })
Seasonality.belongsToMany(Height, { through: HeightSeasonality })

Diametr.belongsToMany(Brand, { through: DiametrBrand })
Brand.belongsToMany(Diametr, { through: DiametrBrand })

Diametr.belongsToMany(Index, { through: DiametrIndex })
Index.belongsToMany(Diametr, { through: DiametrIndex })

Diametr.belongsToMany(Width, { through: DiametrWidth })
Width.belongsToMany(Diametr, { through: DiametrWidth })

Diametr.belongsToMany(Height, { through: DiametrHeight })
Height.belongsToMany(Diametr, { through: DiametrHeight })

Diametr.belongsToMany(Thorn, { through: DiametrThorn })
Thorn.belongsToMany(Diametr, { through: DiametrThorn })

Diametr.belongsToMany(Seasonality, { through: DiametrSeasonality })
Seasonality.belongsToMany(Diametr, { through: DiametrSeasonality })

Index.belongsToMany(Brand, { through: IndexBrand })
Brand.belongsToMany(Index, { through: IndexBrand })

Index.belongsToMany(Width, { through: IndexWidth })
Width.belongsToMany(Index, { through: IndexWidth })

Index.belongsToMany(Height, { through: IndexHeight })
Height.belongsToMany(Index, { through: IndexHeight })

Index.belongsToMany(Speed, { through: IndexSpeed })
Speed.belongsToMany(Index, { through: IndexSpeed })

Index.belongsToMany(Thorn, { through: IndexThorn })
Thorn.belongsToMany(Index, { through: IndexThorn })

Index.belongsToMany(Seasonality, { through: IndexSeasonality })
Seasonality.belongsToMany(Index, { through: IndexSeasonality })

Speed.belongsToMany(Brand, { through: SpeedBrand })
Brand.belongsToMany(Speed, { through: SpeedBrand })

Speed.belongsToMany(Diametr, { through: SpeedDiametr })
Diametr.belongsToMany(Speed, { through: SpeedDiametr })

Speed.belongsToMany(Width, { through: SpeedWidth })
Width.belongsToMany(Speed, { through: SpeedWidth })

Speed.belongsToMany(Height, { through: SpeedHeight })
Height.belongsToMany(Speed, { through: SpeedHeight })

Speed.belongsToMany(Thorn, { through: SpeedThorn })
Thorn.belongsToMany(Speed, { through: SpeedThorn })

Speed.belongsToMany(Seasonality, { through: SpeedSeasonality })
Seasonality.belongsToMany(Speed, { through: SpeedSeasonality })

Width.belongsToMany(Seasonality, { through: WidthSeasonality })
Seasonality.belongsToMany(Width, { through: WidthSeasonality })

Width.belongsToMany(Thorn, { through: WidthThorn })
Thorn.belongsToMany(Width, { through: WidthThorn })

module.exports = {
  Product,
  Disk,
  KrepQuan,
  DiskInfo,
  Vilet,
  Dium,
  Thorn,
  Seasonality,
  Type,
  BrandDisk,
  DiametrDisk,
  DiametrDiskKrep,
  TypeKrepQuan,
  TypeDiametrDisk,
  TypeBrandDisk,
  TypeDiametrDiskKrep,
  TypeDium,
  TypeVilet,
  DiametrDiskBrandDisk,
  DiametrDiskDium,
  DiametrDiskVilet,
  DiametrDiskDiametrDiskKrep,
  DiametrDiskKrepQuan,
  BrandDiskKrepQuan,
  BrandDiskDium,
  BrandDiskVilet,
  BrandDiskDiametrDiskKrep,
  KrepQuanDium,
  KrepQuanVilet,
  KrepQuanDiametrDiskKrep,
  DiumVilet,
  DiumDiametrDiskKrep,
  ViletDiametrDiskKrep,
  Width,
  WidthDisk,
  WidthDiskDium,
  WidthDiskBrandDisk,
  WidthDiskKrepQuan,
  WidthDiskDiametrDisk,
  WidthDiskDiametrDiskKrep,
  WidthDiskType,
  WidthDiskVilet,
  Brand,
  ProductInfo,
  Speed,
  Diametr,
  Width,
  Index,
  Height,
  SpeedDiametr,
  SpeedBrand,
  SpeedHeight,
  SpeedWidth,
  SpeedThorn,
  SpeedSeasonality,
  IndexBrand,
  IndexHeight,
  IndexSpeed,
  IndexWidth,
  IndexThorn,
  IndexSeasonality,
  DiametrIndex,
  DiametrBrand,
  DiametrHeight,
  DiametrWidth,
  DiametrThorn,
  DiametrSeasonality,
  WidthThorn,
  WidthSeasonality,
  BrandWidth,
  BrandThorn,
  BrandSeasonality,
  HeightWidth,
  HeightBrand,
  HeightThorn,
  HeightSeasonality,
}