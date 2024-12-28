/**
 * Author: James Thomas
 * Date: 2024/12/27
 * Description: Database model to manage 'contacts' collection. 
 */
const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
    id: Number,
    url: String,
    type: String,
});
const ContactModel = mongoose.model("contacts", ContactSchema);
module.exports = ContactModel;