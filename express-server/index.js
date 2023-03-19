const express = require("express");
const app = express();
const sequelize = require("./sequelize");

const Group = require("./models/Group/Group");
const Lesson = require("./models/Lesson/Lesson");
const Day = require("./models/Day/Day");
const Schedule = require("./models/Schedule/Schedule");

import { getFaculties, getCourses, getGroups } from "./models/Group/groupController";
import { getSchedule } from "./models/Schedule/scheduleController";

const _startServer = async () => {
  try {
    await Promise.all([sequelize.sync({ alter: true }), sequelize.authenticate()]).then(() =>
      console.log("Connection has been established successfully")
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

_startServer();

try {
  Lesson.bulkCreate([
    {
      subject: "Инфокоммуникационные системы, сети и телекоммуникации",
      time: "10:10 — 11:40",
      classroom: "ауд. 307",
      teacher: "доц.Щербаков С.М.",
    },
    {
      subject: "Математика",
      time: "11:50 — 13:20",
      classroom: "ауд. 605",
      teacher: "доц.Лукьянова Г.В.",
    },
  ]);
  Day.bulkCreate([
    { dayNumber: 1, LessonId: 2 },
    { dayNumber: 2, LessonId: 1 },
  ]);
  Schedule.bulkCreate([{ DayId: 2 }, { DayId: 1 }]);
  Group.bulkCreate([
    {
      faculty: "КТиБ",
      course: 1,
      group_name: "ИСТ-311",
      ScheduleId: 1,
    },
    {
      faculty: "КТиБ",
      course: 1,
      group_name: "ПМИ-311",
      ScheduleId: 2,
    },
  ]);
} catch (error) {
  console.log("ERROR: ", error);
}

app.get("/faculties", getFaculties);

app.get("/coures", getCourses);

app.get("/groups", getGroups);

app.get("/schedule", getSchedule);

app.listen(3333, () => {
  console.log("Application listening on port 3333!");
});
