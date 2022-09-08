// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'catagory_id',
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'catagory_id',
  onDelete: 'CASCADE',
})

// Products belongToMany Tags (through ProductTag)
ProductTag.belongsToMany(Tag, {
  foreignKey: 'tag_id',
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
