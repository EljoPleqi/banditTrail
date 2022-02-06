module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    featuredImage: { type: DataTypes.STRING, allowNull: false },
    productTitle: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    currency: { type: DataTypes.STRING, allowNull: false },
    productDescription: { type: DataTypes.TEXT, allowNull: false },
  });

  Products.associate = (models) => {
    Products.hasOne(models.ProductDetails, {
      onDelete: 'cascade',
    });
  };
  return Products;
};
