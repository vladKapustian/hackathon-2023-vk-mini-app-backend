const { DataTypes, HasMany } = require('sequelize');
const sequelize = require('./sequelize');
const Day = require('./Day')

const Schedule = sequelize.define('Schedule', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  }
});

Day.hasMany(Schedule)
module.exports = Schedule;