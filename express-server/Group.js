const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');
const Schedule = require('./Schedule')

const Group = sequelize.define('Group', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  faculty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  course: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  group_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

try {
  Group.bulkCreate([
    {
      faculty: "КТиБ",
      course: 1,
      group_name: "ИСТ-311"
    },
    {
      faculty: "КТиБ",
      course: 1,
      group_name: "ПМИ-311"
    },
  ])
} catch (error) {
  console.log(error)
}

Schedule.hasOne(Group);
module.exports = Group;