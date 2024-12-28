/**
 * Author: James Thomas
 * Date: 2024/12/27
 * Description: Database model to manage 'clients' collection. 
 */
const mongoose = require('mongoose');
const ClientSchema = new mongoose.Schema({
    url: { type: Array, required: true, unique: true },
    name: { type: String },
    country: { type: String },
});
const ClientModel = mongoose.model("clients", ClientSchema);
module.exports = ClientModel;