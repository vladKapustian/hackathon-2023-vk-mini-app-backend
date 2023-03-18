const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize');
const Schedule = require('../Schedule/Schedule')

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

Schedule.hasOne(Group);
module.exports = Group;