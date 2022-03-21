module.exports = (sequelize, DataTypes) => {
  const Apparel = sequelize.define('Apparel', {
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
    category: { type: DataTypes.STRING, allowNULL: false },
    productDescription: { type: DataTypes.TEXT, allowNull: false },
    brand: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    primaryColor: { type: DataTypes.STRING, allowNull: false },
    secondaryColor: { type: DataTypes.STRING, allowNull: true },
    size: { type: DataTypes.STRING, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: true },
    material: { type: DataTypes.STRING, allowNull: false },
    condition: { type: DataTypes.BOOLEAN, allowNULL: false },
    images: { type: DataTypes.TEXT, allowNULL: true },
    sold: { type: DataTypes.BOOLEAN, defaultValue: false },
  });

  Apparel.associate = (models) => {
    // Apparel.belongsToMany(models.Users, { through: 'Products' });
  };
  return Apparel;
};
