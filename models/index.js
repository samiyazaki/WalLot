const User = require('./User');
const Expense = require('./Expense');
const Income = require('./Income');
const Goal = require('./Goal');

User.hasOne(Expense, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

Expense.belongsTo(User, {
    foreignKey: 'user_id',
  });

User.hasOne(Income, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

Income.belongsTo(User, {
    foreignKey: 'user_id',
  });

User.hasOne(Goal, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

Goal.belongsTo(User, {
    foreignKey: 'user_id',
  });

  module.exports = { User, Expense, Income, Goal};