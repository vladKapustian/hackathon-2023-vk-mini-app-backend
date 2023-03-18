const express = require('express');
const app = express();
const sequelize = require('./sequelize')

const Group = require('./Group')
const Lesson = require('./Lesson')
const Day = require('./Day')
const Schedule = require('./Schedule')

app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});

const _startServer = async () => {
    try {
        await Promise.all([
            sequelize.sync({ alter: true }),
            sequelize.authenticate(),
        ]).then(() => console.log("Connection has been established successfully"));
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

_startServer();