module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
  });
  Products.associate = (models) => {
    Products.belongsTo(models.Users);
    Products.hasMany(models.Bikes, { onDelete: 'cascade' });
    Products.hasMany(models.Apparel, { onDelete: 'cascade' });
    Products.hasMany(models.Parts, { onDelete: 'cascade' });
  };
  return Products;
};
