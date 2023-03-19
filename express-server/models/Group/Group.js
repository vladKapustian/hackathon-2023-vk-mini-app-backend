import { DataTypes } from "sequelize";
import { sequelize } from "../../sequelize.js";
import { Schedule } from "../Schedule/Schedule.js";

export const Group = sequelize.define("Group", {
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

Group.hasOne(Schedule);
