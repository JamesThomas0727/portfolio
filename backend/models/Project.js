/**
 * Author: James Thomas
 * Date: 2024/12/27
 * Description: Database model to manage 'projects' collection. 
 */
const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    url: { type: String, },
    stack: { type: Array, required: true },
    price: { type: Number, required: true },
    avatar: { type: Array, required: true },
    category: { type: Array, required: true },
    description: { type: String },
    title: { type: String },
    client: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ClientModel' }],
    from: { type: String, default: Date.now.year, required: true },
    to: { type: String, default: Date.now.year },
});
const ProjectModel = mongoose.model("projects", ProjectSchema);
module.exports = ProjectModel;