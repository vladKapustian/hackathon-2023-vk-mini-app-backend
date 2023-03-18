const Sequelize = require('sequelize');

const sequelize = new Sequelize('shedule_db', 'mysql', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;