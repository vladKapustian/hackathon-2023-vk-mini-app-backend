const Schedule = require("./Schedule")
const Day = require("../Schedule/Schedule")
const Lesson = require("../Lesson/Lesson")

export const getSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findAll({
            where: {
                'id': req.body
            }
        });

        const day = await Day.findAll({
            where: {
                'id': schedule[0].DayId
            }
        });

        const lessons = await Lesson.findAll({
            where: {
                'id': day[0].LessonId
            }
        })

        res.status(200).send(lessons);
    } catch (error) {
        res.status(500).send(error);
    }
}