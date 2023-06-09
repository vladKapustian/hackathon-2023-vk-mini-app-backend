import { Group } from "./Group.js";
import { sequelize } from "../../sequelize.js";

export const getFaculties = async (req, res) => {
  try {
    const faculties = await Group.findAll({
      attributes: ["faculty"],
    });
    const result = Array.from(new Set(faculties.map(({ faculty }) => faculty)));

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Group.findAll({
      attributes: ["course"],
      where: {
        faculty: req.body,
      },
    });
    res.status(200).send(courses);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getGroups = async (req, res) => {
  try {
    const groups = await Group.findAll({
      attributes: ["id", "group_name"],
      where: {
        faculty: req.body,
        course: req.body,
      },
    });
    res.status(200).send(groups);
  } catch (error) {
    res.status(500).send(error);
  }
};
