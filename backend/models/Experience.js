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
    from: { type: Date, default: Date.now, required: true },
    to: { type: Date, default: Date.now },
});
const ExperienceModel = mongoose.model("experiences", ExperienceSchema);
module.exports = ExperienceModel;