const Project = require('../model/Project');

const handler = {};

handler.getAll = async (req, res, next) => {
    try {
        const projects = await Project.find({});

        return res.status(200).json({ status: 'success', data: projects });
    } catch (error) {
        next(error);
    }
};

handler.create = async (req, res, next) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();

        return res.status(203).json({ status: 'success', data: newProject });
    } catch (error) {
        next(error);
    }
};

module.exports = handler;