module.exports = (sequelize, DataTypes) => {
  const Bikes = sequelize.define('Bikes', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    featuredImage: { type: DataTypes.STRING, allowNULL: false },
    productTitle: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    currency: { type: DataTypes.STRING, defaultValue: '€' },
    productDescription: { type: DataTypes.TEXT, allowNull: false },
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
    images: { type: DataTypes.TEXT, allowNULL: true },
    sold: { type: DataTypes.BOOLEAN, defaultValue: false },
  });

  Bikes.associate = (models) => {
    // Bikes.belongsTo(models.Products);
  };

  return Bikes;
};
