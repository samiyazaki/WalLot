const sequelize = require('../config/connection');
const { User, Income } = require('../models');

const userData = require('./usedData.json');
const incomeData = require('./incomeData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const amounts of incomeData) {
    await Income.create({
      ...amounts,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
