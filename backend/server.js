var cors = require("cors");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const host = process.env.HOST;
const port = process.env.PORT;
const db_uri = process.env.DB_URI;

const SkillModel = require("./models/Skill");
const ContactModel = require("./models/Contact");
const ProjectModel = require("./models/Project");
const EducationModel = require("./models/Education");
const ExperienceModel = require("./models/Experience");

////////////////////////////////////////////////////////
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(db_uri)
    .then(() => console.log('MongoDB connected successfully!'))
    .catch((err) => console.log(err));

/////////////////////////////////////////////////////////

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/projects', async (req, res) => {
    try {
        const projects = await ProjectModel.find();
        res.json(projects);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/skills', async (req, res) => {
    try {
        const skills = await SkillModel.find();
        res.json(skills);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/educations', async (req, res) => {
    try {
        const educations = await EducationModel.find();
        res.json(educations);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/experiences', async (req, res) => {
    try {
        const experiences = await ExperienceModel.find();
        res.json(experiences);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/contacts', async (req, res) => {
    try {
        const contacts = await ContactModel.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//////////////////////////////////////////////////////////////
app.listen(port, () => {
    console.log(`Server running at ${host}:${port}`)
});