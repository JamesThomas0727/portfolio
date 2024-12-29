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
    client: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ClientModel' }],
    from: { type: Date, default: Date.now, required: true },
    to: { type: Date, default: Date.now },
});
const ProjectModel = mongoose.model("projects", ProjectSchema);
module.exports = ProjectModel;