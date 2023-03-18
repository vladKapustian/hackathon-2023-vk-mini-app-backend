const { DataTypes, HasMany } = require('sequelize');
const sequelize = require('../sequelize');
const Lesson = require('../Lesson/Lesson')

const Day = sequelize.define('Day', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  }
});

Lesson.hasMany(Day)
module.exports = Day;
