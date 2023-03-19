import { DataTypes } from "sequelize";
import { sequelize } from "../../sequelize.js";
import { Day } from "../Day/Day.js";

export const Schedule = sequelize.define("Schedule", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

Schedule.hasMany(Day);
