/**
 * Author: James Thomas
 * Date: 2024/12/27
 * Description: Database model to manage 'experiences' collection. 
 */
const mongoose = require('mongoose');
const ExperienceSchema = new mongoose.Schema({
    what: { type: String, required: true },
    where: { type: String, required: true },
    projects: { type: Array },
    description: { type: String },
    from: { type: String, default: Date.now.year, required: true },
    to: { type: String, default: Date.now.year },
});
const ExperienceModel = mongoose.model("experiences", ExperienceSchema);
module.exports = ExperienceModel;