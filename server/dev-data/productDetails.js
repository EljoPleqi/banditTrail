module.exports = (sequelize, DataTypes) => {
  const ProductDetails = sequelize.define('ProductDetails', {
    category: { type: DataTypes.STRING, allowNull: false },
    brand: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    primaryColor: { type: DataTypes.STRING, allowNull: false },
    secondaryColor: { type: DataTypes.STRING, allowNull: true },
    size: { type: DataTypes.STRING, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: true },
    ridingStyle: { type: DataTypes.STRING, allowNull: false },
    material: { type: DataTypes.STRING, allowNull: false },
    wheelSize: { type: DataTypes.SMALLINT, allowNull: false },
    condition: { type: DataTypes.BOOLEAN, allowNULL: false },
    bestseller: true,
  });
  return ProductDetails;
};
