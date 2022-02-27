module.exports = (sequelize, DataTypes) => {
  const PaymentOptions = sequelize.define('PaymentOptions', {
    creditCardNumber: {
      type: DataTypes.BIGINT,
      validate: { isCreditCard: true },
      allowNull: false,
    },
    cardHolder: { type: DataTypes.STRING, allowNull: false },
    cvcNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ccExpData: { type: DataTypes.DATEONLY, allowNull: false },
  });
  return PaymentOptions;
};
