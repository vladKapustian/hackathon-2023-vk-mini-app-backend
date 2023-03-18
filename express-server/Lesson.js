const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Lesson = sequelize.define('Lesson', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  classroom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teacher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

try {
  Lesson.bulkCreate([
    { 
      subject: "Инфокоммуникационные системы, сети и телекоммуникации",
      time: "10:10 — 11:40",
      classroom: "ауд. 307",
      teacher: "доц.Щербаков С.М."
    },
    { 
      subject: "Математика",
      time: "11:50 — 13:20",
      classroom: "ауд. 605",
      teacher: "доц.Лукьянова Г.В."
    },
  ])
} catch (error) {
  console.log(error)
}

module.exports = Lesson;