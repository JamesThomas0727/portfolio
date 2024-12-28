/**
 * Author: James Thomas
 * Date: 2024/12/27
 * Description: Database model to manage 'educations' collection. 
 */
const mongoose = require('mongoose');
const EducationSchema = new mongoose.Schema({
    what: { type: String, required: true },
    description: { type: String },
    where: {
        country: { type: String },
        city: { type: String },
        school: { type: String, required: true, unique: true },
    },
    from: { type: Date, default: Date.now, required: true },
    to: { type: Date, default: Date.now },
});
const EducationModel = mongoose.model("educations", EducationSchema);
module.exports = EducationModel;