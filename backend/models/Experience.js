/**
 * Author: James Thomas
 * Date: 2024/12/27
 * Description: Database model to manage 'experiences' collection. 
 */
const mongoose = require('mongoose');
const ExperienceSchema = new mongoose.Schema({
    id: Number,
    what: String,
    where: String,
    projects: Array,
    description: String,
    from: { type: Date, default: Date.now },
    to: { type: Date, default: Date.now },
});
const ExperienceModel = mongoose.model("experiences", ExperienceSchema);
module.exports = ExperienceModel;