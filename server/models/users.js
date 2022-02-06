module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    avatar: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    userEmail: { type: DataTypes.STRING, allowNull: false },
    userPhone: { type: DataTypes.BIGINT },
    userDescription: { type: DataTypes.TEXT },
    userRidingStyle: { type: DataTypes.STRING },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Products, {
      onDelete: 'cascade',
    });
  };
  return Users;
};
