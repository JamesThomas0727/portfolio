/**
 * Author: James Thomas
 * Date: 2024/12/27
 * Description: Database model to manage 'educations' collection. 
 */
const mongoose = require('mongoose');
const EducationSchema = new mongoose.Schema({
    id: Number,
    what: String,
    description: String,
    where: {
        country: String,
        city: String,
        name: String,
    },
    from: { type: Date, default: Date.now },
    to: { type: Date, default: Date.now },
});
const EducationModel = mongoose.model("educations", EducationSchema);
module.exports = EducationModel;