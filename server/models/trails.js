module.exports = (sequelize, DataTypes) => {
  const Trails = sequelize.define('Trails', {
    trailName: { type: DataTypes.STRING, allowNull: false },
    trailDescription: { type: DataTypes.TEXT, allowNull: false },
    trailDuration: { type: DataTypes.FLOAT, allowNull: false },
    traiDistance: { type: DataTypes.FLOAT, allowNull: false },
    trailDifficulty: { type: DataTypes.STRING, allowNull: false },
  });

  return Trails;
};
