/**
 * Author: James Thomas
 * Date: 2024/12/27
 * Description: Database model to manage 'projects' collection. 
 */
const mongoose = require('mongoose');
const SkillSchema = new mongoose.Schema({
    id: Number,
    name: String,
    level: Number,
    avatar: String,
});
const SkillModel = mongoose.model("skills", SkillSchema);
module.exports = SkillModel;