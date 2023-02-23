const User = require('./User');
const Finance = require('./Finance');

User.hasOne(Finance, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

Finance.belongsTo(User, {
    foreignKey: 'user_id',
  });

  module.exports = { User, Finance};