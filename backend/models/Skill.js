/**
 * Author: James Thomas
 * Date: 2024/12/27
 * Description: Database model to manage 'skills' collection. 
 */
const mongoose = require('mongoose');
const SkillSchema = new mongoose.Schema({
    skill: String,
    level: Number,
    avatar: String,
    category: String,
});
const SkillModel = mongoose.model("skills", SkillSchema);
module.exports = SkillModel;