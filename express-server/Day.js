const { DataTypes, HasMany } = require('sequelize');
const sequelize = require('./sequelize');
const Lesson = require('./Lesson')

const Day = sequelize.define('Day', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  }
});

try {
  Day.bulkCreate([
    { LessonId: 2 },
    { LessonId: 1 }
  ])
} catch (error) {
  console.log(error)
}

Lesson.hasMany(Day)
module.exports = Day;
