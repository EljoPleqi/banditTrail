module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    avatar: { type: DataTypes.STRING, allowNull: false },
    username: {
      type: DataTypes.STRING,
      validate: { is: /^[A-Za-z0-9_.-]*$/, min: 4 },
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(),
      validate: {
        min: 12,
        max: 64,
      },
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING,
      validate: { is: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ },
      allowNull: false,
      unique: true,
    },
    userPhone: { type: DataTypes.BIGINT },
    userDescription: { type: DataTypes.TEXT },
    userRidingStyle: { type: DataTypes.STRING },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Bikes, { onDelete: 'cascade' });
    Users.hasMany(models.Apparel, { onDelete: 'cascade' });
    Users.hasMany(models.Parts, { onDelete: 'cascade' });
    Users.hasMany(models.PaymentOptions, { onDelete: 'cascade' });
    Users.hasOne(models.Subscription, { onDelete: 'cascade' });
  };
  return Users;
};
