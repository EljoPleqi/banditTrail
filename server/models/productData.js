module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    productTitle: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.SMALLINT, allowNull: false },
    currency: { type: DataTypes.STRING, allowNull: false },
    productDescription: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    condition: { type: DataTypes.BOOLEAN, allowNULL: false },
  });
  return Products;
};
