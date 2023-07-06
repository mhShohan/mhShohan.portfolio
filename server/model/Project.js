const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    github: { type: String, required: true },
    liveLink: { type: String, required: true },
    featured: { type: Boolean, required: true },
    features: [{ type: String, required: true }],
    type: { type: String, enum: ['FULLSTACK', 'FRONTEND'] }
});



module.exports = mongoose.model('project', projectSchema)


