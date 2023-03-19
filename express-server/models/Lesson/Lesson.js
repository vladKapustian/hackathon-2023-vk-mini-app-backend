import { DataTypes } from 'sequelize';
import { sequelize } from '../../sequelize.js';

export  const Lesson = sequelize.define('Lesson', {
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