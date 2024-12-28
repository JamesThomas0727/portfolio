/**
 * Author: James Thomas
 * Date: 2024/12/27
 * Description: Database model to manage 'projects' collection. 
 */
const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    url: String,
    stack: Array,
    price: Number,
    avatar: String,
    category: Array,
    description: String,
    client: {
        url: String,
        name: String,
        country: String,
    },
    from: { type: Date, default: Date.now },
    to: { type: Date, default: Date.now },
});
const ProjectModel = mongoose.model("projects", ProjectSchema);
module.exports = ProjectModel;