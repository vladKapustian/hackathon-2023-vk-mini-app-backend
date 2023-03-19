const { DataTypes, HasMany } = require('sequelize');
const sequelize = require('../../sequelize');
const Lesson = require('../Lesson/Lesson')

const Day = sequelize.define('Day', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dayNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Day.hasMany(Lesson)
module.exports = Day;
