const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Finance extends Model {}

Finance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expenses: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    goal_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    goal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'finance',
  }
);

module.exports = Finance;