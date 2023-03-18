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

try {
  Schedule.bulkCreate([
    { DayId: 2 }, { DayId: 1 }
  ])
} catch (error) {
  console.log(error)
}

Day.hasMany(Schedule)
module.exports = Schedule;