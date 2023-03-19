import express from "express";

import { Group } from "./models/Group/Group.js";
import { Lesson } from "./models/Lesson/Lesson.js";
import { Day } from "./models/Day/Day.js";
import { Schedule } from "./models/Schedule/Schedule.js";

import { getFaculties, getCourses, getGroups } from "./models/Group/groupController.js";
import { getSchedule } from "./models/Schedule/scheduleController.js";

import { sequelize } from "./sequelize.js";

const app = express();

// { force: true }
const _startServer = async () => {
  try {
    await Promise.all([
      Group.sync({ force: true }),
      Lesson.sync({ force: true }),
      Day.sync({ force: true }),
      Schedule.sync({ force: true }),
      sequelize.authenticate(),
    ]).then(() => console.log("Connection has been established successfully"));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

try {
  await _startServer().then(() => {
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
  });
} catch (error) {
  console.log("ERROR: ", error);
}

app.get("/faculties", getFaculties);

app.get("/coures", getCourses);

app.get("/groups", getGroups);

app.get("/schedule", getSchedule);

app.listen(3000, () => {
  console.log("Application listening on port 3333!");
});
