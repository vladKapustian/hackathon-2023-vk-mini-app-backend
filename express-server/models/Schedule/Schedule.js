const { DataTypes, HasMany } = require('sequelize');
const sequelize = require('../../sequelize');
const Day = require('../Day/Day')

const Schedule = sequelize.define('Schedule', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  }
});

Schedule.hasMany(Day)
module.exports = Schedule;