module.exports = (sequelize, DataTypes) => {
  const Parts = sequelize.define('Parts', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    featuredImage: { type: DataTypes.STRING, allowNULL: false },
    productTitle: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    currency: { type: DataTypes.STRING, defaultValue: '€' },
    productDescription: { type: DataTypes.TEXT, allowNull: false },
    brand: { type: DataTypes.STRING, allowNull: false },
    primaryColor: { type: DataTypes.STRING, allowNull: false },
    secondaryColor: { type: DataTypes.STRING, allowNull: true },
    material: { type: DataTypes.STRING, allowNull: false },
    condition: { type: DataTypes.BOOLEAN, allowNULL: false },
    images: { type: DataTypes.TEXT, allowNULL: true },
    sold: { type: DataTypes.BOOLEAN, defaultValue: false },
  });
  Parts.associate = (models) => {
    // Parts.belongsToMany(models.Users, { through: 'Products' });
  };
  return Parts;
};
