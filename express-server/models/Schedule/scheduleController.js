import { Schedule } from "../Schedule/Schedule.js";
import { Day } from "../Day/Day.js";
import { Lesson } from "../Lesson/Lesson.js";

export const getSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findOne({
      where: {
        id: req.body,
      },
    });

    if (req.body.returnWeek) {
      const day = await Day.findAll();
    } else {
      const day = await Day.findAll({
        where: {
          id: schedule.DayId,
          dayNumber: req.body.dayNumber,
        },
      });
    }

    const lessons = await Lesson.findAll({
      where: {
        id: day.LessonId,
      },
    });

    res.status(200).send(lessons);
  } catch (error) {
    res.status(500).send(error);
  }
};
