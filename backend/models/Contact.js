/**
 * Author: James Thomas
 * Date: 2024/12/27
 * Description: Database model to manage 'contacts' collection. 
 */
const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
    url: { type: String, required: true, unique: true },
    type: { type: String, required: true },
});
const ContactModel = mongoose.model("contacts", ContactSchema);
module.exports = ContactModel;