/**
 * Author: James Thomas
 * Date: 2024/12/27
 * Description: Database model to manage 'skills' collection. 
 */
const mongoose = require('mongoose');
const SkillSchema = new mongoose.Schema({
    skill: { type: String, required: true, unique: true },
    level: { type: Number, required: true },
    avatar: { type: String },
    category: { type: String },
});
const SkillModel = mongoose.model("skills", SkillSchema);
module.exports = SkillModel;