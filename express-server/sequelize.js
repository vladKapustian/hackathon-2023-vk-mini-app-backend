import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  host: "localhost",
  dialect: "sqlite",
  storage: "vk-min-app.db.sqlite",
  username: "root",
  password: "rootroot",
  logging: false,
});
