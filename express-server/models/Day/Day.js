import { DataTypes } from 'sequelize';
import { sequelize } from '../../sequelize.js';
import { Lesson } from '../Lesson/Lesson.js';

export const Day = sequelize.define("Day", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dayNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Day.hasMany(Lesson);
