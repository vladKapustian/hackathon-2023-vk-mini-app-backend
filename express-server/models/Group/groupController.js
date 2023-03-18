export const getFaculties = async (req, res) => {
    try {
        const faculties = await Group.findAll({
            attributes: ['faculty']
        });
        res.status(200).send(faculties);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getCourses = async (req, res) => {
    try {
        const courses = await Group.findAll({
            attributes: ['course'],
            where: {
                'faculty': req.body
            }
        });
        res.status(200).send(courses);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getGroups = async (req, res) => {
    try {
        const groups = await Group.findAll({
            attributes: ['group_name'],
            where: {
                'faculty': req.body,
                'course': req.body
            }
        });
        res.status(200).send(groups);
    } catch (error) {
        res.status(500).send(error);
    }
}