module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    name: { type: DataTypes.STRING, allowNULL: false, defaultValue: 'Green' },
    price: {
      type: DataTypes.FLOAT,
      allowNULL: false,
      defaultValue: 0,
    },
    freeListings: {
      type: DataTypes.INTEGER,
      allowNULL: false,
      defaultValue: 10,
    },
    pricePerListings: {
      type: DataTypes.FLOAT,
      allowNULL: false,
      defaultValue: 2.99,
    },
  });

  return Subscription;
};
