const sequelize = require('../config/connection');
const { User, Finance } = require('../models');

const userData = require('./usedData.json');
const financeData = require('./financeData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const finances of financeData) {
    await Finance.create({
      ...finances,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
